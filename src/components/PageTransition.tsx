import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

// Instant page switch, no fade transitions
export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    setDisplayLocation(location);
  }, [location]);

  return (
    <div key={displayLocation.pathname}>
      {children}
    </div>
  );
}
