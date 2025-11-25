# Quick Setup Instructions

## 🚀 Get Started in 5 Minutes

### 1. Clone/Download the Project

```bash
cd /Users/gokulb/portfolio-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Update Your Information

Edit `/src/data/profile.json`:
- Replace all placeholder text with your actual information
- Add your GitHub and LinkedIn URLs
- Update project links and descriptions

### 4. Add Your Resume

Copy your resume PDF to:
```
public/resume.pdf
```

### 5. Add Your Profile Picture

Copy your profile photo to:
```
public/profile.jpg
```
(Or update the filename in `/src/app/page.tsx`)

### 6. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` and you'll see your portfolio!

---

## 📝 Required Updates

### In `/src/data/profile.json`:
- [ ] Full name and headline
- [ ] Email and phone
- [ ] GitHub and LinkedIn URLs
- [ ] Professional summary
- [ ] Work experience entries
- [ ] Projects with links
- [ ] Education details
- [ ] Certifications with links
- [ ] Skills list

### In `/src/app/page.tsx` & other pages:
- [ ] Update download link to your resume path
- [ ] Update profile image filename if needed

### Setup Contact Form:
- [ ] Get Formspree ID from [formspree.io](https://formspree.io)
- [ ] Update form ID in `/src/app/contact/page.tsx`

---

## 🎨 Customization

### Change Colors

Edit `/tailwind.config.ts`:
```typescript
primary: {
  600: '#9333ea',  // Change this to your accent color
  // Update other shades accordingly
}
```

### Change Dark Mode Preference

Edit `/src/app/providers.tsx`:
```typescript
<ThemeProvider
  defaultTheme="light"  // Change to "light", "dark", or "system"
  enableSystem
>
```

---

## 🚀 Deploy

### Easiest: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"

Done! Your site is live and updates automatically on every push.

### Alternative: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repo
5. Deploy

See `DEPLOYMENT.md` for detailed instructions.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

Your site is optimized and ready!

---

## 🐛 Common Issues

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Page shows old content?**
- Clear browser cache: Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
- Rebuild: `npm run build`

**Contact form not working?**
- Update Formspree ID in contact form
- Check browser console for errors
- Verify email is correct

**Images not showing?**
- Ensure images are in `/public/` folder
- Use filename exactly as in code

---

## 📚 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx            # Home page
│   │   ├── about/page.tsx       # About page
│   │   ├── experience/page.tsx  # Experience page
│   │   ├── projects/page.tsx    # Projects page
│   │   ├── skills/page.tsx      # Skills page
│   │   ├── certifications/page.tsx
│   │   ├── contact/page.tsx     # Contact form
│   │   └── layout.tsx           # Root layout
│   ├── components/             # Reusable components
│   ├── data/
│   │   └── profile.json        # YOUR CONTENT - Edit this!
│   └── lib/                    # Utilities
├── public/                     # Static files
│   ├── resume.pdf             # Add your resume
│   ├── profile.jpg            # Add your photo
│   └── og-image.png           # Social preview image
├── scripts/
│   └── export-resume.js       # Export printable resume
└── README.md                  # Full documentation
```

---

## ✅ Before Going Live

- [ ] Update all profile information
- [ ] Add your resume and photo
- [ ] Set up contact form (Formspree)
- [ ] Test all links work
- [ ] Check on mobile devices
- [ ] Test dark mode toggle
- [ ] Check SEO meta tags
- [ ] Run `npm run build` successfully

---

## 📖 Next Steps

1. **Read Full README**: `README.md` - Complete configuration guide
2. **View Deployment Guide**: `DEPLOYMENT.md` - Deploy to production
3. **Customize**: Update colors, fonts, and layout in Tailwind config
4. **Monitor**: Add analytics and monitor performance

---

**Questions?** Check the README or deployment guides for detailed instructions.

Good luck with your portfolio! 🎉
