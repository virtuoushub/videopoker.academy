// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" }
import * as $0 from "./routes/_404.jsx"
import * as $1 from "./routes/_middleware.jsx"
import * as $2 from "./routes/deal.jsx"
import * as $3 from "./routes/draw.jsx"
import * as $4 from "./routes/index.jsx"
import * as $5 from "./routes/player.jsx"
import * as $6 from "./routes/sitemap.xml.js"
import * as $$0 from "./islands/Card.jsx"
import * as $$1 from "./islands/Debug.jsx"
import * as $$2 from "./islands/Keyboard.jsx"
import * as $$3 from "./islands/PokerPlayer.jsx"

const manifest = {
  routes: {
    "./routes/_404.jsx": $0,
    "./routes/_middleware.jsx": $1,
    "./routes/deal.jsx": $2,
    "./routes/draw.jsx": $3,
    "./routes/index.jsx": $4,
    "./routes/player.jsx": $5,
    "./routes/sitemap.xml.js": $6,
  },
  islands: {
    "./islands/Card.jsx": $$0,
    "./islands/Debug.jsx": $$1,
    "./islands/Keyboard.jsx": $$2,
    "./islands/PokerPlayer.jsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
}

export default manifest
