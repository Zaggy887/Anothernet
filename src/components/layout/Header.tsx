import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosingMobileMenu, setIsClosingMobileMenu] = useState(false);
  const [isServicesOpenDesktop, setIsServicesOpenDesktop] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRefDesktop = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Desktop: close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRefDesktop.current && !dropdownRefDesktop.current.contains(event.target as Node)) {
        setIsServicesOpenDesktop(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mobile: close menu when clicking outside
  useEffect(() => {
    const handleClickOutsideMobile = (event: MouseEvent) => {
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        handleCloseMobileMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutsideMobile);
    return () => document.removeEventListener('mousedown', handleClickOutsideMobile);
  }, [isMobileMenuOpen]);

  // Header scroll style
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsClosingMobileMenu(false);
    setIsServicesOpenDesktop(false);
    setIsServicesOpenMobile(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
  ];

  const serviceLinks = [
    { label: '💰 Capital Raising', path: '/services/capital-raising' },
    { label: '🤝 M&A Advisory', path: '/services/ma-advisory' },
    { label: '🌐 Strategic Partnerships', path: '/services/partnerships' },
    { label: '🚀 Market Entry', path: '/services/market-entry' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = serviceLinks.some((l) => l.path === location.pathname);
  const isHomePage = location.pathname === '/';

  // Close Mobile Menu with Fade Out
  const handleCloseMobileMenu = () => {
    setIsClosingMobileMenu(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosingMobileMenu(false);
      setIsServicesOpenMobile(false);
    }, 250);
  };

  // Navigation handler
  const handleNav = (path: string) => () => {
    setIsServicesOpenDesktop(false);
    setIsServicesOpenMobile(false);
    handleCloseMobileMenu();
    setTimeout(() => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-electric-blue'
          : isHomePage
          ? 'bg-transparent border-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-xl border-b border-electric-blue'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={handleNav('/')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-electric-blue to-vivid-purple p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <span
              className={`text-2xl font-bold bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink bg-clip-text text-transparent ${
                !isScrolled && isHomePage ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' : 'text-navy'
              }`}
            >
              netgen
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3">
            {/* Home */}
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNav(link.path)}
                className={`px-4 py-2 font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-electric-blue'
                    : isScrolled || !isHomePage
                    ? 'text-navy hover:text-electric-blue'
                    : 'text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] hover:text-electric-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown (Desktop) */}
            <div className="relative" ref={dropdownRefDesktop}>
              <button
                type="button"
                onClick={() => setIsServicesOpenDesktop((v) => !v)}
                className={`relative px-4 py-2 font-medium flex items-center gap-1 transition-all duration-300 ${
                  isServiceActive
                    ? 'text-electric-blue'
                    : isScrolled || !isHomePage
                    ? 'text-navy hover:text-electric-blue'
                    : 'text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] hover:text-electric-blue'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpenDesktop ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpenDesktop && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border-4 border-electric-blue overflow-hidden z-50 pointer-events-auto">
                  {serviceLinks.map((service, index) => (
                    <div key={service.path}>
                      <Link
                        to={service.path}
                        onClick={handleNav(service.path)}
                        className="flex items-center gap-3 px-6 py-4 text-navy font-semibold hover:text-electric-blue hover:bg-gradient-to-r hover:from-electric-blue/10 hover:to-vivid-purple/10 transition-all duration-300"
                      >
                        {service.label}
                      </Link>
                      {index < serviceLinks.length - 1 && <div className="h-px bg-gray-200 mx-4" />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNav(link.path)}
                className={`px-4 py-2 font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-electric-blue'
                    : isScrolled || !isHomePage
                    ? 'text-navy hover:text-electric-blue'
                    : 'text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] hover:text-electric-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Contact CTA */}
            <Link
              to="/contact"
              onClick={handleNav('/contact')}
              className="ml-4 px-6 py-3 bg-gradient-to-r from-electric-blue to-vivid-purple hover:from-vivid-purple hover:to-hot-pink text-white font-semibold rounded-md shadow-lg hover:shadow-electric-blue/50 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden relative group"
            onClick={() => {
              if (isMobileMenuOpen) {
                handleCloseMobileMenu();
              } else {
                setIsMobileMenuOpen(true);
              }
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen && !isClosingMobileMenu ? (
              <X className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-navy' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`md:hidden bg-white/98 backdrop-blur-lg border-t-2 border-electric-blue shadow-2xl relative z-[90] ${
            isClosingMobileMenu ? 'animate-fadeOutMenu' : 'animate-fadeIn'
          }`}
        >
          <div className="px-4 py-6 space-y-3">
            {/* Main Nav */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleNav(link.path)}
                className={`block w-full text-left px-4 py-3 font-medium rounded-lg transition-all durataion-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-electric-blue/10 to-vivid-purple/10 text-electric-blue border-2 border-electric-blue'
                    : 'text-navy hover:bg-electric-blue/5 border-2 border-transparent hover:border-electric-blue/30'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown (Mobile) */}
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setIsServicesOpenMobile((v) => !v)}
                className={`w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg transition-all duration-300 ${
                  isServicesOpenMobile
                    ? 'bg-electric-blue/10 text-electric-blue border-2 border-electric-blue'
                    : 'text-navy hover:bg-electric-blue/5 border-2 border-transparent hover:border-electric-blue/30'
                }`}
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesOpenMobile ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpenMobile && (
                <div className="mt-3 bg-white/98 backdrop-blur-lg rounded-2xl border-[3px] border-electric-blue shadow-xl overflow-hidden animate-slideDown pointer-events-auto">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={handleNav(service.path)}
                      className="block w-full text-left flex items-center gap-3 px-6 py-4 text-navy font-semibold hover:text-electric-blue hover:bg-gradient-to-r hover:from-electric-blue/10 hover:to-vivid-purple/10 transition-all duration-300 active:scale-[0.98] touch-manipulation"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact CTA */}
            <Link
              to="/contact"
              onClick={handleNav('/contact')}
              className="block w-full text-center mt-4 py-3 bg-gradient-to-r from-electric-blue to-vivid-purple hover:from-vivid-purple hover:to-hot-pink text-white font-semibold rounded-lg shadow-md hover:shadow-electric-blue/40 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
