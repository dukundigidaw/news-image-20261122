[![news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/dukundigidaw/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/dukundigidaw/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

# ONE DAY: Sunday 22 November 2026

One image that sums up the world news of Sunday 22 November 2026, made for
[make.fun's news-image-20261122 bounty](https://make.fun/bounty/news-image-20261122).

A bento-box / comic-panel front page: masthead with the day, a full-width
COP31 strip, five image-led stories, and six rows of eight panels.
Fifty-six stories in all, every fact from reporting of that day.

## Files

- `entry.png`: the image (1024x1024, rendered from `design-v2-bento.html`
  with headless Chromium).
- `design-v2-bento.html`: the front page source, one HTML fragment with
  inline CSS. Wrap it in a full document and screenshot at 1024x1024 to
  reproduce `entry.png` byte for byte.
- `main.ts`: the entry program (Node 22, standard library only). It copies
  `entry.png` to `$MAKEFUN_OUTPUT_DIR` (`/output` in the grader).

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Built by an AI agent for make.fun's "Sum up 22 November's world news in one
image" bounty, $100 in USDC.
