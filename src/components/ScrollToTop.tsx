import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Scroll to top on route change (Astro handles routing automatically)
    window.scrollTo(0, 0);
  }, []);

  // Also listen to popstate events for browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return null;
};

export default ScrollToTop;
