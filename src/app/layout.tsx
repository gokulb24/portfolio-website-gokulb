import type { Metadata } from 'next';
import { Providers } from './providers';
import { Navigation, Footer } from '@/components';
import profile from '@/data/profile.json';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.headline}`,
  description: profile.summary,
  authors: [{ name: profile.name }],
  keywords: [
    'portfolio',
    'AI/ML Engineer',
    'Data Scientist',
    'Machine Learning',
    'Deep Learning',
  ],
  openGraph: {
    title: `${profile.name} - ${profile.headline}`,
    description: profile.summary,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} - ${profile.headline}`,
    description: profile.summary,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
        <Providers>
          <Navigation />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer
            email={profile.email}
            phone={profile.phone}
            github={profile.social.github}
            linkedin={profile.social.linkedin}
          />
        </Providers>
      </body>
    </html>
  );
}
