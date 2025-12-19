import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Instantly resets scroll position on route change
export function ScrollReset() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Ignore hash-only changes (in-page anchors)
    if (location.hash) return;

    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    });
  }, [location.pathname, location.search]);

  // Handle #hash anchor links smoothly
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return null;
}
