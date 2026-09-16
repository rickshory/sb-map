# Scotch Broom Clump Map

A simple shareable map of existing Scotch broom clumps, for use in getting
landowner/collaborator verification and permissions before cutting work
begins.

**This map is public once GitHub Pages is enabled.** It should only ever
contain rough clump locations and counts — never precise individual
cut-plant waypoints. Keep this repo entirely separate from any private
cutting-project data.

## Editing the data

Open `data.js` and edit the `CLUMPS` array. Each entry looks like:

```js
{ lat: 45.4787493, lon: -122.6562177, count: 40, label: "Clump C", notes: "Dense patch near creek" }
```

- `count` drives marker size (area scales roughly with count, via a
  square-root scale, so a clump with 4x the plants looks about 2x the
  diameter — not 4x — which keeps large clumps from swamping the map).
- `notes` is optional and shows in the popup under the plant count.

Commit and push after editing — GitHub Pages rebuilds automatically,
usually within a minute or so.

## Setting up GitHub Pages

1. Create a new repo (can be public or private — Pages can be made public
   from a private repo on paid plans, or just keep the whole repo public
   since the data itself is already meant to be shared).
2. Push these three files (`index.html`, `data.js`, `README.md`) to the
   repo root.
3. In the repo: **Settings → Pages → Source → Deploy from branch → main
   → / (root)**.
4. After a minute, your map is live at
   `https://<your-username>.github.io/<repo-name>/`.
5. Share that link by email — recipients can pan and zoom freely, no
   account or app needed.

## Adjusting the visual scale

In `index.html`, near the top of the `<script>` block:

```js
const BASE_RADIUS = 4;   // minimum circle size, in pixels
const SCALE_MULT = 3;    // how fast circles grow with plant count
```

Increase `SCALE_MULT` if small clumps are too hard to tell apart from
each other; decrease it if large clumps dominate the map too much.
