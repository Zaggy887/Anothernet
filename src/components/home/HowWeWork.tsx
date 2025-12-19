import { CheckCircle, Zap, Target, Users, Handshake, Award } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const steps = [
  {
    icon: Target,
    title: 'Discovery',
    description: 'We dive deep into your business goals, requirements, and timeline to build a clear action plan.',
    color: 'from-electric-blue to-vivid-purple'
  },
  {
    icon: Zap,
    title: 'Strategy',
    description: 'Our team develops a tailored approach with target profiles, outreach tactics, and deal structure.',
    color: 'from-vivid-purple to-hot-pink'
  },
  {
    icon: Users,
    title: 'Execution',
    description: 'We leverage our network and expertise to connect you with the right partners, investors, or acquirers.',
    color: 'from-hot-pink to-bright-orange'
  },
  {
    icon: Handshake,
    title: 'Negotiation',
    description: 'We support deal structuring and negotiation to ensure terms that align with your objectives.',
    color: 'from-bright-orange to-cyber-yellow'
  },
  {
    icon: Award,
    title: 'Close',
    description: 'We guide you through due diligence and closing to ensure a smooth, successful transaction.',
    color: 'from-cyber-yellow to-neon-green'
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const Icon = step.icon;

  return (
    <div
      ref={elementRef}
      className={`relative flex items-start gap-4 md:gap-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Left vertical dot (mobile) */}
      <div className="md:hidden absolute left-0 top-6 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-electric-blue to-vivid-purple" />

      {/* Icon */}
      <div className="relative shrink-0 md:ml-3">
        <div
          className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} shadow-xl ring-2 ring-white/30 transition-transform duration-300 hover:scale-105`}
        >
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <div className="rounded-2xl bg-white/80 backdrop-blur-md ring-1 ring-black/5 p-5 sm:p-6 hover:shadow-xl hover:ring-electric-blue/20 transition-all duration-300">
          <span className="text-xs sm:text-sm font-bold text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full">
            Step {index + 1}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-navy mt-3 mb-2">
            {step.title}
          </h3>
          <p className="text-slate-gray text-base sm:text-lg leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HowWeWork() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="how-we-work" className="relative overflow-hidden py-24 sm:py-28 bg-gradient-to-b from-white via-off-white to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-electric-blue/15 blur-3xl rounded-full animate-float" />
        <div className="absolute top-48 -right-32 w-[400px] h-[400px] bg-vivid-purple/15 blur-3xl rounded-full animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-electric-blue/10 to-vivid-purple/10 border border-electric-blue/30 rounded-full mb-5">
            <CheckCircle className="w-4 h-4 text-electric-blue" />
            <span className="text-navy font-semibold text-sm sm:text-base">Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-navy mb-4">
            How We Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-gray max-w-2xl mx-auto leading-relaxed">
            A proven five-step process that delivers exceptional results at every stage
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[2.4rem] top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-electric-blue via-vivid-purple via-hot-pink via-bright-orange to-neon-green opacity-25" />
          <div className="space-y-10 sm:space-y-12">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
