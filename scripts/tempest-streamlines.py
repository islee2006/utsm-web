"""Streamlines that flow over the Tempest cutout, in the banner's 1894x830 viewBox.
Car box must match .tempest-car in TempestBanner.tsx (left/top/width as fractions of the stage)."""
import sys
import numpy as np
from PIL import Image

car_path = sys.argv[1]
VW, VH = 1894, 830
LEFT, TOP, WIDTH = 0.17, 0.43, 0.54

alpha = np.asarray(Image.open(car_path).getchannel("A")) > 128
ih, iw = alpha.shape
scale = WIDTH * VW / iw
x0, y0 = LEFT * VW, TOP * VH

# car's top edge in stage coordinates, per stage x (inf where there is no car)
xs = np.arange(VW)
top = np.full(VW, np.inf)
for x in xs:
    col = round((x - x0) / scale)
    if 0 <= col < iw and alpha[:, col].any():
        top[x] = y0 + np.argmax(alpha[:, col]) * scale
assert np.isfinite(top).sum() > 0.4 * WIDTH * VW, "car outline not found"
roof = top[np.isfinite(top)].min()


def envelope(need, k):
    """Smallest smooth bump above `need`: a parabolic upper hull, so lines rise ahead of the nose and settle after the tail."""
    idx = np.nonzero(need > 0)[0]
    out = np.zeros(VW)
    for i in idx:
        out = np.maximum(out, need[i] - k * (xs - i) ** 2)
    return out


def smooth(v, sigma):
    r = int(3 * sigma)
    g = np.exp(-0.5 * (np.arange(-r, r + 1) / sigma) ** 2)
    g /= g.sum()
    return np.convolve(np.pad(v, r, mode="edge"), g, mode="valid")


lines = []
bases = [570, 535, 500, 465, 430, 395]  # free-stream heights, low to high
for i, base in enumerate(bases):
    clearance = 12 + 11 * i  # lines stack over the roof, compressed like real flow
    need = np.where(np.isfinite(top), base - (top - clearance), 0).clip(0)
    lift = smooth(np.maximum(envelope(need, 0.0012), need), 14)
    lift = np.maximum(lift, need)
    y = base - lift
    assert np.all(y[np.isfinite(top)] <= top[np.isfinite(top)] - clearance + 0.5), f"line {i} cuts into the car"
    lines.append("M" + " L".join(f"{x},{y[x]:.1f}" for x in [*range(0, VW, 12), VW - 1]))

print("roof y", round(roof), "highest line over roof", round(min(base - 0 for base in bases)), file=sys.stderr)
for d in lines:
    print(d)
