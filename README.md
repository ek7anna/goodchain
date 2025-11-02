````markdown
# GoodChain — Frontend

A small React frontend for GoodChain: submit/track "good deeds" and earn GOOD tokens. Built for hackathons — clean UI, fast feedback and wallet connect simulation.

---

## Features
- Wallet connect UI (manual address or connector integration)
- Submit "Good Deed" with optimistic UI and token reward simulation
- Beautiful, responsive component styling (single-file component at frontend/src/components/WalletConnect.jsx)
- Lightweight, zero-backend demo flow (simulated delays)

---

## Repo layout (important folders)
- frontend/  
  - public/ — static assets  
  - src/  
    - components/  
      - WalletConnect.jsx — main component you edited (UI + mock connect/submit flows)  
    - App.jsx, index.jsx — app bootstrap (if present)  
- README.md — this file

---

## Getting started (development)
Prerequisites:
- Node.js (16+ recommended)
- npm or yarn

Install & run:
```bash
cd c:\Users\HP\goodchain\frontend
npm install
npm run dev      # or npm start depending on the project script
````

Open: [http://localhost:3000](http://localhost:3000) (or the port your dev server prints)

Tips:

* If you don't see UI changes after editing WalletConnect.jsx:

  1. Ensure the app imports the file at `./components/WalletConnect` (no duplicates).
  2. Restart the dev server.
  3. Hard reload browser (Ctrl+Shift+R / Ctrl+F5).
  4. Search for duplicate files: `Get-ChildItem -Recurse -Filter WalletConnect.jsx` (PowerShell).

---

## How WalletConnect works (quick)

* The component stores local state for inputAddress, connection status, submitted deeds and simulates async connect/submit with setTimeout.
* To wire an actual wallet provider, replace the mock handleConnect logic with your connector library (e.g. starknet-react hooks) and call the provided onConnect callback if used by parent.

File: `frontend/src/components/WalletConnect.jsx` — open this for styling and behavior.

---

## Build & deploy

```bash
cd frontend
npm run build
# then serve the build folder via your static host (Netlify, Vercel, GitHub Pages, etc.)
```

---

## Testing

* No unit tests included by default. Add tests under `frontend/src/__tests__` and run with your test runner (Jest / React Testing Library) if configured.

---

## Contributing

* Fork, create a branch, open a PR with a short description.
* Keep UI/UX changes modular and add tests where applicable.

---

## Troubleshooting

* Duplicate UIs: check for multiple `WalletConnect.jsx` files or alternate imports.
* Stale bundle: restart dev server and clear browser cache.
* Console logs: add `console.log("WalletConnect loaded vX")` top of component to ensure correct bundle is used.

---

## License

MIT 

```
```
