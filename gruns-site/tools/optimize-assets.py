#!/usr/bin/env python3
"""Re-encode the images pulled by tools/fetch-assets.mjs for web delivery.

Shopify's CDN serves very lightly compressed WebP, so a freshly fetched
public/images/ weighs ~12MB. This caps each file at the width the layout
actually renders it at and re-encodes, which lands the same set near 2MB.

    pip install Pillow && python3 tools/optimize-assets.py
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "public" / "images"

# Longest edge each asset is ever rendered at, x2 for retina.
MAX_WIDTH = {
    "hero-lifestyle": 900,
    "gummy-bear": 260,
    "pack-": 460,
    "pouch-og-adults": 300,
    "pouch-shrek-adults": 300,
    "pouch-birthday-badge": 620,
    "easy-": 720,
    "gal-": 820,
    "nutrition-label": 900,
    "promo-confetti": 1200,
    "merch-": 480,
}
DEFAULT_MAX_WIDTH = 800
WEBP_QUALITY = 74
JPEG_QUALITY = 80


def cap_for(name: str) -> int:
    for prefix, width in MAX_WIDTH.items():
        if name.startswith(prefix):
            return width
    return DEFAULT_MAX_WIDTH


def main() -> None:
    before = after = 0
    for path in sorted(IMAGES.iterdir()):
        if path.suffix.lower() not in {".webp", ".png", ".jpg", ".jpeg"}:
            continue
        before += path.stat().st_size
        img = Image.open(path)
        cap = cap_for(path.stem)
        if img.width > cap:
            img = img.resize((cap, round(img.height * cap / img.width)), Image.LANCZOS)

        # PNG sources are product cut-outs; WebP keeps the alpha at a fraction
        # of the bytes, so they are rewritten in place with a .webp extension.
        if path.suffix.lower() == ".png":
            img.convert("RGBA").save(path.with_suffix(".webp"), "WEBP", quality=WEBP_QUALITY, method=6)
            path.unlink()
            out = path.with_suffix(".webp")
        elif path.suffix.lower() == ".webp":
            mode = "RGBA" if "A" in img.getbands() else "RGB"
            img.convert(mode).save(path, "WEBP", quality=WEBP_QUALITY, method=6)
            out = path
        else:
            img.convert("RGB").save(path, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
            out = path

        after += out.stat().st_size
        print(f"{out.name:34s} {out.stat().st_size / 1024:7.0f}KB  {img.width}px")

    print(f"\n{before / 1e6:.1f}MB -> {after / 1e6:.1f}MB")


if __name__ == "__main__":
    main()
