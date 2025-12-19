import { useState, useRef, useEffect } from 'react';
import { Users, Target, Award, TrendingUp, Zap, Heart, Briefcase, Globe, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/Card';

export function AboutPage() {
  const [currentTeamMember, setCurrentTeamMember] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const teamScrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by the deals we close and the value we create for our clients.',
      color: 'from-electric-blue to-vivid-purple'
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'Time is money in business. We move fast to capitalize on opportunities when they arise.',
      color: 'from-vivid-purple to-hot-pink'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting relationships based on trust and results.',
      color: 'from-hot-pink to-bright-orange'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We bring deep expertise and high standards to every engagement, every time.',
      color: 'from-bright-orange to-cyber-yellow'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Cleary',
      role: 'Co-Founder & Managing Partner',
      bio: 'Sarah brings 15+ years of investment banking experience from Goldman Sachs and Morgan Stanley. She has led over $5B in M&A transactions across technology, healthcare, and fintech sectors. Her extensive network of institutional investors and strategic acquirers has been instrumental in closing complex deals.',
      expertise: ['Capital Markets', 'M&A Strategy', 'Investor Relations', 'Deal Structuring'],
      education: 'MBA, Harvard Business School | BA Economics, Stanford University',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2',
      linkedin: '#',
      email: 'sarah.chen@netgen.com'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Co-Founder & Head of Strategic Partnerships',
      bio: 'Michael spent 12 years in corporate development at Microsoft and Amazon, where he orchestrated strategic partnerships and market entry initiatives across 25+ countries. His deep understanding of global markets and partnership dynamics has enabled clients to expand internationally with unprecedented speed.',
      expertise: ['Business Development', 'Global Expansion', 'Strategic Alliances', 'Market Entry'],
      education: 'MBA, Wharton School | BS Engineering, MIT',
      image: 'https://images.pexels.com/photos/23885849/pexels-photo-23885849.jpeg?_gl=1*5r5x9j*_ga*MTc5NDk0NTcyLjE3NjEzMDU2Mzg.*_ga_8JE65Q40S6*czE3NjE0MjE5NzUkbzMkZzEkdDE3NjE0MjI2NTAkajU5JGwwJGgw.',
      linkedin: '#',
      email: 'michael.rodriguez@netgen.com'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Company Founded', description: 'Launched with a vision to modernize brokerage services' },
    { year: '2019', event: 'First $100M Raised', description: 'Helped Series A startup secure landmark funding round' },
    { year: '2020', event: 'International Expansion', description: 'Opened offices in London and Singapore' },
    { year: '2021', event: '$1B Milestone', description: 'Surpassed $1 billion in total capital raised for clients' },
    { year: '2022', event: '100+ Deals Closed', description: 'Celebrated 100th successful transaction' },
    { year: '2023', event: 'Strategic Partnerships', description: 'Launched dedicated partnerships division' },
    { year: '2024', event: '$2.5B+ Impact', description: 'Exceeded $2.5 billion in cumulative deal value' }
  ];

  const stats = [
    { number: '200+', label: 'Deals Closed', icon: TrendingUp },
    { number: '$2.5B+', label: 'Capital Raised', icon: Award },
    { number: '95%', label: 'Success Rate', icon: Target },
    { number: '50+', label: 'Active Clients', icon: Users }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && currentTeamMember < teamMembers.length - 1) {
        setCurrentTeamMember(prev => prev + 1);
      } else if (swipeDistance < 0 && currentTeamMember > 0) {
        setCurrentTeamMember(prev => prev - 1);
      }
    }
  };

  const navigateTeamMember = (direction: 'prev' | 'next') => {
    if (direction === 'next' && currentTeamMember < teamMembers.length - 1) {
      setCurrentTeamMember(prev => prev + 1);
    } else if (direction === 'prev' && currentTeamMember > 0) {
      setCurrentTeamMember(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-electric-blue via-vivid-purple to-hot-pink overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            About netgen
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up-delayed leading-relaxed px-4">
            We're a modern brokerage firm that gets deals done. Fast, efficient, and results-driven.
          </p>
        </div>
      </section>

      {/* Who We Are Section - BACKGROUND: White */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-gray leading-relaxed">
                <p>
                  netgen brokerage is a next-generation brokerage firm specializing in capital raising, M&A advisory, strategic partnerships, and market entry services. We combine deep industry expertise with an extensive network to deliver results that matter.
                </p>
                <p>
                  Founded on the principle that "deals move when people do," we take a proactive, hands-on approach to every engagement. We don't just facilitate connections—we actively drive deals to completion.
                </p>
                <p>
                  Our team consists of experienced professionals from investment banking, private equity, corporate development, and consulting backgrounds. We understand both the art and science of dealmaking.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 animate-slide-in-right">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="text-center p-4 sm:p-6 lg:p-8 border-4 border-transparent hover:border-electric-blue transition-all duration-300 touch-manipulation"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-electric-blue mx-auto mb-3 sm:mb-4" />
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-electric-blue to-vivid-purple bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm sm:text-base text-slate-gray font-semibold">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOVED: Our Journey Section - Now directly under Who We Are - BACKGROUND: Off-White */}
      <section className="py-16 sm:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              From startup to industry leader - building the future of brokerage services
            </p>
          </div>

          {/* Enhanced Timeline with Visual Line */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Timeline Line - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-electric-blue via-vivid-purple to-hot-pink"></div>

            {/* Mobile Timeline Line - Visible on mobile only */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-vivid-purple to-hot-pink"></div>

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-row lg:flex-row items-start lg:items-center gap-4 sm:gap-8 animate-fade-in-up ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Mobile Timeline Dot */}
                  <div className="lg:hidden absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-full border-4 border-off-white z-10"></div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <Card className="inline-block w-full lg:w-auto p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 lg:border-l-0 border-electric-blue">
                      <div className="flex items-center gap-3 mb-3 lg:justify-end" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                        <Globe className="w-5 h-5 text-electric-blue" />
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-electric-blue to-vivid-purple bg-clip-text text-transparent">
                          {milestone.year}
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-base text-slate-gray">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <div className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-full flex-shrink-0 items-center justify-center shadow-lg border-4 border-off-white z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  {/* OUR VALUES SECTION */}
<section className="py-16 sm:py-20 lg:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
        Our Values
      </h2>
      <p className="text-lg sm:text-xl text-slate-gray max-w-2xl mx-auto px-4">
        The principles that guide everything we do
      </p>
    </div>

    {/* ✅ Desktop Grid (unchanged, 2x2 layout) */}
    <div className="hidden md:grid grid-cols-2 gap-8 place-items-center">
      {values.map((value, index) => (
        <Card
          key={value.title}
          hover
          className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-electric-blue max-w-md w-full text-center"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div
            className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md`}
          >
            <value.icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">
            {value.title}
          </h3>
          <p className="text-base sm:text-lg text-slate-gray leading-relaxed">
            {value.description}
          </p>
        </Card>
      ))}
    </div>

    {/* ✅ Mobile Horizontal Swipe (identical to Services layout) */}
    <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
      <div className="flex gap-4 pb-4">
        {values.map((value, index) => (
          <div key={value.title} className="snap-center flex-shrink-0 w-[85vw]">
            <Card className="border-l-4 border-electric-blue bg-white shadow-lg rounded-2xl transition-all hover:shadow-xl">
              <div className="p-6 text-center">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Scroll Dots (centered) */}
      <div className="flex justify-center gap-2 mt-2">
        {values.map((_, i) => (
          <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Our Mission Section - BACKGROUND: Gradient (provides strong visual break) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-navy via-vivid-purple to-electric-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
              To empower businesses with the capital, partnerships, and strategic guidance they need to achieve extraordinary growth. We believe that with the right connections and expertise, anything is possible.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section - BACKGROUND: Off-White */}
      <section className="py-16 sm:py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Why Work With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div className="p-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl sm:text-3xl font-bold">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">Proven Track Record</h3>
              <p className="text-base text-slate-gray">
                200+ successful deals across multiple industries and sectors
              </p>
            </div>

            <div className="p-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-vivid-purple to-hot-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl sm:text-3xl font-bold">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">Extensive Network</h3>
              <p className="text-base text-slate-gray">
                Direct access to investors, corporates, and strategic partners globally
              </p>
            </div>

            <div className="p-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-hot-pink to-bright-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl sm:text-3xl font-bold">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">Hands-On Approach</h3>
              <p className="text-base text-slate-gray">
                We don't just introduce you—we actively drive deals to completion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Leadership Team Section - BACKGROUND: White - WITH MOBILE SWIPE FUNCTIONALITY */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              Industry veterans with a proven track record of delivering exceptional results
            </p>
          </div>

          {/* Mobile Swipe Container (< lg screens) */}
          <div className="lg:hidden relative">
            <div
              ref={teamScrollRef}
              className="overflow-hidden touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentTeamMember * 100}%)`
                }}
              >
                {teamMembers.map((member, index) => (
                  <div
                    key={member.name}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <Card hover className="overflow-hidden h-full">
                      <div className="flex flex-col gap-6">
                        <div className="flex-shrink-0">
                       <div className="relative w-full h-64 overflow-hidden rounded-lg">
  <img
    src={member.image}
    alt={`${member.name} - ${member.role}`}
className={`w-full h-80 sm:h-64 object-cover object-center transition-transform duration-500 hover:scale-105`}
    loading="lazy"
    srcSet={`${member.image}&w=400 400w, ${member.image}&w=800 800w`}
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
</div>
                        </div>

                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-navy mb-2">
                              {member.name}
                            </h3>
                            <p className="text-base font-semibold text-electric-blue mb-3">
                              {member.role}
                            </p>
                            <p className="text-base text-slate-gray leading-relaxed mb-4">
                              {member.bio}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-bold text-navy mb-2 uppercase tracking-wide">
                              Expertise
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {member.expertise.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 bg-gradient-to-r from-electric-blue/10 to-vivid-purple/10 text-navy text-sm font-medium rounded-full border border-electric-blue/20"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="border-t border-slate-gray/20 pt-4">
                            <p className="text-sm text-slate-gray mb-3">
                              <Briefcase className="inline w-4 h-4 mr-2" />
                              {member.education}
                            </p>
                            <div className="flex gap-4">
                              <a
                                href={member.linkedin}
                                className="flex items-center gap-2 text-sm font-semibold text-electric-blue hover:text-vivid-purple transition-colors duration-300"
                                aria-label={`${member.name}'s LinkedIn profile`}
                              >
                                <Linkedin className="w-5 h-5" />
                                <span>LinkedIn</span>
                              </a>
                              <a
                                href={`mailto:${member.email}`}
                                className="flex items-center gap-2 text-sm font-semibold text-electric-blue hover:text-vivid-purple transition-colors duration-300"
                                aria-label={`Email ${member.name}`}
                              >
                                <Mail className="w-5 h-5" />
                                <span>Email</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => navigateTeamMember('prev')}
                disabled={currentTeamMember === 0}
                className="w-12 h-12 rounded-full bg-electric-blue text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-vivid-purple transition-all duration-300 touch-manipulation shadow-lg"
                aria-label="Previous team member"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTeamMember(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTeamMember === index
                        ? 'bg-electric-blue w-8'
                        : 'bg-slate-gray/30'
                    }`}
                    aria-label={`Go to team member ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => navigateTeamMember('next')}
                disabled={currentTeamMember === teamMembers.length - 1}
                className="w-12 h-12 rounded-full bg-electric-blue text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-vivid-purple transition-all duration-300 touch-manipulation shadow-lg"
                aria-label="Next team member"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Swipe Hint */}
            <p className="text-center text-sm text-slate-gray mt-4">
              Swipe to view other team members
            </p>
          </div>

          {/* Desktop Grid Layout (lg+ screens) - NO SWIPE */}
          <div className="hidden lg:grid grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                hover
                className="overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-full sm:w-48 h-64 sm:h-full overflow-hidden rounded-lg">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        srcSet={`${member.image}&w=400 400w, $ {member.image}&w=800 800w`}
                        sizes="384px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-2">
                        {member.name}
                      </h3>
                      <p className="text-base sm:text-lg font-semibold text-electric-blue mb-3">
                        {member.role}
                      </p>
                      <p className="text-base text-slate-gray leading-relaxed mb-4">
                        {member.bio}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-navy mb-2 uppercase tracking-wide">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-electric-blue/10 to-vivid-purple/10 text-navy text-sm font-medium rounded-full border border-electric-blue/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-gray/20 pt-4">
                      <p className="text-sm text-slate-gray mb-3">
                        <Briefcase className="inline w-4 h-4 mr-2" />
                        {member.education}
                      </p>
                      <div className="flex gap-4">
                        <a
                          href={member.linkedin}
                          className="flex items-center gap-2 text-sm font-semibold text-electric-blue hover:text-vivid-purple transition-colors duration-300"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="w-5 h-5" />
                          <span>LinkedIn</span>
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-sm font-semibold text-electric-blue hover:text-vivid-purple transition-colors duration-300"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-5 h-5" />
                          <span className="hidden sm:inline">Email</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
