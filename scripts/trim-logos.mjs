/**
 * Downloads sponsor logos from their source URLs, trims transparent/white
 * whitespace, adds a small safe margin, and saves optimised PNGs to
 * public/sponsors/.
 *
 * Run once:  node scripts/trim-logos.mjs
 */

import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../public/sponsors");
mkdirSync(OUT, { recursive: true });

// margin added around the trimmed logo as % of the longer dimension
const MARGIN_FACTOR = 0.07;

const sponsors = [
  { slug: "altium",            url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Altium_Limited_logo.svg",                                                        whiteBg: false },
  { slug: "solidworks",        url: "https://upload.wikimedia.org/wikipedia/en/d/d2/SolidWorks_Logo.svg",                                                                  whiteBg: false },
  { slug: "easycomposites",    url: "https://www.easycomposites.co.uk/_next/static/images/logo-4a2acc14e3f285ae0d75a4f45953f5d9.png",                                     whiteBg: false },
  { slug: "skf",               url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/SKF_logotype_blue_2025.svg/500px-SKF_logotype_blue_2025.svg.png",           whiteBg: false },
  { slug: "skule",             url: "https://skule.ca/assets/skule-logo-white.svg",                                                                                        whiteBg: false, invert: true },
  { slug: "voltaenergy",       url: "https://www.voltaenergy.ca/images/Volta-Energy-Logo.png",                                                                             whiteBg: false },
  { slug: "swagelok",          url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Swagelok_Company_Logo.jpg/400px-Swagelok_Company_Logo.jpg",                     whiteBg: true  },
  { slug: "soprema",           url: "https://images.seeklogo.com/logo-png/21/2/soprema-logo-png_seeklogo-215250.png",                                                      whiteBg: false },
  { slug: "uoft-fase",         url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/UofT_FASE_Logo.svg/500px-UofT_FASE_Logo.svg.png",                               whiteBg: false },
  { slug: "spectronik",        url: "https://shop.spectronik.com/image/catalog/spectronik_logo.jpg",                                                                       whiteBg: true  },
  { slug: "shannonville",      url: "https://shannonville.com/wp-content/uploads/2022/06/Shannonville_Logo_RGB-WHITE.png",                                                whiteBg: false, invert: true },
  { slug: "stickercanada",     url: "https://static.stickercanada.com/v2/images/comp_logo.png",                                                                            whiteBg: false },
  { slug: "compositescanada",  url: "https://compositescanada.com/wp-content/uploads/2019/01/CompositesCanadaLogo-250px.png",                                              whiteBg: false },
  { slug: "polymaker",         url: "https://shop.polymaker.com/cdn/shop/files/Polymaker_New_Logo.png?v=1756260800&width=400",                                             whiteBg: false },
];

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; logo-trimmer/1.0)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

/**
 * Given a raw RGBA buffer (width × height), find the tightest bounding box
 * that contains non-transparent, non-near-white pixels.
 */
function findBounds(data, w, h, whiteBg) {
  let minX = w, maxX = 0, minY = h, maxY = 0;
  const threshold = whiteBg ? 245 : 10; // alpha threshold for transparent, or near-white for jpg

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];

      let isBackground;
      if (whiteBg) {
        // treat near-white as background
        isBackground = r >= threshold && g >= threshold && b >= threshold;
      } else {
        // treat near-transparent as background
        isBackground = a < threshold;
      }

      if (!isBackground) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // fallback: nothing found → full image
  if (minX > maxX || minY > maxY) return { left: 0, top: 0, width: w, height: h };
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

async function processLogo({ slug, url, whiteBg = false, invert = false }) {
  const outPath = join(OUT, `${slug}.png`);
  try {
    console.log(`  fetching ${slug}...`);
    const raw = await fetchBuffer(url);

    // Rasterise SVGs at 2× resolution for quality
    let img = sharp(raw, { density: 300 });
    const meta = await img.metadata();

    // For SVGs or very small images, ensure we render at a reasonable size
    const isSmall = meta.width && meta.width < 300;
    if (meta.format === "svg" || isSmall) {
      img = sharp(raw, { density: 300 }).resize({ width: 800, withoutEnlargement: false });
    }

    // Convert to RGBA for pixel analysis
    const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const { width: w, height: h } = info;

    // Find content bounds
    const bounds = findBounds(data, w, h, whiteBg);

    // Add safe margin (7% of longer dimension)
    const margin = Math.round(Math.max(bounds.width, bounds.height) * MARGIN_FACTOR);
    const left   = Math.max(0, bounds.left - margin);
    const top    = Math.max(0, bounds.top  - margin);
    const right  = Math.min(w, bounds.left + bounds.width  + margin);
    const bottom = Math.min(h, bounds.top  + bounds.height + margin);
    const cropW  = right - left;
    const cropH  = bottom - top;

    // Build pipeline: crop → optional invert → flatten white bg if needed → PNG
    let pipeline = sharp(raw, { density: 300 });
    if (meta.format === "svg" || isSmall) {
      pipeline = pipeline.resize({ width: 800, withoutEnlargement: false });
    }

    pipeline = pipeline
      .ensureAlpha()
      .extract({ left, top, width: cropW, height: cropH });

    if (invert) {
      // White logo on transparent → invert to black logo on transparent
      pipeline = pipeline.negate({ alpha: false });
    }

    if (whiteBg) {
      // Flatten white background for JPEGs that had baked-in white
      pipeline = pipeline.flatten({ background: { r: 255, g: 255, b: 255 } });
    }

    const buf = await pipeline.png({ compressionLevel: 9 }).toBuffer();
    writeFileSync(outPath, buf);

    const savings = (((raw.length - buf.length) / raw.length) * 100).toFixed(0);
    console.log(`  ✓ ${slug}: ${bounds.width}×${bounds.height} → ${cropW}×${cropH} (${savings}% size change)`);
    return true;
  } catch (err) {
    console.warn(`  ✗ ${slug}: ${err.message}`);
    return false;
  }
}

console.log("Processing logos...");
for (const s of sponsors) {
  await processLogo(s);
}
console.log("\nDone. Optimised logos saved to public/sponsors/");
