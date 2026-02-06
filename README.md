# Sejal — In Loving Memory

A responsive photo website in remembrance of Sejal. Built with React and Vite.

## Features

- **Multiple pages**: Home, Gallery, Her Story, Moments, For You
- **Responsive**: Works on PC, phones (iOS & Android), tablets, and iPad
- **Photo-ready**: Gallery uses placeholders — add your images and paths as described below
- **Install as app & offline**: The site is a PWA. After you deploy it (or run `npm run preview`), you can **install it** on your phone, tablet, or PC and use it **offline**.

## Install as app & use offline

1. **Build and serve** the site: run `npm run build` then `npm run preview`, or deploy the `dist/` folder to any hosting.
2. **Install**: On your device, open the site in the browser, then:
   - **Chrome (PC/Android)**: Menu → “Install Sejal” or the install icon in the address bar.
   - **Edge (PC)**: Menu → “Apps” → “Install this site as an app”.
   - **Safari (iPhone/iPad)**: Share → “Add to Home Screen”.
3. **Offline**: After you’ve opened the site at least once online, it will work offline. Gallery photos are saved to the device as you view them.

## Run the website

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Add your photos

1. Create a folder for images in the project, e.g. `public/photos/`.
2. Put your image files there (e.g. `photo1.jpg`, `photo2.png`).
3. Open `src/pages/Gallery.jsx` and replace the `placeholders` array. For each photo use:
   - `src: '/photos/your-filename.jpg'`
   - `title` and `caption` as you like

Example:

```js
const placeholders = [
  { id: 1, title: 'At the beach', caption: 'Our first trip', src: '/photos/beach.jpg' },
  // ... more photos
];
```

## Deploy to GitHub (free live site)

Follow these steps to put your site on the internet for free using **GitHub** and **GitHub Pages**.

### 1. Create a GitHub account (if you don’t have one)

- Go to [github.com](https://github.com) and sign up (free).

### 2. Install Git on your PC

- Download and install from [git-scm.com](https://git-scm.com).
- After installing, open **PowerShell** or **Command Prompt**.

### 3. Create a new repository on GitHub

- On GitHub, click the **+** (top right) → **New repository**.
- **Repository name:** e.g. `sejal-website` (remember this; it will be in the site URL).
- Leave **Public** selected. Do **not** add a README or .gitignore (the project already has them).
- Click **Create repository**.

### 4. Push your project from your PC

In **PowerShell** or **Command Prompt**, go to the project folder and run these commands (replace `YOUR_USERNAME` with your GitHub username and `sejal-website` with your repo name if different):

```bash
cd path\to\sejal-website
git init
git add .
git commit -m "Initial commit - Sejal website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sejal-website.git
git push -u origin main
```

When asked, sign in to GitHub (browser or token).

### 5. Turn on GitHub Pages

- On GitHub, open your repository (e.g. **sejal-website**).
- Go to **Settings** → **Pages** (left sidebar).
- Under **Build and deployment**, set **Source** to **GitHub Actions**.
- Save. The first time you pushed, a workflow may already have run. If not, push any small change (e.g. edit README) to trigger it.

### 6. Open your live site

- After the workflow finishes (green tick on the **Actions** tab), your site will be at:
  **`https://YOUR_USERNAME.github.io/sejal-website/`**

Replace `YOUR_USERNAME` and `sejal-website` with your GitHub username and repo name.

---

**Later updates:** When you change the code, run:

```bash
git add .
git commit -m "Update site"
git push
```

The site will rebuild and update automatically in a few minutes.

## Build for production (local)

```bash
npm run build
```

The built files will be in `dist/`. You can upload that folder to any static hosting (Vercel, Netlify, etc.) if you prefer not to use GitHub Pages.

## Customise

- **Text**: Edit the content in `src/pages/` (OurStory.jsx, Moments.jsx, ForYou.jsx, Home.jsx) to your own memories and letter.
- **Colors**: Change the variables in `src/index.css` (`:root` section) to match your preferred palette.
