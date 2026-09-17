#!/usr/bin/env python3
"""Crop photography out of the gruns.co reference screenshots into public/images/.

Source screenshots live outside the repo (they are ~900MB) at
$GRUNS_SHOTS (default /workspace/gruns-screenshots/out). Crop boxes are in the
coordinate space of the 1440px-wide full-page captures.

Run: python3 scripts/crop-screenshots.py
"""
import os
import pathlib
from PIL import Image

SHOTS = pathlib.Path(os.environ.get("GRUNS_SHOTS", "/workspace/gruns-screenshots/out"))
OUT = pathlib.Path(__file__).resolve().parent.parent / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

HOME = SHOTS / "00_home" / "174__home.jpg"
PDP = {
    "original": SHOTS / "10_products" / "154__products__gruns.jpg",
    "shrek": SHOTS / "10_products" / "168__products__shrek-gruns.jpg",
}

_cache = {}


def load(path):
    if path not in _cache:
        _cache[path] = Image.open(path).convert("RGB")
    return _cache[path]


def edge_extend(core, out_w, out_h, ox, oy):
    """Place `core` at (ox, oy) inside out_w x out_h, filling margins by
    replicating the outermost row/column. Used to rebuild the parts of a card
    that the capture clipped (rounded corners, overlapping hero blob)."""
    cw, ch = core.size
    band = Image.new("RGB", (out_w, ch))
    band.paste(core, (ox, 0))
    if ox > 0:
        band.paste(core.crop((0, 0, 1, ch)).resize((ox, ch)), (0, 0))
    right = out_w - ox - cw
    if right > 0:
        band.paste(core.crop((cw - 1, 0, cw, ch)).resize((right, ch)), (ox + cw, 0))
    canvas = Image.new("RGB", (out_w, out_h))
    canvas.paste(band, (0, oy))
    if oy > 0:
        canvas.paste(band.crop((0, 0, out_w, 1)).resize((out_w, oy)), (0, 0))
    bottom = out_h - oy - ch
    if bottom > 0:
        canvas.paste(band.crop((0, ch - 1, out_w, ch)).resize((out_w, bottom)), (0, oy + ch))
    return canvas


written = []


def save(img, name, quality=84):
    path = OUT / name
    if path.suffix == ".webp":
        img.save(path, quality=quality, method=6)
    else:
        img.convert("RGB").save(path, quality=quality, optimize=True, progressive=True)
    written.append((name, img.size, path.stat().st_size))


# ---------------------------------------------------------------- hero art
# Left art column of the hero band: model biting a Gruns pack, floating gummy
# bears, sparkles and the yellow blob. The hero wash runs y 0..899; the blob's
# bottom bar (x 62..715) spills 25px past it onto the cream page background,
# and the carousel tiles start in that same strip, so repaint the strip cream
# before pasting the bar back. Alpha-ramp the right edge so the crop dissolves
# into the CSS wash instead of showing a vertical seam.
HERO_W, HERO_BAND, HERO_H = 830, 900, 925
CREAM = (255, 247, 224)


def hero_art():
    home = load(HOME)
    art = Image.new("RGB", (HERO_W, HERO_H), CREAM)
    art.paste(home.crop((0, 0, HERO_W, HERO_BAND)), (0, 0))
    art.paste(home.crop((62, HERO_BAND, 715, HERO_H)), (62, HERO_BAND))
    art = art.convert("RGBA")
    alpha = Image.new("L", (HERO_W, HERO_H), 255)
    ap = alpha.load()
    ramp_from = 736
    for x in range(ramp_from, HERO_W):
        v = round(255 * (1 - (x - ramp_from) / (HERO_W - ramp_from)))
        for y in range(HERO_H):
            ap[x, y] = v
    art.putalpha(alpha)
    save(art, "hero-art.webp", quality=82)


# ------------------------------------------------------- carousel pack cards
# Four square product tiles (pouch on a coloured wash) spanning y 900..1159.
# The hero blob's yellow bar covers the top 32px of the first two tiles and
# every tile is corner-rounded, so crop the clean interior (all wash, no pouch)
# and rebuild the missing edges from it.
PACK_TILES = [
    ("pack-original-adults.jpg", 175, 437),
    ("pack-shrek-adults.jpg", 451, 713),
    ("pack-original-kids.jpg", 727, 989),
    ("pack-shrek-kids.jpg", 1003, 1265),
]


def pack_tiles():
    home = load(HOME)
    for name, x1, x2 in PACK_TILES:
        core = home.crop((x1 + 4, 932, x2 - 4, 1151))
        save(edge_extend(core, x2 - x1, 260, 4, 32), name)


# ------------------------------------------------------ "ridiculously easy"
EASY_TILES = [
    ("easy-flavor.jpg", 89),
    ("easy-rip.jpg", 521),
    ("easy-daily.jpg", 953),
]


def easy_tiles():
    home = load(HOME)
    for name, x1 in EASY_TILES:
        save(home.crop((x1, 1598, x1 + 398, 1896)), name)


# ------------------------------------------------------------ PDP gallery
GALLERY_BOX = (193, 151, 833, 791)
THUMB_TOPS = (151, 244, 337, 429, 522, 616)
SWATCHES = {"swatch-original.jpg": (958, 630, 1038, 710), "swatch-shrek.jpg": (1193, 630, 1273, 710)}


def gallery():
    for key, path in PDP.items():
        save(load(path).crop(GALLERY_BOX), f"pack-shot-{key}.jpg", quality=86)
    pdp = load(PDP["original"])
    for i, top in enumerate(THUMB_TOPS, start=1):
        save(pdp.crop((97, top + 2, 164, top + 83)), f"gallery-thumb-{i}.jpg", quality=88)
    for name, box in SWATCHES.items():
        save(pdp.crop(box), name, quality=88)


if __name__ == "__main__":
    hero_art()
    pack_tiles()
    easy_tiles()
    gallery()
    total = sum(s for _, _, s in written)
    for name, size, nbytes in written:
        print(f"{name:28} {size[0]:>4}x{size[1]:<4} {nbytes / 1024:7.1f} KB")
    print(f"{'TOTAL':28} {'':>9} {total / 1024:7.1f} KB")
