import { Link, LinkProps, useNavigate } from 'react-router-dom';
import { MouseEvent, useCallback } from 'react';

interface TransitionLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

// Instant navigation (no fade transition)
export function TransitionLink({ to, className = '', children, ...props }: TransitionLinkProps) {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      e.preventDefault();
      navigate(to as string);
    },
    [to, navigate]
  );

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
