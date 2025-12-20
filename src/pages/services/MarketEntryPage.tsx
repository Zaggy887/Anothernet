import {
  Globe,
  Map,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export function MarketEntryPage() {
  const services = [
    {
      icon: Map,
      title: 'Market Analysis & Strategy',
      description:
        'Comprehensive market research, competitive analysis, and entry strategy development tailored to your specific product and goals.',
    },
    {
      icon: Users,
      title: 'Partner & Distributor Sourcing',
      description:
        'Identify, vet, and secure local partners, distributors, and channel partners who can accelerate your market penetration.',
    },
    {
      icon: Shield,
      title: 'Regulatory & Compliance',
      description:
        'Navigate complex regulatory requirements, licensing, certifications, and compliance frameworks in new markets.',
    },
    {
      icon: Zap,
      title: 'Go-to-Market Execution',
      description:
        'Execute your market entry strategy with on-the-ground support, from initial pilot programs to full-scale launch.',
    },
  ];

  const marketExpertise = [
    {
      region: 'North America',
      countries: 'USA, Canada, Mexico',
      strengths: 'Tech, SaaS, Healthcare, Professional Services',
    },
    {
      region: 'Europe',
      countries: 'UK, Germany, France, Nordics',
      strengths: 'FinTech, Enterprise Software, Manufacturing',
    },
    {
      region: 'Asia-Pacific',
      countries: 'Australia, Singapore, Japan, India',
      strengths: 'Consumer Tech, E-commerce, EdTech',
    },
    {
      region: 'LATAM',
      countries: 'Brazil, Argentina, Chile',
      strengths: 'FinTech, AgTech, Consumer Goods',
    },
  ];

  const entryModels = [
    {
      model: 'Direct Sales',
      timeline: '3–6 months',
      investment: 'Low–Medium',
      description:
        'Establish direct sales presence through local hires or remote sales team.',
    },
    {
      model: 'Distribution Partnership',
      timeline: '2–4 months',
      investment: 'Low',
      description:
        'Partner with established distributors who have existing customer relationships.',
    },
    {
      model: 'Strategic Alliance',
      timeline: '4–8 months',
      investment: 'Medium',
      description:
        'Form partnerships with complementary businesses for co-marketing and co-selling.',
    },
    {
      model: 'Joint Venture / Entity Setup',
      timeline: '6–12 months',
      investment: 'High',
      description:
        'Establish local entity or JV for markets requiring local presence.',
    },
  ];

  const successMetrics = [
    { metric: '30+', label: 'Markets Entered', icon: Globe },
    { metric: '85%', label: 'Success Rate', icon: Target },
    { metric: '$200M+', label: 'Revenue Generated', icon: TrendingUp },
    { metric: '4–6mo', label: 'Avg. Time to Revenue', icon: Zap },
  ];

  const processPhases = [
    {
      phase: 'Phase 1: Assessment',
      duration: '2–3 weeks',
      activities:
        'Market sizing, competitive analysis, regulatory review, preliminary partner identification.',
    },
    {
      phase: 'Phase 2: Strategy',
      duration: '2–3 weeks',
      activities:
        'Entry model selection, go-to-market plan, pricing strategy, resource requirements.',
    },
    {
      phase: 'Phase 3: Execution',
      duration: '3–6 months',
      activities:
        'Partner negotiations, regulatory approvals, team building, pilot program launch.',
    },
    {
      phase: 'Phase 4: Scale',
      duration: 'Ongoing',
      activities:
        'Performance monitoring, market expansion, partnership optimization, full commercial launch.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 opacity-0 animate-page-fade-in">
      {/* HERO */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-gradient-to-br from-bright-orange via-hot-pink to-vivid-purple overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyber-yellow/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-neon-green/20 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD000]/20 border-2 border-[#FFD000] rounded-full mb-5 animate-scale-in">
                <Globe className="w-5 h-5 text-[#FFD000]" />
                <span className="text-white font-semibold">
                  Market Entry & Distribution
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight animate-fade-in-up">
                Expand Into New Markets with Confidence
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-7 leading-relaxed max-w-lg animate-fade-in-up-delayed">
                Breaking into new markets doesn't have to be risky or expensive.
                We leverage our global network and deep market expertise to help
                you establish presence, build partnerships, and generate revenue fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delayed">
                <Link to="/contact">
                  <Button className="bg-[#FFB800] text-navy hover:bg-[#FFDB33] border-0 shadow-2xl">
                    Plan Your Expansion
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
               <a
  href="/Market-Entry.PDF"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-navy px-6 py-3 rounded-lg transition"
>
  Download Market PDF
</a>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                {successMetrics.map((item, index) => (
                  <Card
                    key={item.label}
                    className="bg-white/10 backdrop-blur-md border-2 border-cyber-yellow text-center p-5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <item.icon className="w-8 h-8 text-cyber-yellow mx-auto mb-2" />
                    <p className="text-2xl font-bold text-cyber-yellow mb-1">{item.metric}</p>
                    <p className="text-white text-xs">{item.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-3">
              Comprehensive Market Entry Services
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              End-to-end support from market research to full-scale commercial operations.
            </p>
          </div>

          {/* ✅ Mobile horizontal scroll */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 pb-4">
              {services.map((service, index) => (
                <div key={service.title} className="snap-center flex-shrink-0 w-[85vw]">
                  <Card className="border-t-4 border-bright-orange bg-white shadow-md rounded-2xl transition-all duration-300">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-bright-orange to-hot-pink rounded-xl flex items-center justify-center mb-4 shadow-md">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                      <p className="text-slate-gray text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-2">
              {services.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-gray-300 opacity-70"></div>
              ))}
            </div>
          </div>

          {/* ✅ Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                hover
                className="border-t-4 border-bright-orange bg-white shadow-md hover:shadow-lg rounded-2xl transition-all duration-300 animate-fade-in-up"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-bright-orange to-hot-pink rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                  <p className="text-slate-gray text-sm sm:text-base leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET EXPERTISE */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-electric-blue/10 to-vivid-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-3">
            Our Geographic Expertise
          </h2>
          <p className="text-lg sm:text-xl text-slate-gray mb-12 max-w-3xl mx-auto">
            Deep local knowledge and established networks across key global markets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketExpertise.map((market) => (
              <Card
                key={market.region}
                hover
                className="text-center border-4 border-transparent hover:border-electric-blue bg-white shadow-md hover:shadow-lg rounded-2xl transition-all animate-fade-in-up"
              >
                <div className="p-6">
                  <Globe className="w-10 h-10 text-electric-blue mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy mb-1">{market.region}</h3>
                  <p className="text-sm text-slate-gray mb-4">{market.countries}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-electric-blue mb-1">KEY SECTORS</p>
                    <p className="text-sm text-slate-gray leading-relaxed">{market.strengths}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ENTRY MODELS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-3">
            Market Entry Models
          </h2>
          <p className="text-lg sm:text-xl text-slate-gray mb-12 max-w-3xl mx-auto">
            Choose the right entry strategy based on your goals, resources, and market dynamics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {entryModels.map((model, index) => (
              <Card
                key={model.model}
                hover
                className="border-l-4 border-vivid-purple bg-white shadow-md hover:shadow-lg rounded-2xl transition-all animate-fade-in-up"
              >
                <div className="p-6 text-left">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-navy">{model.model}</h3>
                    <Award className="w-5 h-5 text-vivid-purple" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-gray">TIMELINE</p>
                      <p className="text-base font-bold text-vivid-purple">{model.timeline}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-gray">INVESTMENT</p>
                      <p className="text-base font-bold text-hot-pink">{model.investment}</p>
                    </div>
                  </div>
                  <p className="text-slate-gray text-sm sm:text-base leading-relaxed">{model.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 sm:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-3">
            Our Market Entry Process
          </h2>
          <p className="text-lg sm:text-xl text-slate-gray mb-12 max-w-3xl mx-auto">
            A proven four-phase approach to successful international expansion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPhases.map((phase, index) => (
              <Card
                key={phase.phase}
                hover
                className="text-center bg-white shadow-md hover:shadow-lg rounded-2xl transition-all animate-scale-in"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-bright-orange to-hot-pink rounded-full flex items-center justify-center text-lg font-bold text-white mx-auto mb-4 shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-1">{phase.phase}</h3>
                  <p className="text-sm font-semibold text-electric-blue mb-2">{phase.duration}</p>
                  <p className="text-sm text-slate-gray leading-relaxed">{phase.activities}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-bright-orange via-hot-pink to-vivid-purple text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Map className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Go Global?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-4 leading-relaxed">
            Whether you're targeting your first international market or expanding
            into your tenth, we have the expertise and network to make it happen efficiently and profitably.
          </p>
          <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
            Our clients typically achieve first revenue in new markets within
            4–6 months, compared to 12–18 months going alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-vivid-purple hover:bg-off-white shadow-2xl border-0">
                Start Your Expansion
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-vivid-purple">
                See Market Entries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FADE-IN STYLE */}
      <style>{`
        @keyframes page-fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(5px);
          }
          60% {
            opacity: 0.7;
            transform: translateY(8px);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .animate-page-fade-in {
          animation: page-fade-in 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
          will-change: opacity, transform, filter;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-page-fade-in {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
}
