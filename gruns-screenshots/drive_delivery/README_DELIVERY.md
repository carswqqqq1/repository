# Grüns (gruns.co) Full-Site Screenshots — 2026-09-17

**Drive folder:** https://drive.google.com/drive/folders/1buCK6YhXxvkUAwuBtZeCW-4puoqLFeVD

## Capture results
- Target public pages: **413**
- Captured OK: **413**
- Missing: **0**
- Failed: **0**
- Format: desktop full-page JPEG (viewport 1440×900)
- Uncompressed `out/`: ~346MB | Compressed archive: ~285MB

## Archive (Info-ZIP spanning, ~40MB parts)
Download all of these files into the same directory:

- `Gruns_Full_Site_Screenshots_2026-09-17.z01` … `.z07`
- `Gruns_Full_Site_Screenshots_2026-09-17.zip` (final span)

Reassemble:

```bash
zip -s 0 Gruns_Full_Site_Screenshots_2026-09-17.zip --out Gruns_Full_Site_Screenshots_FULL.zip
unzip Gruns_Full_Site_Screenshots_FULL.zip
```

Zip root contains `out/00_home` … `out/50_other` plus manifests.

## Exclusions
cart / checkout / account / admin (robots-disallowed). No `node_modules`.
