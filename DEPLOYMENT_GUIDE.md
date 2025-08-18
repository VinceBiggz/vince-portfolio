# Deployment Guide

This guide covers deploying the Vincent Wachira Portfolio to various platforms, including GitHub Pages, Vercel, Netlify, and other hosting services.

## 📚 **Table of Contents**

- [GitHub Pages Deployment](#github-pages-deployment)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Custom Domain Setup](#custom-domain-setup)
- [Environment Configuration](#environment-configuration)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)

---

## 🚀 **GitHub Pages Deployment**

### **Automatic Deployment (Recommended)**

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### **Prerequisites**
- GitHub repository with the portfolio code
- GitHub Pages enabled in repository settings

#### **Setup Steps**

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Configure Repository Secrets** (if needed)
   - Go to Settings → Secrets and variables → Actions
   - Add any required secrets for your deployment

3. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "feat: implement comprehensive performance optimizations"
   git push origin main
   ```

4. **Monitor Deployment**
   - Go to Actions tab in your repository
   - Check the deployment workflow status
   - View deployment logs if needed

#### **Manual Deployment**

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### **GitHub Actions Workflow**

The project includes a comprehensive GitHub Actions workflow:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Build project
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

---

## ⚡ **Vercel Deployment**

### **Automatic Deployment**

Vercel provides seamless deployment with automatic previews and production builds.

#### **Setup Steps**

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the Vite configuration

2. **Configure Build Settings**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "installCommand": "npm install"
   }
   ```

3. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard
   - Common variables: `VITE_API_URL`, `VITE_ANALYTICS_ID`

4. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Preview deployments for pull requests

#### **Manual Deployment**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### **Vercel Configuration**

Create a `vercel.json` file for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 🌐 **Netlify Deployment**

### **Automatic Deployment**

Netlify provides continuous deployment with form handling and serverless functions.

#### **Setup Steps**

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Import your GitHub repository
   - Configure build settings

2. **Build Configuration**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

3. **Environment Variables**
   - Add any required environment variables
   - Configure form handling if using Netlify Forms

4. **Deploy**
   - Netlify will automatically deploy on every push
   - Preview deployments for pull requests

#### **Manual Deployment**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### **Netlify Configuration**

Create a `netlify.toml` file:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

---

## 🌍 **Custom Domain Setup**

### **GitHub Pages Custom Domain**

1. **Add Custom Domain**
   - Go to repository Settings → Pages
   - Add your custom domain (e.g., `vincentwachira.com`)
   - Check "Enforce HTTPS"

2. **DNS Configuration**
   - Add CNAME record pointing to `yourusername.github.io`
   - Or add A records for apex domain

3. **Update Vite Configuration**
   ```javascript
   // vite.config.js
   export default defineConfig({
     base: '/', // Remove /vince-portfolio/ for custom domain
     // ... rest of config
   });
   ```

### **Vercel Custom Domain**

1. **Add Domain**
   - Go to Vercel dashboard → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - Enable HTTPS enforcement

### **Netlify Custom Domain**

1. **Add Domain**
   - Go to Netlify dashboard → Domain management
   - Add your custom domain
   - Configure DNS settings

2. **SSL Certificate**
   - Netlify provides free SSL certificates
   - Enable HTTPS enforcement

---

## ⚙️ **Environment Configuration**

### **Environment Variables**

Create environment files for different deployment stages:

#### **Development (.env.development)**
```env
VITE_API_URL=http://localhost:3000
VITE_ANALYTICS_ID=dev-analytics-id
VITE_ENVIRONMENT=development
```

#### **Production (.env.production)**
```env
VITE_API_URL=https://api.vincentwachira.com
VITE_ANALYTICS_ID=prod-analytics-id
VITE_ENVIRONMENT=production
```

#### **Staging (.env.staging)**
```env
VITE_API_URL=https://staging-api.vincentwachira.com
VITE_ANALYTICS_ID=staging-analytics-id
VITE_ENVIRONMENT=staging
```

### **Build Configuration**

Update `vite.config.js` for different environments:

```javascript
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: env.VITE_BASE_URL || '/vince-portfolio/',
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'router': ['react-router-dom'],
            'animations': ['framer-motion'],
            'icons': ['lucide-react'],
          },
        },
      },
      sourcemap: mode === 'development',
    },
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
  };
});
```

---

## 📊 **Performance Optimization**

### **Pre-deployment Checklist**

1. **Build Optimization**
   ```bash
   # Analyze bundle size
   npm run analyze
   
   # Run performance tests
   npm run performance
   
   # Generate Lighthouse report
   npm run lighthouse
   ```

2. **Image Optimization**
   - Ensure all images are optimized
   - Use WebP format where possible
   - Implement lazy loading with OptimizedImage component

3. **Code Splitting**
   - Verify chunks are properly split
   - Check chunk sizes are under 250KB
   - Monitor loading performance

### **Performance Monitoring**

1. **Core Web Vitals**
   - Monitor FCP, LCP, CLS, FID
   - Set up alerts for performance regressions
   - Track user experience metrics

2. **Analytics Setup**
   - Configure Google Analytics 4
   - Set up custom event tracking
   - Monitor user interactions

3. **Error Tracking**
   - Implement error boundaries
   - Set up error reporting (Sentry, LogRocket)
   - Monitor JavaScript errors

### **Caching Strategy**

1. **Static Assets**
   - Cache images, CSS, and JS files
   - Use content hashing for cache busting
   - Implement service worker for offline support

2. **CDN Configuration**
   - Use CDN for static assets
   - Configure proper cache headers
   - Enable compression (gzip, brotli)

---

## 🔧 **Troubleshooting**

### **Common Issues**

#### **Build Failures**

1. **Dependency Issues**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Memory Issues**
   ```bash
   # Increase Node.js memory limit
   export NODE_OPTIONS="--max-old-space-size=4096"
   npm run build
   ```

3. **ESLint Errors**
   ```bash
   # Fix linting issues
   npm run lint:fix
   ```

#### **Deployment Issues**

1. **404 Errors on Refresh**
   - Ensure proper SPA routing configuration
   - Add redirect rules for client-side routing

2. **Asset Loading Issues**
   - Check base URL configuration
   - Verify asset paths are correct
   - Ensure proper CORS headers

3. **Performance Issues**
   - Analyze bundle size
   - Check for large dependencies
   - Optimize images and assets

### **Debug Commands**

```bash
# Check build output
npm run build && ls -la dist/

# Analyze bundle
npm run analyze

# Test production build locally
npm run build && npm run preview

# Check for unused dependencies
npx depcheck

# Audit dependencies
npm audit

# Check for security vulnerabilities
npm audit fix
```

### **Monitoring and Alerts**

1. **Uptime Monitoring**
   - Set up uptime monitoring (UptimeRobot, Pingdom)
   - Configure alerts for downtime

2. **Performance Monitoring**
   - Use Google PageSpeed Insights
   - Monitor Core Web Vitals in Search Console
   - Set up performance budgets

3. **Error Monitoring**
   - Implement error tracking
   - Set up alerts for critical errors
   - Monitor user experience metrics

---

## 📋 **Deployment Checklist**

### **Pre-deployment**
- [ ] All tests passing
- [ ] Linting errors resolved
- [ ] Bundle size optimized
- [ ] Images optimized
- [ ] Environment variables configured
- [ ] Performance metrics acceptable
- [ ] Security audit completed

### **Deployment**
- [ ] Build successful
- [ ] Assets deployed correctly
- [ ] Routing working properly
- [ ] Forms functional
- [ ] Analytics tracking
- [ ] SSL certificate active
- [ ] Custom domain configured

### **Post-deployment**
- [ ] Site accessible
- [ ] Performance metrics monitored
- [ ] Error tracking active
- [ ] Analytics data flowing
- [ ] User feedback collected
- [ ] Backup strategy in place

---

## 📚 **Additional Resources**

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Documentation](https://pages.github.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Web Performance Best Practices](https://web.dev/performance/)

---

**Note**: This deployment guide covers the most common deployment scenarios. For specific platform requirements or custom configurations, refer to the respective platform documentation.
