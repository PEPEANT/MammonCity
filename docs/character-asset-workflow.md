# Character Asset Workflow

Conclusion: raw green-screen character images now live in `assets/_incoming/characters/player`, and only processed transparent PNGs belong in `assets/characters/...`.

## Purpose

- Keep the project root clean.
- Separate raw source art from in-game assets.
- Make chroma-key processing repeatable.

## Current Source Files

- `assets/_incoming/characters/player/player-standing-source.png`
- `assets/_incoming/characters/player/mom-reward-source.png`

## Current Output Files

- `assets/characters/player/me-standing.png`
- `assets/characters/player/mom-reward.png`

## Commands

Process the player sources in one pass:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\process-player-assets.ps1
```

Process a single source manually:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\remove-green-screen.ps1 -InputPath .\assets\_incoming\characters\player\player-standing-source.png -OutputPath .\assets\characters\player\me-standing.png
```

## Related Files

- `scripts/process-player-assets.ps1`
  Uses the `_incoming/characters/player` source files and writes processed assets into `assets/characters/player`.
- `scripts/remove-green-screen.ps1`
  Removes the green background from a single source image.
- `assets/_incoming/characters/player`
  Raw player source images only.
- `assets/characters/player`
  Final in-game PNG assets only.

## Rules

- New raw player art goes into `assets/_incoming/characters/player`.
- Do not keep raw source PNGs in the project root.
- Do not point game code at `_incoming` files.
- Rename raw files to clear slugs before or when moving them into `_incoming`.
