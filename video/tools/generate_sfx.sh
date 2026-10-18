#!/usr/bin/env bash
# Generates the three sound effects used in the video with ffmpeg only
# (no external audio assets). Output: public/sfx/*.wav
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p public/sfx

# Soft "tick" for a row being inserted: two short sine partials, fast decay.
ffmpeg -y -v error \
  -f lavfi -i "sine=frequency=1320:duration=0.12" \
  -f lavfi -i "sine=frequency=880:duration=0.12" \
  -filter_complex "[0:a]volume=0.35[a];[1:a]volume=0.5[b];[a][b]amix=inputs=2:normalize=0,afade=t=in:st=0:d=0.005,afade=t=out:st=0.03:d=0.09,volume=0.6" \
  public/sfx/tick.wav

# Short "whoosh" for rows leaving the table: band-passed pink noise with a sweep.
ffmpeg -y -v error \
  -f lavfi -i "anoisesrc=d=0.45:c=pink:a=0.6:r=44100" \
  -af "highpass=f=400,lowpass=f=2200,afade=t=in:st=0:d=0.08,afade=t=out:st=0.18:d=0.27,volume=0.5" \
  public/sfx/whoosh.wav

# Low "thud" for the whole table disappearing: 70 Hz sine with a pitch-less decay plus a noise click.
ffmpeg -y -v error \
  -f lavfi -i "sine=frequency=70:duration=0.7" \
  -f lavfi -i "anoisesrc=d=0.7:c=brown:a=0.4:r=44100" \
  -filter_complex "[0:a]afade=t=out:st=0.05:d=0.6,volume=0.9[a];[1:a]lowpass=f=300,afade=t=out:st=0:d=0.12,volume=0.5[b];[a][b]amix=inputs=2:normalize=0,volume=0.8" \
  public/sfx/thud.wav

for f in public/sfx/*.wav; do
  printf '%s  %ss\n' "$f" "$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f")"
done
