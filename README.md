# Mohamed Ibrahim Monge: Portfolio

React + TypeScript + Vite single-page portfolio. Vite keeps it fast and simple, React keeps sections reusable, and TypeScript keeps the editable data safe.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Check and build
```bash
npm run lint
npm run typecheck
npm run build      # outputs to dist/
npm run preview
```

## Edit your content
All text, links and projects live in `src/data.ts`. Items marked `TODO` need your confirmation:
- `email`: add yours to show the email button and the contact form (opens your mail app). Left empty on purpose.
- **M3loma**: confirm which features are finished before listing them.
- **Trekio**: no public repo was found. Set `visible: true` after adding details.
- Add `live:` URLs to projects when available (Islamii App: add the Google Play link after release).
- Screenshots are in `public/screens/<project>/` (numbered 1.webp, 2.webp...). Add more files there and list them in `src/screens.ts`. M3loma has none yet.

## Deploy
**Vercel:** push to GitHub, then vercel.com > Add New Project > import the repo. Framework: Vite, build `npm run build`, output `dist`. Deploy.

**Netlify:** app.netlify.com > Add new site > Import from Git. Build command `npm run build`, publish directory `dist`.

Or drag the `dist` folder into https://app.netlify.com/drop after `npm run build`.

## Your photo
Put your photo at `public/profile.jpg` (square or portrait, under ~300 KB). If the file is missing, a "MM" monogram is shown instead.
