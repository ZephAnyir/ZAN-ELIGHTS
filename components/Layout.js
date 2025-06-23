import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children, title = 'ZAN E-lite Visuals | Professional Photography & Videography' }) => {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Professional photography and videography services by ZAN E-lite Visuals. Capturing Light, Creating Stories." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Head>

      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="w-8 h-8 border-2 border-gold-400/30 border-t-gold-400 rounded-full animate-spin"></div>
        </div>
      )}

      <div className={`min-h-screen flex flex-col ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;