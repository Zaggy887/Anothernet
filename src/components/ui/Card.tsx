import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClasses = hover
    ? 'hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer'
    : 'transition-all duration-300 ease-out';

  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
