import { useEffect, useState } from 'react';
import { TrendingUp, Handshake, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { supabase } from '../../lib/supabase';
import { Service } from '../../types';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

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

const serviceImages: Record<string, string> = {
  'Capital Raising': 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
  'M&A Advisory': 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Strategic Partnerships': 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Market Entry': 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
};

function ServiceCard({ service, index, imageUrl }: { service: Service; index: number; imageUrl: string }) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const Icon = iconMap[service.icon] || TrendingUp;
  const serviceLink = serviceLinks[service.title] || '/services';

  return (
    <Link
      to={serviceLink}
      ref={elementRef}
      className={`block group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="relative overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-electric-blue shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full object-cover opacity-10 saturate-50 group-hover:opacity-20 group-hover:saturate-100 transition-all duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90" />

        <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-electric-blue via-vivid-purple to-hot-pink shadow-md mb-5 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-navy mb-3 group-hover:text-electric-blue transition-colors">
            {service.title}
          </h3>

          <p className="text-slate-gray text-sm sm:text-base leading-relaxed mb-5 flex-grow">
            {service.short_description}
          </p>

          <div className="flex items-center gap-2 text-vivid-purple font-semibold group-hover:gap-3 group-hover:text-electric-blue transition-all">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink" />
      </Card>
    </Link>
  );
}

export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    loadServices();
  }, []);

  async function loadServices() {
    if (supabase) {
      const { data } = await supabase
        .from('services')
        .select('*')
        .order('order_index')
        .limit(4);

      if (data && data.length > 0) {
        setServices(data);
        return;
      }
    }

    setServices([
      {
        id: '1',
        title: 'Capital Raising',
        short_description: 'Connect with the right investors to fuel your growth. From seed to Series C and beyond.',
        icon: 'TrendingUp',
        order_index: 1,
      },
      {
        id: '2',
        title: 'M&A Advisory',
        short_description: 'Expert guidance through mergers, acquisitions, and strategic exits with maximum value.',
        icon: 'Handshake',
        order_index: 2,
      },
      {
          id: '3',
          title: 'Strategic Partnerships',
          short_description: 'Build powerful alliances that accelerate market reach and unlock new opportunities.',
          icon: 'Users',
          order_index: 3,
        },
        {
          id: '4',
          title: 'Market Entry',
          short_description: 'Navigate new markets with confidence through strategic planning and local expertise.',
          icon: 'Globe',
          order_index: 4,
        },
      ]);
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-off-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth and maximize outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              imageUrl={serviceImages[service.title] || serviceImages['Capital Raising']}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
