# Deployment Guide

## 1. Push to GitHub

Since I cannot access your GitHub account directly, please follow these steps to push your code:

1.  **Create a new repository** on GitHub (e.g., named `athlete-vault-web`).
2.  **Run the following commands** in your terminal (I have already committed the code locally):

```bash
# Link your local repository to GitHub
git remote add origin https://github.com/YOUR_USERNAME/athlete-vault-web.git

# Rename the branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

## 2. Deploy to Vercel

The easiest way to deploy a Next.js app is with Vercel.

1.  **Run the deploy command:**

```bash
npx vercel
```

2.  **Follow the prompts:**
    *   Log in to Vercel (it will open your browser).
    *   Confirm the project settings (defaults are usually correct for Next.js).
    *   Wait for the deployment to finish.

3.  **Production Deployment:**
    Once you are happy with the preview, deploy to production:

```bash
npx vercel --prod
```
