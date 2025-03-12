import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Webdrift',
  description: 
    "Boost your business with AI-driven web & mobile apps. Webdrift offers cutting-edge digital solutions for students, enterprises, and entrepreneurs. Automate, scale, and grow with innovation!",
  keywords: [
    "Web development", "App development", "AI solutions", "Business automation",
    "Enterprise scaling", "Entrepreneurs", "Digital transformation",
    "Career growth", "AI-powered apps", "Next.js", "React", "Best web solutions"
  ].join(", "),
  openGraph: {
    title: 'Webdrift',
    description: 
      "Boost your business with AI-driven web & mobile apps. Webdrift offers cutting-edge digital solutions for students, enterprises, and entrepreneurs. Automate, scale, and grow with innovation!",
    url: 'https://webdrift.in',
    type: 'website',
    siteName: 'Webdrift',
   
    
  }

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='bg-white dark:bg-[#1c1d1e]'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
