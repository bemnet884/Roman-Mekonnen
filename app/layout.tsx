import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Roman Mekonnen | Legal Professional & LL.B Portfolio',
  description:
    'Professional portfolio of Roman Mekonnen Kassa, LL.B Graduate from Bahir Dar University School of Law. Court internship experience at Bahir Dar Woreda Court and Gambella First Instance Court.',
  keywords: [
    'Roman Mekonnen',
    'Roman Mekonnen Kassa',
    'Lawyer Addis Ababa',
    'Legal Professional Ethiopia',
    'Bahir Dar University School of Law',
    'LL.B Graduate',
    'Court Intern',
    'Legal Research and Drafting',
  ],
  authors: [{ name: 'Roman Mekonnen Kassa' }],
  openGraph: {
    title: 'Roman Mekonnen | Legal Professional & LL.B Portfolio',
    description:
      'Professional portfolio of Roman Mekonnen Kassa, LL.B Graduate from Bahir Dar University School of Law with verified court internships and research.',
    type: 'profile',
    locale: 'en_US',
    siteName: 'Roman Mekonnen Legal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roman Mekonnen | Legal Professional & LL.B Portfolio',
    description:
      'Bahir Dar University School of Law graduate with verified court internships and rights-based legal research.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-[#faf9f6] text-stone-900 selection:bg-stone-900 selection:text-stone-50 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
