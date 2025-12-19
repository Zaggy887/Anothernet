import {
  Handshake,
  Scale,
  FileText,
  Users,
  TrendingUp,
  ArrowRight,
  Shield,
  Target,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export function MAAdvisoryPage() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Sell-Side Advisory',
      description:
        'Maximize valuation and find the perfect buyer for your business. We handle everything from buyer identification to negotiation and close.',
    },
    {
      icon: Target,
      title: 'Buy-Side Advisory',
      description:
        'Identify, evaluate, and acquire strategic targets that accelerate your growth. We source off-market opportunities and negotiate favorable terms.',
    },
    {
      icon: Scale,
      title: 'Valuation Services',
      description:
        'Independent, thorough business valuations for M&A, fundraising, tax planning, or strategic decision-making using industry-standard methodologies.',
    },
    {
      icon: FileText,
      title: 'Due Diligence',
      description:
        'Comprehensive financial, operational, and legal due diligence to uncover risks and opportunities before you commit capital.',
    },
  ];

  const whyChooseUs = [
    'Deep industry expertise across technology, healthcare, manufacturing, and professional services',
    'Extensive buyer and seller networks with active relationships across multiple sectors',
    'Track record of closing 50+ M&A transactions totaling over $800M in deal value',
    'Transparent fee structure with success-based pricing aligned with your outcomes',
    'Hands-on approach — we do not just advise, we actively drive deals to successful completion',
    'Expertise in complex deal structures including earn-outs, rollover equity, and management incentives',
  ];

  const processSteps = [
    {
      phase: 'Phase 1',
      title: 'Strategic Planning',
      duration: '2–3 weeks',
      activities: [
        'Business assessment and readiness evaluation',
        'Valuation analysis and pricing strategy',
        'Target buyer/seller profile development',
        'Timeline and milestone planning',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Market Preparation',
      duration: '3–4 weeks',
      activities: [
        'Confidential information memorandum creation',
        'Financial model and data room preparation',
        'Management presentation development',
        'Marketing materials and teaser creation',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Market Outreach',
      duration: '4–8 weeks',
      activities: [
        'Targeted outreach to qualified buyers/sellers',
        'NDA management and information sharing',
        'Buyer/seller meetings and site visits',
        'Indication of interest (IOI) collection',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Negotiation & Due Diligence',
      duration: '6–12 weeks',
      activities: [
        'Letter of intent (LOI) negotiation',
        'Due diligence coordination and management',
        'Purchase agreement negotiation',
        'Deal structure optimization',
      ],
    },
    {
      phase: 'Phase 5',
      title: 'Closing',
      duration: '2–4 weeks',
      activities: [
        'Final documentation and legal review',
        'Regulatory approvals and filings',
        'Closing conditions satisfaction',
        'Funds transfer and transition planning',
      ],
    },
  ];

  const dealTypes = [
    {
      name: 'Small Transactions',
      range: '$2M – $10M',
      ideal:
        'Lifestyle businesses, founder-led companies, niche market leaders',
    },
    {
      name: 'Mid-Market',
      range: '$10M – $100M',
      ideal:
        'Established businesses with strong cash flow, market position, and growth potential',
    },
    {
      name: 'Strategic Acquisitions',
      range: '$5M – $50M',
      ideal:
        'Bolt-on acquisitions, market expansion, technology tuck-ins, talent acquisition',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-gradient-to-br from-vivid-purple via-hot-pink to-bright-orange overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_60%)]"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FFD000]/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD000]/20 border-2 border-[#FFD000] rounded-full mb-6 animate-scale-in">
            <Handshake className="w-5 h-5 text-[#FFD000]" />
            <span className="text-white font-semibold">M&A Advisory</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Strategic M&A Advisory for Maximum Value
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up-delayed max-w-3xl mx-auto">
            Whether you're buying, selling, or merging, we bring the expertise,
            network, and negotiation skills to ensure you achieve the best
            possible outcome.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delayed">
            <Link to="/contact">
              <Button className="bg-[#FFD300] text-navy hover:bg-[#FF4DB3] border-0 shadow-2xl">
                Start Your M&A Process
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-vivid-purple">
              Download M&A PDF
            </Button>
          </div>

        <div className="mt-16 grid grid-cols-3 sm:gap-6 gap-3 sm:mx-0 mx-2">
  {[
    { label: 'Deals Closed', value: '50+', color: '#FFD000' },
    { label: 'Transaction Value', value: '$800M', color: '#FFFFFF' },
    { label: 'Avg. Timeline', value: '6–9mo', color: '#FFD000' },
  ].map((stat, i) => (
    <Card
      key={i}
      className={`bg-white/10 backdrop-blur-md border-2 border-[${stat.color}] text-center p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300`}
    >
      <p
        className="text-xl sm:text-4xl font-bold mb-1 sm:mb-2"
        style={{ color: stat.color }}
      >
        {stat.value}
      </p>
      <p className="text-white text-xs sm:text-sm leading-tight font-medium opacity-90">
        {stat.label}
      </p>
    </Card>
  ))}
</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-vivid-purple via-hot-pink to-bright-orange opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
              Comprehensive M&A Services
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              End-to-end advisory covering every aspect of mergers, acquisitions,
              and divestitures.
            </p>
          </div>

          {/* ✅ Mobile Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            <div className="flex gap-5 pb-5">
              {services.map((service, index) => (
                <div key={service.title} className="snap-center flex-shrink-0 w-[85vw]">
                  <Card className="relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                    {/* Gradient left line */}
                    <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-vivid-purple to-hot-pink rounded-l-2xl" />
                    <div className="p-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-vivid-purple to-hot-pink rounded-xl flex items-center justify-center mb-5 shadow-md">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-gray text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-3">
              {services.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === 0
                      ? 'bg-vivid-purple opacity-100'
                      : 'bg-gray-300 opacity-70'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                hover
                className="relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-vivid-purple to-hot-pink rounded-l-2xl" />
                <div className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-vivid-purple to-hot-pink rounded-xl flex items-center justify-center mb-5 shadow-md">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-gray text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
              Our M&A Process
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              A structured, proven methodology that maximizes value and minimizes risk at every stage.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card
                key={step.phase}
                hover
                className="overflow-hidden border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 bg-gradient-to-br from-vivid-purple to-hot-pink p-6 text-white flex flex-col justify-center rounded-l-2xl">
                    <p className="text-xs font-semibold mb-1">{step.phase}</p>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-xs text-white/80">{step.duration}</p>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <ul className="space-y-3">
                      {step.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-vivid-purple mt-1" />
                          <span className="text-slate-gray text-base leading-relaxed">
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
                Why Choose <span className="bg-gradient-to-r from-vivid-purple to-hot-pink bg-clip-text text-transparent">netgen</span> for M&A?
              </h2>
              <p className="text-lg sm:text-xl text-slate-gray mb-6 leading-relaxed">
                M&A transactions are complex, high-stakes endeavors. You need advisors who have been through hundreds of deals and know how to navigate every challenge.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-vivid-purple to-hot-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-gray text-base leading-relaxed">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="space-y-6">
                {dealTypes.map((deal, index) => (
                  <Card
                    key={deal.name}
                    hover
                    className="relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-vivid-purple to-hot-pink rounded-l-2xl" />
                    <div className="flex items-start gap-4 p-6">
                      <Briefcase className="w-8 h-8 text-vivid-purple flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-1">
                          {deal.name}
                        </h3>
                        <p className="text-2xl font-bold bg-gradient-to-r from-vivid-purple to-hot-pink bg-clip-text text-transparent mb-2">
                          {deal.range}
                        </p>
                        <p className="text-slate-gray text-base">
                          {deal.ideal}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-vivid-purple via-hot-pink to-bright-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Explore Your M&A Options?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Whether you're considering a sale, looking to acquire, or just want to understand your options, we offer complimentary confidential consultations to discuss your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-vivid-purple hover:bg-off-white shadow-2xl border-0">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-vivid-purple">
                Learn About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
