# yard-system

Static multi-page Yard Management UI using:

- Firebase Auth (email/password)
- Firestore (purchases, expenses, cash sessions, etc.)
- Bootstrap 5

## Pages

- `index.html` → redirects to `login.html`
- `login.html` → sign in
- `dashboard.html` → main menu + broker purchases
- `new-purchase.html` → add yard purchase
- `today.html` → daily summary + close day
- `cash.html` → cash session top-ups
- `expenses.html` → record expense
- `walkin-sales.html` → walk-in sales
- `admin.html` → admin-only editor
- `closing.html` → end-of-day summary

## Shared assets

- `assets/theme.css` → shared UI theme
- `assets/firebase.js` → single Firebase init (exports `auth` + `db`)

## Run locally

Because this app uses ES Modules, open it through a local web server (not `file://`).

Examples:

```powershell
py -m http.server 5173
```

Then open `http://localhost:5173/yard-system/`.