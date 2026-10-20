# Sakshi Kadel — UI/UX Portfolio

A Next.js portfolio with a butter-yellow checkered background, responsive project thumbnails, Behance case-study links, work experience, skills, contact links, and a separate resume route.

## 1. Add your assets

- `public/profile.jpg` — your own profile photo.
- `public/projects/byteroom.png` — ByteRoom thumbnail.
- `public/projects/habit-flow.png` — Habit Flow thumbnail.
- `public/projects/readmate.png` — Readmate thumbnail.
- `public/projects/food-delivery.png` — Food Delivery thumbnail.
- `public/projects/fitness-app.png` — Fitness App thumbnail.
- `public/projects/fitness-dashboard.png` — Fitness Dashboard thumbnail.
- `public/resume.pdf` — your current resume PDF.

The provided thumbnails are copied into `public/projects/`. Replace them whenever you update your case-study covers. Keep filenames the same or update the corresponding `image` path in `app/config.ts`.

## 2. Personalize your links

Edit `app/config.ts`:
- Set `profile.email` to your actual email.
- Replace `profile.linkedin` with your real LinkedIn profile URL.
- Add or remove objects in the `projects` array to update the work section.
- Update descriptions and experience dates if your resume differs.
- Set `profile.resumePdf` to your PDF path if you use another filename.

Each project uses its own Behance URL and opens in a new tab. The four featured projects appear first; the Fitness App and Fitness Dashboard are under “Explore two more projects”. Change `featured` to `true` or `false` to control this.

## 3. Run locally

Install Node.js (LTS), unzip the project, open a terminal in this folder, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Check the production build before deployment:

```bash
npm run build
```

## 4. Push to GitHub

1. Create a new empty repository at https://github.com/new.
2. Open a terminal in this folder.
3. Run the following commands (replace the URL with your repository URL):

```bash
git init
git add .
git commit -m "Create Sakshi portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## 5. Deploy to Vercel

1. Sign in at https://vercel.com/.
2. Choose **Add New → Project**.
3. Import your GitHub repository.
4. Keep the detected Next.js settings and click **Deploy**.
5. Vercel gives you a live URL.
6. Later, edit files locally, run `git add .`, `git commit -m "Update portfolio"`, and `git push`. Vercel will redeploy the same project and keep its URL.

## Before publishing

- Add your real email and LinkedIn URL in `app/config.ts`.
- Add `public/resume.pdf` so the resume route works.
- Check all six Behance links and thumbnails.
- Review internship dates and wording against your resume.
- Keep confidential MES screens and proprietary work out of the public site.
- Replace the sample metadata URL in `app/layout.tsx` with your deployed URL after publishing.
