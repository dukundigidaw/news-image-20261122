// ONE DAY: entry for make.fun news-image-20261122 (Node 22, stdlib only).
// The image is the entry.png beside this file; the program copies it to
// the output directory. Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
