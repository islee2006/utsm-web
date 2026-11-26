// Run after adding photos: node scripts/shrink-images.mjs  (rewrites large images in public/)
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

let before = 0, after = 0;
for (const f of await readdir('public', { recursive: true })) {
  if (!/\.(jpe?g|png)$/i.test(f)) continue;
  const file = path.join('public', f);
  const input = await readFile(file);
  if (input.length < 400_000) continue;
  const img = sharp(input).rotate().resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true });
  const out = await (/png$/i.test(f) ? img.png({ palette: true, quality: 90 }) : img.jpeg({ quality: 78, mozjpeg: true })).toBuffer();
  if (out.length >= input.length) continue;
  await writeFile(file, out);
  before += input.length; after += out.length;
}
console.log(`${(before / 1e6).toFixed(0)} MB -> ${(after / 1e6).toFixed(1)} MB`);
