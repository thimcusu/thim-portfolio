# Deploying to GitHub Pages

Your portfolio site is configured to deploy automatically to GitHub Pages.

## Automatic Deployment

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your site
2. Deploy it to GitHub Pages

## Setup Instructions

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", select **Source**: GitHub Actions

3. **Wait for deployment**
   - Go to the **Actions** tab in your repository
   - Watch the deployment workflow run
   - Once complete, your site will be live at: `https://<username>.github.io/<repository-name>/`

## Environment Variables

- Local development: Copy `.env.example` to `.env`
- GitHub Pages: Environment variables are set in the workflow file
- The `VITE_BASE_PATH` is automatically set to your repository name

## Manual Deployment (Optional)

If you prefer to deploy manually:
```bash
npm run deploy
```

Note: You'll need to install `gh-pages` first:
```bash
npm install -D gh-pages
```

## Custom Domain

To use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub repository settings

## Troubleshooting

- **404 errors**: Check that the base path in `vite.config.ts` matches your repository name
- **Assets not loading**: Ensure `VITE_BASE_PATH` is correctly set
- **Build fails**: Check the Actions tab for error logs
