import { TrendingUp, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../ui/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
   { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1A1446] via-[#3D2F7E] to-[#1976B3] text-white relative overflow-hidden">
      {/* Subtle overlay glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.06),_transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-7 h-7 text-[#E9C642]" />
              <span className="text-lg font-bold tracking-wide">netgen brokerage</span>
            </div>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Australia’s leading brokerage connecting capital, companies, and partnerships to unlock growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/netgenbrokerage"
                className="text-gray-300 hover:text-[#E9C642] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/netgenbrokerage"
                className="text-gray-300 hover:text-[#E9C642] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#E9C642]">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#E9C642] transition-colors duration-300"
                  > 
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#E9C642]">Contact</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E9C642] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@netgen.com.au"
                  className="text-gray-300 hover:text-[#E9C642] transition-colors"
                >
                  info@netgen.com.au
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E9C642] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+61391234567"
                  className="text-gray-300 hover:text-[#E9C642] transition-colors"
                >
                  +61 (03) 9123 4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E9C642] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Level 4, Collins Square, Melbourne VIC 3000
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#E9C642]">
              Ready to Make a Move?
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Book a quick call with our Melbourne team to explore upcoming opportunities.
            </p>
            <a href="/contact">
              <Button
                size="sm"
                className="bg-[#E9C642] text-navy font-semibold hover:bg-[#F0D56A] transition-all hover:scale-105 border-0 shadow-md"
              >
                Book a Call
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-300 text-sm">
          <p>
            &copy; {currentYear} Netgen Brokerage Pty Ltd — ABN 00 000 000 000.
            <br className="sm:hidden" /> All rights reserved • Proudly based in Melbourne, Australia 🇦🇺
          </p>
        </div>
      </div>
    </footer>
  );
}
