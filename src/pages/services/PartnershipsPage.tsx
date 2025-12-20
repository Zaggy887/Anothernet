import {
  Users,
  Network,
  Rocket,
  Globe,
  ArrowRight,
  CheckCircle,
  Link2,
  TrendingUp,
  Target,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export function PartnershipsPage() {
  const partnershipTypes = [
    {
      icon: Link2,
      title: 'Technology Partnerships',
      description:
        'Integrate with complementary technology providers to enhance your product offering and reach new customer segments through strategic tech alliances.',
    },
    {
      icon: Globe,
      title: 'Distribution Partnerships',
      description:
        'Partner with established distributors, resellers, and channel partners to rapidly expand market reach and accelerate revenue growth.',
    },
    {
      icon: Users,
      title: 'Strategic Alliances',
      description:
        'Form high-level alliances with industry leaders to co-develop solutions, share resources, and create competitive advantages.',
    },
    {
      icon: Rocket,
      title: 'Joint Ventures',
      description:
        'Structure and negotiate joint venture agreements for market entry, product development, or resource pooling initiatives.',
    },
  ];

  const benefits = [
    'Accelerate market penetration without significant capital investment',
    'Access established distribution channels and customer bases instantly',
    'Share R&D costs and risks while expanding product capabilities',
    'Enhance credibility through association with recognized brands',
    'Create defensive moats against competitors through exclusive partnerships',
    'Generate new revenue streams through co-marketing and referral arrangements',
  ];

  const process = [
    {
      step: 1,
      title: 'Strategic Assessment',
      activities: [
        'Define partnership objectives and success metrics',
        'Identify core strengths and partnership value proposition',
        'Map ideal partner profiles and target list',
        'Assess partnership readiness and gaps',
      ],
    },
    {
      step: 2,
      title: 'Partner Identification',
      activities: [
        'Leverage network to identify potential partners',
        'Conduct preliminary fit assessment',
        'Research partner needs and priorities',
        'Create compelling outreach materials',
      ],
    },
    {
      step: 3,
      title: 'Engagement & Qualification',
      activities: [
        'Initial partner meetings and exploration',
        'Assess mutual fit and alignment',
        'Define partnership scope and structure',
        'Develop preliminary business case',
      ],
    },
    {
      step: 4,
      title: 'Deal Structuring',
      activities: [
        'Negotiate partnership terms and economics',
        'Define roles, responsibilities, and governance',
        'Create legal framework and contracts',
        'Establish success metrics and KPIs',
      ],
    },
    {
      step: 5,
      title: 'Launch & Optimization',
      activities: [
        'Execute go-to-market plan',
        'Monitor performance against targets',
        'Optimize processes and collaboration',
        'Scale successful partnerships',
      ],
    },
  ];

  const caseStudies = [
    {
      company: 'SaaS Platform',
      result: '3× Revenue Growth',
      description:
        'Secured strategic partnership with enterprise software leader, adding 200+ enterprise customers in 18 months.',
    },
    {
      company: 'Healthcare Tech',
      result: '$50M Joint Venture',
      description:
        'Structured JV with hospital network to co-develop telehealth platform, leading to successful Series B.',
    },
    {
      company: 'FinTech Startup',
      result: '5 Distribution Partners',
      description:
        'Built network of bank partnerships providing access to 10M+ potential customers.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-gradient-to-br from-navy via-electric-blue to-vivid-purple overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-hot-pink/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-green/20 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-hot-pink/20 border-2 border-hot-pink rounded-full mb-6 animate-scale-in">
            <Network className="w-5 h-5 text-hot-pink" />
            <span className="text-white font-semibold">Strategic Partnerships</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Build Partnerships That Drive Exponential Growth
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up-delayed max-w-3xl mx-auto">
            The right partnerships can accelerate your growth faster than any other
            strategy. We help you identify, secure, and activate partnerships that
            create lasting competitive advantages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delayed">
            <Link to="/contact">
              <Button className="bg-hot-pink text-white hover:bg-hot-pink/90 border-0 shadow-2xl">
                Explore Partnerships
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
           <a
  href="/Strategic_Part.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-navy px-6 py-3 rounded-lg transition"
>
  Download Partnerships PDF
</a>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TYPES */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
              Partnership Types We Facilitate
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              From technology integrations to distribution agreements, we structure
              partnerships that deliver measurable results.
            </p>
          </div>

          {/* ✅ Horizontal swipe on mobile */}
<div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
  <div className="flex gap-4 pb-4">
    {partnershipTypes.map((type, index) => (
      <div key={type.title} className="snap-center flex-shrink-0 w-[85vw]">
        <Card
          className="border-l-4 border-electric-blue bg-white shadow-lg rounded-2xl transition-all duration-300"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-xl flex items-center justify-center mb-4 shadow-md">
              <type.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">
              {type.title}
            </h3>
            <p className="text-slate-gray text-sm sm:text-base leading-relaxed">
              {type.description}
            </p>
          </div>
        </Card>
      </div>
    ))}
  </div>

  {/* ✅ Dots under swiper */}
  <div className="flex justify-center gap-2 mt-3">
    {partnershipTypes.map((_, index) => (
      <div
        key={index}
        className="w-2 h-2 rounded-full bg-gray-300 opacity-70"
      ></div>
    ))}
  </div>
</div>

          {/* ✅ Grid on desktop */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card
                key={type.title}
                hover
                className="border-l-4 border-electric-blue bg-white shadow-lg hover:shadow-xl rounded-2xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">
                    {type.title}
                  </h3>
                  <p className="text-slate-gray text-sm sm:text-base leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

  {/* WHY PARTNERSHIPS MATTER */}
<section className="py-14 sm:py-16 bg-gradient-to-r from-electric-blue/10 to-vivid-purple/10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* LEFT TEXT CONTENT */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
          Why Strategic Partnerships Matter
        </h2>
        <p className="text-base sm:text-lg text-slate-gray mb-5 leading-relaxed">
          The fastest-growing companies aren’t going it alone — they’re forming
          powerful alliances that multiply impact and accelerate reach.
        </p>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-gradient-to-br from-neon-green to-electric-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-slate-gray text-sm sm:text-base leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — SMALLER CASE STUDY CARDS */}
      <div className="space-y-3">
        {caseStudies.map((study, index) => (
          <Card
            key={study.company}
            hover
            className="border-l-4 border-hot-pink bg-white shadow-sm hover:shadow-md rounded-xl transition-all animate-fade-in-up max-w-md mx-auto"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-3 p-3 sm:p-4">
              <div className="w-7 h-7 bg-gradient-to-br from-hot-pink to-bright-orange rounded-full flex items-center justify-center shadow-sm">
                <TrendingUp className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-navy mb-0.5">
                  {study.company}
                </h3>
                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-hot-pink to-bright-orange bg-clip-text text-transparent mb-0.5">
                  {study.result}
                </p>
                <p className="text-slate-gray text-xs sm:text-sm leading-snug">
                  {study.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* PROCESS */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
              Our Partnership Development Process
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              A systematic approach to identifying, negotiating, and activating
              high-value partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((phase, index) => (
              <Card
                key={phase.step}
                hover
                className="text-center border-t-4 border-electric-blue bg-white shadow-lg hover:shadow-xl rounded-2xl transition-all animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-full flex items-center justify-center text-lg sm:text-xl font-bold text-white mx-auto mb-3 shadow-md">
                  {phase.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                  {phase.title}
                </h3>
                <ul className="space-y-2 text-left px-3">
                  {phase.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-neon-green mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-slate-gray leading-relaxed">
                        {activity}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-hot-pink via-vivid-purple to-electric-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Build Game-Changing Partnerships?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Let's identify the partnerships that will accelerate your growth.
            Our team has facilitated alliances generating over $500M in combined
            value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-vivid-purple hover:bg-off-white shadow-2xl border-0">
                Schedule Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-vivid-purple">
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
