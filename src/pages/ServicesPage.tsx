import { useEffect, useState, useMemo } from 'react';
import {
  TrendingUp,
  Handshake,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Service } from '../types';

const iconMap: Record<string, typeof TrendingUp> = {
  TrendingUp,
  Handshake,
  Users,
  Globe,
};

const serviceLinks: Record<string, string> = {
  'Capital Raising': '/services/capital-raising',
  'M&A Advisory': '/services/ma-advisory',
  'Strategic Partnerships': '/services/partnerships',
  'Market Entry': '/services/market-entry',
  'Market Entry & Distribution': '/services/market-entry',
  'Market Entry and Distribution': '/services/market-entry',
};

export function ServicesPage() {
  const [services, setServices] = useState<Service[] | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Use memoized static fallback content so UI paints instantly
  const fallbackServices = useMemo<Service[]>(
    () => [
      {
        id: 'placeholder-1',
        title: 'Capital Raising',
        full_description:
          'Helping ambitious founders raise capital from institutional investors who align with their vision.',
        icon: 'TrendingUp',
      },
      {
        id: 'placeholder-2',
        title: 'M&A Advisory',
        full_description:
          'Expert support for mergers, acquisitions, and divestments with precision and confidentiality.',
        icon: 'Handshake',
      },
      {
        id: 'placeholder-3',
        title: 'Strategic Partnerships',
        full_description:
          'We connect companies with synergistic partners to accelerate growth and market reach.',
        icon: 'Users',
      },
      {
        id: 'placeholder-4',
        title: 'Market Entry',
        full_description:
          'Seamless entry into new regions with localized strategy, compliance, and partnerships.',
        icon: 'Globe',
      },
    ],
    []
  );

  useEffect(() => {
    // ✅ Fetch in background, but show fallback instantly
    let isMounted = true;
    if (supabase) {
      (async () => {
        try {
          const { data, error } = await supabase
            .from('services')
            .select('*')
            .order('order_index');

          if (!error && data && isMounted) {
            setServices(data);
          }
        } finally {
          if (isMounted) setLoading(false);
        }
      })();
    } else {
      setLoading(false);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const activeServices = services ?? fallbackServices;

  return (
    <div className="min-h-screen pt-20 opacity-0 animate-page-fade-in">
      {/* HERO */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-navy via-vivid-purple to-electric-blue overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up-delayed leading-relaxed">
            Comprehensive brokerage solutions designed to accelerate your business growth
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 sm:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ✅ Loading skeleton for better UX */}
          {loading && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 bg-white rounded-2xl shadow-md border border-gray-100"
                />
              ))}
            </div>
          )}

          {!loading && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
              {activeServices.map((service, index) => {
                const Icon = iconMap[service.icon] || TrendingUp;
                const linkTo =
                  serviceLinks[service.title?.trim()] ||
                  `/services/${service.slug || service.id}`;

                return (
                  <Card
                    key={service.id}
                    className={`group relative overflow-hidden border-2 border-transparent hover:border-electric-blue transition-all duration-500 bg-white rounded-2xl shadow-lg hover:shadow-xl animate-fade-in-up`}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-blue/10 to-vivid-purple/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md mx-auto sm:mx-0">
                        <Icon className="w-9 h-9 text-white" />
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-3 text-center sm:text-left group-hover:text-electric-blue transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-base sm:text-lg text-slate-gray mb-6 leading-relaxed text-center sm:text-left">
                        {service.full_description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {[
                          'Expert guidance from industry professionals',
                          'Tailored strategies for your specific needs',
                          'End-to-end support through the entire process',
                        ].map((text) => (
                          <li key={text} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                            <p className="text-slate-gray text-sm sm:text-base">
                              {text}
                            </p>
                          </li>
                        ))}
                      </ul>

                      <div className="flex justify-center sm:justify-start">
                        <Link to={linkTo}>
                          <Button
                            variant="outline"
                            className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all"
                          >
                            Learn More
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-electric-blue to-vivid-purple text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help accelerate your business goals.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-electric-blue hover:bg-off-white shadow-xl transition-all"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* local fade-in keyframes */}
      <style>{`
        @keyframes page-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-page-fade-in {
          animation: page-fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
