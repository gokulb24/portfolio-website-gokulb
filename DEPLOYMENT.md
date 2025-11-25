# Deployment Guide

## Vercel Deployment (Recommended)

### Step 1: Prepare Your Project

```bash
# Ensure everything is committed to git
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Select your portfolio repository
4. Click "Import"

### Step 3: Configure Environment Variables (if needed)

If using serverless contact form:
- Add `CONTACT_EMAIL=your@email.com`
- Add `RESEND_API_KEY=your_api_key` (if using Resend)

### Step 4: Deploy

Click "Deploy" - Vercel will automatically build and deploy!

Every push to `main` will trigger a new deployment.

**Your site is live at**: `https://your-portfolio-vercel-app.vercel.app`

---

## Netlify Deployment

### Step 1: Connect Repository

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub account and repository
4. Click "Next"

### Step 2: Build Settings

Leave defaults or customize:
- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `.next`

### Step 3: Environment Variables

Add any required environment variables in Site settings → Build & deploy → Environment

### Step 4: Deploy

Click "Deploy site" - Netlify will build and deploy!

**Your site is live at**: `https://your-portfolio-netlify.netlify.app`

---

## Custom Domain Setup

### For Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS instructions for your registrar
4. Wait for verification (5-15 minutes)

### For Netlify

1. Go to Site settings → Domain management
2. Click "Add a domain"
3. Enter your domain
4. Update DNS at your registrar
5. Verify once DNS propagates

---

## GitHub Actions Workflow

The project includes automated CI/CD in `.github/workflows/build-deploy.yml`:

- **Runs on every push to main**
- Installs dependencies
- Type checks with TypeScript
- Lints with ESLint
- Builds the project
- Deploys to Vercel (requires secrets)

### Setup GitHub Actions Deployment

1. Get Vercel tokens:
   - Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Create a new token, copy it

2. Add GitHub Secrets:
   - Go to GitHub repo → Settings → Secrets and variables → Actions
   - Add `VERCEL_TOKEN` = your token
   - Add `VERCEL_ORG_ID` = your org ID (from Vercel account)
   - Add `VERCEL_PROJECT_ID` = your project ID (from Vercel dashboard)

3. Workflow will now auto-deploy on push!

---

## Self-Hosted Deployment

### Requirements

- Node.js 18+
- npm or yarn
- VPS/Server (AWS, DigitalOcean, Heroku, etc.)

### Steps

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Build
npm run build

# Start production server
npm start
```

Server will run on port 3000 by default.

### Using PM2 for Process Management

```bash
npm install -g pm2

pm2 start "npm start" --name "portfolio"
pm2 save
pm2 startup
```

### Using Docker

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## Environment Variables

Create `.env.local` for local development:

```env
# Contact form
NEXT_PUBLIC_CONTACT_ENDPOINT=formspree
NEXT_PUBLIC_FORMSPREE_ID=your_form_id

# Or for Resend API
RESEND_API_KEY=your_resend_key
CONTACT_EMAIL=your@email.com
```

For production, set these in your deployment platform's dashboard.

---

## Monitoring & Analytics

### Add Analytics

#### Google Analytics

1. Get Google Analytics ID from [analytics.google.com](https://analytics.google.com)
2. Add to `/src/app/layout.tsx`:

```typescript
import Script from 'next/script';

<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID`}
/>
<Script
  id="ga-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YOUR_ID');
    `
  }}
/>
```

#### Vercel Analytics

1. In Vercel dashboard → Analytics
2. Click "Enable"
3. Done! (No code needed)

---

## Performance Optimization

### Image Optimization

- Vercel automatically optimizes images via Image Optimization API
- For self-hosted, use `next/image` which handles optimization in build

### ISR (Incremental Static Regeneration)

Add to pages for cache refresh:

```typescript
export const revalidate = 3600; // Revalidate every hour
```

### Compression

Vercel and Netlify automatically compress responses - no setup needed.

---

## Monitoring Deployments

### Vercel Dashboard
- Real-time logs
- Performance metrics
- Deployment history

### Netlify Dashboard
- Deploy logs
- Function logs
- Analytics

### Custom Monitoring

Use services like:
- **Uptime Robot** - Monitor site availability
- **New Relic** - Performance monitoring
- **Sentry** - Error tracking

---

## Troubleshooting Deployments

### Build Fails

```bash
# Clear and rebuild
npm ci
npm run build

# Check for TypeScript errors
npm run type-check

# Check dependencies
npm list
```

### Site 404

- Ensure `.next` folder is being deployed
- Check build directory setting in platform
- Verify `next.config.ts` is correct

### Slow Performance

- Check Lighthouse score in Vercel/Netlify analytics
- Optimize images
- Check bundle size: `npm run build` will show warnings
- Use Web Vitals monitoring

---

## Rollback

### Vercel
- Dashboard → Deployments → Select previous → Click "..."  → "Redeploy"

### Netlify
- Site settings → Deploys → Click previous deploy → "Deploy Log" → "Trigger Deploy"

### GitHub
Push a revert commit:
```bash
git revert HEAD
git push origin main
```

---

**Need help?** Check deployment platform docs or open an issue on GitHub.
