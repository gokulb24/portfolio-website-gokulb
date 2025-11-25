# Portfolio Website - Setup & Configuration Guide

## Quick Start

### Installation

```bash
cd portfolio-website
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio live.

### Build for Production

```bash
npm run build
npm start
```

---

## Configuration

### 1. Update Personal Information

Edit `/src/data/profile.json` with your information:

```json
{
  "name": "Your Name",
  "headline": "Your Headline",
  "email": "your@email.com",
  "phone": "+1-234-567-8900",
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  }
  // ... rest of profile
}
```

### 2. Set Up Contact Form

The contact form currently uses Formspree. To enable it:

1. Visit [Formspree](https://formspree.io/)
2. Create a new form and get your Form ID
3. Update `/src/app/contact/page.tsx`:

```typescript
<ContactForm
  endpoint="formspree"
  formspreeId="your_formspree_id_here"
/>
```

**Alternative: Netlify Forms**

1. Deploy to Netlify (see Deployment section)
2. In `/src/app/contact/page.tsx`, switch endpoint to `"netlify"`
3. Add `netlify` attribute to form (already configured)

**Alternative: Next.js Serverless API**

1. Create `/src/pages/api/contact.ts` with your email service
2. Update `ContactForm` endpoint to `"nextjs"`

### 3. Replace Resume Files

Your resume files should be at:

- **PDF Resume**: `/public/resume.pdf` - Used for download link on home page
- **Source Resume**: `/src/data/profile.json` - Update this directly

To link the resume download, update the download link in `/src/app/page.tsx`:

```typescript
<a href="/resume.pdf" download>
  <Button>Download Resume</Button>
</a>
```

### 4. Add Profile Picture

Place your profile image at:

- `/public/profile.jpg` (recommended)
- Or `/public/avatar.png`

Update the display in `/src/app/page.tsx`:

```typescript
<img
  src="/profile.jpg"
  alt="Profile"
  className="w-24 h-24 rounded-full"
/>
```

---

## Content Management

### Adding/Editing Projects

Edit `/src/data/profile.json`:

```json
{
  "projects": [
    {
      "id": "proj-4",
      "title": "New Project Title",
      "year": 2025,
      "description": "Project description here",
      "metrics": {
        "accuracy": "95%",
        "improvement": "50%"
      },
      "tags": ["Python", "ML", "Deep Learning"],
      "links": {
        "demo": "https://example.streamlit.app",
        "github": "https://github.com/username/project"
      }
    }
  ]
}
```

### Adding/Editing Experience

```json
{
  "experiences": [
    {
      "id": "exp-3",
      "company": "Company Name",
      "location": "City, Country",
      "role": "Job Title",
      "startDate": "Jan 2024",
      "endDate": "Present",
      "bullets": [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ],
      "tags": ["Python", "ML", "Data Analysis"]
    }
  ]
}
```

### Adding/Editing Skills

```json
{
  "skills": {
    "languages": ["Python", "SQL", "JavaScript"],
    "ml_ai": ["Machine Learning", "Deep Learning", "NLP"],
    "libraries": ["TensorFlow", "PyTorch", "Pandas"],
    "tools": ["Streamlit", "AWS", "Docker"],
    "other": ["Data Visualization", "Statistics"]
  }
}
```

---

## Theme & Customization

### Color Scheme

Edit `/tailwind.config.ts` to change the primary color:

```typescript
colors: {
  primary: {
    50: '#f9f5ff',
    100: '#f3ebff',
    // ... update all shades
    600: '#9333ea',  // Main primary color
    // ...
  }
}
```

### Dark Mode

Dark mode toggle is built-in and auto-switches based on system preference. Customize in `/src/app/providers.tsx`:

```typescript
<ThemeProvider
  attribute="class"
  defaultTheme="system"  // Change to "light" or "dark"
  enableSystem
>
```

---

## Deployment

### Option 1: Vercel (Recommended)

1. Push to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy (automatic on every push)

**Environment Variables** (if using serverless contact form):

```
NEXT_PUBLIC_CONTACT_ENDPOINT=your-api-endpoint
```

### Option 2: Netlify

1. Push to GitHub
2. Connect to [Netlify](https://netlify.com)
3. Deploy (automatic on every push)

**For Netlify Forms**, add to `next.config.ts`:

```typescript
redirects: async () => {
  return [
    {
      source: '/api/contact',
      destination: '/.netlify/functions/contact',
      permanent: false,
    },
  ];
},
```

### Option 3: Self-Hosted

```bash
npm run build
npm start
```

Deploy the `.next` folder with Node.js server.

---

## SEO Optimization

### Meta Tags

Update `/src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - AI/ML Engineer',
  description: 'Your professional summary...',
  keywords: ['portfolio', 'AI', 'ML', 'Data Science'],
  openGraph: {
    title: 'Your Name',
    description: 'Your summary',
    images: [
      {
        url: 'https://yoursite.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

### Page-Specific Meta Tags

For individual pages, create metadata exports in each page file:

```typescript
export const metadata: Metadata = {
  title: 'Projects | Your Name',
  description: 'View my latest projects and case studies',
};
```

### Open Graph Image

Create and place at `/public/og-image.png` (1200x630px recommended):

```typescript
// In layout.tsx
openGraph: {
  images: ['/og-image.png'],
}
```

---

## Performance

### Image Optimization

Images are optimized with Next.js `Image` component:

```typescript
import Image from 'next/image';

<Image
  src="/profile.jpg"
  alt="Profile"
  width={100}
  height={100}
  priority
/>
```

### Build Optimization

```bash
npm run build
# Check output size and warnings
```

### Testing Performance

```bash
npm run type-check  # TypeScript check
npm run lint        # Linting
```

---

## Scripts

### Available npm Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint and format with Prettier
npm run type-check   # Check TypeScript types
npm run export-resume # Export printable resume HTML
```

---

## Troubleshooting

### Port Already in Use

```bash
npm run dev -- -p 3001  # Use different port
```

### Build Errors

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Dark Mode Not Working

Check browser DevTools:
- Ensure `next-themes` is loaded
- Check `localStorage` for theme setting
- Verify Tailwind `darkMode: 'class'` in config

### Contact Form Not Sending

1. Check Formspree credentials
2. Verify CORS settings
3. Check browser console for errors
4. Test with network tab in DevTools

---

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Modal.tsx
│   │   ├── ContactForm.tsx
│   │   └── index.ts
│   ├── data/
│   │   └── profile.json
│   └── lib/
├── public/
│   ├── resume.pdf
│   ├── profile.jpg
│   └── og-image.png
├── scripts/
│   └── export-resume.js
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## Support & Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Last Updated**: November 2025
