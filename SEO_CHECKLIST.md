# SEO & Performance Checklist

## On-Page SEO

### Meta Tags
- [x] Title tag updated in `layout.tsx`
- [x] Meta description present
- [x] Viewport meta tag set
- [x] Open Graph tags configured
- [x] Twitter Card tags configured
- [ ] Favicon added to `/public/favicon.ico`

### Structured Data
- [ ] Add JSON-LD schema for Person
- [ ] Add JSON-LD schema for WebSite

Example Person Schema (add to `/src/app/layout.tsx`):
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Gokul B",
      url: "https://yoursite.com",
      sameAs: [
        "https://github.com/gokulb24",
        "https://linkedin.com/in/gokulb24"
      ]
    })
  }}
/>
```

### Keywords

Primary Keywords:
- AI/ML Engineer
- Data Scientist
- Machine Learning Portfolio
- Deep Learning Expert

Secondary Keywords:
- Python Developer
- Data Analysis
- Predictive Modeling
- Neural Networks

Use keywords naturally in:
- Page titles
- Meta descriptions
- Headings
- First paragraph of content

### URL Structure

Current URLs are SEO-friendly:
- `/` - Home
- `/about` - About
- `/experience` - Experience
- `/projects` - Projects
- `/skills` - Skills
- `/certifications` - Certifications
- `/contact` - Contact

Good! Keep URLs short, descriptive, and keyword-relevant.

---

## Technical SEO

### Performance Metrics

Run audit: `npm run build`

Target Metrics:
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Time to Interactive (TTI)**: < 3.8s

### Image Optimization

- [x] Images use Next.js `Image` component
- [x] Tailwind optimizations
- [ ] WebP format for modern browsers
- [ ] Lazy loading enabled

### Code Splitting

- [x] Dynamic imports for routes
- [x] CSS properly split and minified
- [x] Unused code removed

### Robots.txt

Create `/public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /api

Sitemap: https://yoursite.com/sitemap.xml
```

### Sitemap

Create `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yoursite.com/projects</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

## Accessibility (A11y)

### WCAG 2.1 Compliance

- [x] Semantic HTML (nav, main, article, section)
- [x] ARIA labels where needed
- [x] Color contrast ratio > 4.5:1
- [x] Keyboard navigable (Tab, Enter, Escape)
- [x] Focus indicators visible
- [x] Images have alt text (implement in profile.json)
- [x] Form labels properly associated

### Testing

```bash
# Install axe DevTools browser extension
# Run automated accessibility checks
npm install --save-dev jest-axe
npm test
```

### Accessibility Features Implemented

- [x] Dark mode support
- [x] Reduced motion preferences respected
- [x] High contrast mode support
- [x] Keyboard navigation throughout
- [x] Screen reader friendly structure
- [x] Focus management in modals
- [x] Proper heading hierarchy

---

## Link Building & Authority

### Internal Linking

- Link strategically between pages
- Use descriptive anchor text
- Avoid orphan pages
- Interlink related projects and skills

Example links to add to pages:
- Home → Projects (featured projects section)
- Home → Skills (quick skills)
- Projects → Skills (technology tags)
- Experience → Skills (related technologies)

### External Links

- Backlinks from GitHub profile ✓
- Backlinks from LinkedIn profile ✓
- Showcase projects on external platforms
- Submit to portfolio directories

Recommended directories:
- GitHub (add portfolio link to profile)
- LinkedIn (add website to profile)
- Behance (if design work)
- Dribbble (if design work)
- AngelList (if open to opportunities)

### Social Signals

- [x] GitHub link
- [x] LinkedIn link
- [x] Shareable content (Open Graph)

Add social share buttons:
```typescript
// Add to Projects page
<button onClick={() => {
  navigator.share({
    title: project.title,
    text: project.description,
    url: window.location.href
  })
}}>
  Share Project
</button>
```

---

## Content Optimization

### Readability

- [x] Short paragraphs (2-3 sentences max)
- [x] Subheadings break up content
- [x] Bullet points for lists
- [x] Clear language, no jargon (unless necessary)
- [x] Varied sentence length

### Content Freshness

- Keep project descriptions current
- Update "Latest Project" section monthly
- Add blog posts or updates (optional)
- Refresh certifications when new ones earned

### Keyword Placement

Optimize each page:
- **Home**: AI/ML Engineer, Portfolio, Skills
- **About**: Background, Experience, Education
- **Experience**: Machine Learning roles, companies
- **Projects**: Project titles, technologies, results
- **Skills**: Technology names, proficiency levels
- **Certifications**: Certificate names, issuers

---

## Local SEO (if applicable)

- [ ] Add location to profile (if specific city)
- [ ] Add local schema markup
- [ ] Ensure NAP consistency (Name, Address, Phone)

---

## Monitoring & Analytics

### Set Up Tracking

1. **Google Search Console**
   - Submit sitemap
   - Monitor search queries
   - Check indexation
   - Fix crawl errors

2. **Google Analytics**
   - Track page views
   - Monitor bounce rate
   - Track conversions (contact form)
   - Analyze user behavior

3. **Lighthouse**
   - Audit performance
   - Check accessibility
   - Verify SEO compliance

### Monthly Tasks

- [ ] Review Search Console data
- [ ] Check Analytics traffic
- [ ] Run Lighthouse audit
- [ ] Update content as needed
- [ ] Check for broken links

---

## Performance Checklist

### Build Optimization

```bash
npm run build
# Check:
# - No TypeScript errors
# - No console warnings
# - Bundle size reasonable
# - Next.js recommendations
```

### Runtime Performance

- [x] Images optimized (Next.js Image)
- [x] CSS minified
- [x] JavaScript minified
- [x] Code splitting enabled
- [x] Caching headers set

### Core Web Vitals

Target scores (Lighthouse):
- LCP (Largest Contentful Paint): > 75 (green)
- FID (First Input Delay): > 75 (green)
- CLS (Cumulative Layout Shift): > 75 (green)

Monitor at: [web.dev/measure](https://web.dev/measure)

---

## SEO Quick Wins

1. **Add Favicon**
   - Create 32x32 PNG
   - Save as `/public/favicon.ico`
   - Vercel auto-detects

2. **Optimize OG Image**
   - Create 1200x630px image
   - Save as `/public/og-image.png`
   - Add to metadata

3. **Add Schema Markup**
   - Person schema
   - WebSite schema
   - BreadcrumbList schema

4. **Improve CTAs**
   - Clear call-to-action buttons
   - Contact form prominent
   - Project demo links obvious

5. **Add Trust Signals**
   - Certifications displayed
   - Education background
   - Project metrics/results
   - Real project links

---

## Avoid SEO Pitfalls

❌ **Don't:**
- Keyword stuff (looks spammy)
- Hide text with same color as background
- Use black hat techniques
- Create doorway pages
- Duplicate content across sites

✅ **Do:**
- Write for humans first
- Use keywords naturally
- Create unique, valuable content
- Build quality backlinks
- Update content regularly

---

## Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Web Vitals](https://web.dev/vitals/)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

