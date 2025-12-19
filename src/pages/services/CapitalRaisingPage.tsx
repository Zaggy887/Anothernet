import {
  TrendingUp,
  DollarSign,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Shield,
  Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export function CapitalRaisingPage() {

  const benefits = [
    {
      icon: Users,
      title: 'Extensive Investor Network',
      description:
        'Direct access to 500+ active investors including VCs, PE firms, family offices, and strategic corporate investors.',
    },
    {
      icon: Target,
      title: 'Targeted Approach',
      description:
        'We identify and approach only investors who match your stage, sector, and funding requirements.',
    },
    {
      icon: Shield,
      title: 'Expert Negotiation',
      description:
        'Our team has raised over $2.5B and knows how to structure deals that protect founder interests.',
    },
    {
      icon: Clock,
      title: 'Accelerated Timeline',
      description:
        'Average time to term sheet: 45–60 days vs. 4–6 months going alone.',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description:
        'We conduct a comprehensive assessment of your business, growth trajectory, capital needs, and investment readiness.',
    },
    {
      step: 2,
      title: 'Strategy Development',
      description:
        'We create a customized capital raising strategy including target investor profiles and optimal deal structures.',
    },
    {
      step: 3,
      title: 'Materials Preparation',
      description:
        'We develop professional-grade pitch decks, models, and summaries that meet institutional investor standards.',
    },
    {
      step: 4,
      title: 'Investor Outreach',
      description:
        'We leverage our network to secure meetings, manage communications, and coordinate due diligence.',
    },
    {
      step: 5,
      title: 'Term Sheet Negotiation',
      description:
        'We guide you through offers, negotiate favorable terms, and ensure alignment on valuation and structure.',
    },
    {
      step: 6,
      title: 'Close & Post-Close',
      description:
        'We manage closing logistics, coordinate with legal teams, and onboard investors seamlessly.',
    },
  ];

  const dealTypes = [
    {
      name: 'Seed & Pre-Seed',
      range: '$500K – $3M',
      description:
        'Perfect for early-stage startups with validated product-market fit seeking institutional capital.',
    },
    {
      name: 'Series A',
      range: '$3M – $15M',
      description:
        'Growth capital for proven business models ready to scale and expand market presence.',
    },
    {
      name: 'Series B+',
      range: '$15M – $100M+',
      description:
        'Later-stage funding for established companies targeting market leadership and expansion.',
    },
    {
      name: 'Growth Equity',
      range: '$10M – $50M',
      description:
        'Non-dilutive or minority stake capital for profitable companies seeking to accelerate growth.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-gradient-to-br from-electric-blue via-vivid-purple to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_60%)]"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyber-yellow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-neon-green/20 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-green/20 border-2 border-neon-green rounded-full mb-6">
                <DollarSign className="w-5 h-5 text-neon-green" />
                <span className="text-white font-semibold">Capital Raising</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Fuel Your Growth with the Right Capital
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                We connect high-growth companies with institutional investors who
                understand your vision and can accelerate your journey to market
                leadership.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-neon-green text-navy hover:bg-neon-green/90 border-0 shadow-2xl px-6 py-3 text-lg">
                    Start Your Raise
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  onClick={handleDownloadPDF}
                  className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-navy px-6 py-3 text-lg"
                >
                  Download Capital PDF
                </Button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Capital Raised', value: '$2.5B+', color: 'neon-green' },
                  { label: 'Deals Closed', value: '150+', color: 'cyber-yellow' },
                  { label: 'Active Investors', value: '500+', color: 'electric-blue' },
                  { label: 'Success Rate', value: '98%', color: 'hot-pink' },
                ].map((stat, i) => (
                  <Card
                    key={i}
                    className={`bg-white/10 backdrop-blur-md border border-${stat.color} shadow-md hover:shadow-lg transition-all text-center p-6 rounded-xl`}
                  >
                    <p
                      className={`text-3xl sm:text-4xl font-bold text-${stat.color} mb-2`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-white text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* BENEFITS */}
<section className="py-20 sm:py-24 bg-white relative overflow-hidden">
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink opacity-40" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
        Why Choose <span className="bg-gradient-to-r from-electric-blue to-vivid-purple bg-clip-text text-transparent">netgen</span> for Capital Raising?
      </h2>
      <p className="text-xl text-slate-gray max-w-3xl mx-auto">
        We're not just introducers — we're your strategic partner in securing
        the capital you need to win.
      </p>
    </div>

    {/* Desktop grid */}
    <div className="hidden md:grid md:grid-cols-2 gap-8">
      {benefits.map((benefit, index) => (
        <Card
          key={benefit.title}
          hover
          className="relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up overflow-hidden"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Blue gradient left line */}
          <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-electric-blue to-vivid-purple rounded-l-2xl" />

          <div className="flex items-start gap-5 p-6">
            {/* Gradient icon square */}
            <div className="w-14 h-14 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
              <benefit.icon className="w-7 h-7 text-white" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-gray text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>

    {/* Mobile swipe with dots */}
    <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
      <div className="flex gap-5 pb-4">
        {benefits.map((benefit, index) => (
          <div key={benefit.title} className="snap-center flex-shrink-0 w-[85vw]">
            <Card className="relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Blue gradient left line */}
              <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-electric-blue to-vivid-purple rounded-l-2xl" />

              <div className="flex items-start gap-5 p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-gray text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {benefits.slice(0, 4).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === 0
                ? 'bg-electric-blue opacity-100'
                : 'bg-gray-300 opacity-70'
            }`}
          ></div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* PROCESS */}
      <section className="py-20 sm:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
              Our Capital Raising Process
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              A proven six-step methodology that has raised billions for companies like yours.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <Card
                key={item.step}
                hover
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5 p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-electric-blue rounded-full flex items-center justify-center text-lg sm:text-xl font-bold text-white shadow-md">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-slate-gray text-base leading-relaxed">{item.description}</p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0 hidden md:block" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DEAL TYPES */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
              Deal Types We Handle
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              From early-stage seed rounds to growth equity, we have the expertise and network to execute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dealTypes.map((deal, index) => (
              <Card
                key={deal.name}
                hover
                className="text-center bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TrendingUp className="w-10 h-10 text-electric-blue mx-auto mb-3" />
                <h3 className="text-xl font-bold text-navy mb-2">{deal.name}</h3>
                <p className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-vivid-purple bg-clip-text text-transparent mb-3">
                  {deal.range}
                </p>
                <p className="text-slate-gray text-base leading-relaxed px-4">{deal.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BarChart3 className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Raise Capital?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss your funding needs and connect you with the right investors. Most clients receive their first term sheet within 60 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-vivid-purple hover:bg-off-white shadow-2xl border-0 px-8 py-3 text-lg">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-vivid-purple px-8 py-3 text-lg">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
