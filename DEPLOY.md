# Deployment Guide

This project is a **Vite + React** application. You can deploy it to any static hosting provider.

## Option 1: One-Click Publish (Recommended)
If you are viewing this in the Dualite interface:
1. Click the **"Publish"** button in the top right corner.
2. Follow the on-screen instructions to deploy directly to Netlify.

## Option 2: Deploy to Netlify (Manual)
1. Run the build command locally or in your CI/CD:
   ```bash
   yarn build
   ```
   This creates a `dist` folder.
2. **Drag and Drop**: If using the Netlify dashboard, simply drag the `dist` folder into the deployment area.
3. **Git Integration**: Push this code to GitHub/GitLab/Bitbucket and connect it to Netlify.
   - **Build Command:** `yarn build`
   - **Publish Directory:** `dist`
   - *Note:* The `public/_redirects` file included in this project handles routing automatically.

## Option 3: Deploy to Vercel
1. Install Vercel CLI or use the Vercel Dashboard.
2. Connect your Git repository.
3. Vercel usually detects Vite automatically.
   - **Framework Preset:** Vite
   - **Build Command:** `yarn build`
   - **Output Directory:** `dist`
   - *Note:* The `vercel.json` file included in this project handles routing automatically.

## Option 4: GitHub Pages
To deploy to GitHub Pages, you need to update `vite.config.ts` to include the base path of your repository name.

1. Update `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/', // Add this line
     plugins: [react()],
   });
   ```
2. Build and deploy the `dist` folder.

## Important Note on SEO Files
The `robots.txt`, `llms.txt`, and `sitemap.xml` files are located in the `public/` folder. They will be automatically copied to the root of your domain (e.g., `your-site.com/robots.txt`) during the build process.
