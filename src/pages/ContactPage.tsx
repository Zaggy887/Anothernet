import { useState, FormEvent, useEffect } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';
import { ContactSubmission } from '../types';
import { useSearchParams } from 'react-router-dom';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // ✅ Calendly popup script loader
  useEffect(() => {
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const mandate = searchParams.get('mandate');
    if (mandate) {
      setFormData(prev => ({
        ...prev,
        message: `I would like more information about: ${decodeURIComponent(mandate)}\n\n`,
        submission_type: 'portfolio_inquiry',
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@netgen.com.au',
      color: 'from-electric-blue to-vivid-purple',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+61 (03) 9123 4567',
      color: 'from-vivid-purple to-hot-pink',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Level 4, Collins Square, Melbourne VIC 3000',
      color: 'from-hot-pink to-bright-orange',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-off-white to-white animate-fade-in-up">
      {/* ✅ Hero Section with Animation */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#00C6FF] via-[#6A11CB] to-[#2E008B] overflow-hidden animate-fade-in-up">
        {/* Background Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon */}
          <div className="inline-block mb-4 sm:mb-6 animate-fade-in-up">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto border-2 border-white/30 shadow-md">
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 animate-fade-in-up-delayed">
            Contact Us
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-2">
            Choose your preferred method of communication
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 sm:py-12 bg-white border-b-2 border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="flex items-center gap-4 p-4 sm:p-5 bg-gradient-to-br from-white to-off-white rounded-xl border-2 border-gray-100 hover:border-electric-blue/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-gray uppercase tracking-wide mb-0.5">{method.title}</p>
                    <p className="text-sm sm:text-base font-bold text-navy">{method.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 sm:py-16 bg-gradient-to-b from-white to-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-slate-gray max-w-2xl mx-auto">
              Send us a message and we'll respond within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden">
            {isSuccess ? (
              <div className="text-center py-12 sm:py-16 px-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-base sm:text-lg text-slate-gray mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="bg-gradient-to-r from-electric-blue to-vivid-purple text-white border-0"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10">
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-navy uppercase tracking-wide">
                        Full Name <span className="text-hot-pink">*</span>
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-electric-blue focus:ring-4 focus:ring-electric-blue/20 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-navy uppercase tracking-wide">
                        Email Address <span className="text-hot-pink">*</span>
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-electric-blue focus:ring-4 focus:ring-electric-blue/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wide">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company Inc."
                      className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-electric-blue focus:ring-4 focus:ring-electric-blue/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wide">
                      Message <span className="text-hot-pink">*</span>
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your needs, goals, and how we can help..."
                      rows={6}
                      className="w-full px-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-electric-blue focus:ring-4 focus:ring-electric-blue/20 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl font-semibold text-sm">
                      {error}
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink hover:from-vivid-purple hover:to-bright-orange text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg py-4 sm:py-5"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-center text-xs text-slate-gray pt-1">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ✅ Calendly Section */}
      <section id="schedule-meeting" className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Schedule a Meeting
          </h2>
          <p className="text-base sm:text-lg text-slate-gray mb-6 max-w-xl mx-auto">
            Book a free 30-minute Teams call for tailored advice and quick answers.
          </p>

          <button
            onClick={() => {
              window.Calendly.initPopupWidget({
                url: 'https://calendly.com/netgenbrokerage/consultation?hide_event_type_details=1&hide_landing_page_details=1&primary_color=0a2540&background_color=ffffff&text_color=0a2540',
              });
              return false;
            }}
            className="inline-flex items-center gap-2 bg-navy hover:bg-[#122c56] text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-10 4h10m-6 4h6M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Your Meeting
          </button>

          <p className="text-xs text-slate-gray mt-4">
            Available Monday–Friday, 9 AM–6 PM AEST
          </p>
        </div>
      </section>

      {/* ✅ Social Media Section */}
      <section className="py-12 sm:py-16 bg-off-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-6">
            Connect With Us
          </h2>
          <p className="text-base sm:text-lg text-slate-gray mb-8 max-w-2xl mx-auto">
            Follow us for updates, insights, and opportunities across our channels.
          </p>

          <div className="flex justify-center gap-6 sm:gap-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/netgen-brokerage/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-electric-blue to-vivid-purple flex items-center justify-center text-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.757 2.243 5 5 5h14c2.77 0 5-2.24 5-5v-14c0-2.76-2.23-5-5-5zM8.34 19.66h-3.08v-9.76h3.08v9.76zm-1.54-11.08c-.99 0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.8 1.8-1.8 1.8zm13.2 11.08h-3.08v-4.86c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.27-1.87 2.58v4.94h-3.08v-9.76h2.96v1.33h.04c.41-.78 1.42-1.62 2.93-1.62 3.14 0 3.72 2.07 3.72 4.76v5.29z"/>
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com/netgenbrokerage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-navy to-electric-blue flex items-center justify-center text-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-7 h-7">
                <path d="M714.163 519.284 1160.89 0h-105.71l-386.37 447.589L426.828 0H0l468.935 682.661L0 1226.59h105.71l408.36-472.205 261.588 472.205H1200L714.163 519.284zM154.23 80.943h191.834l699.703 1064.48h-191.83L154.23 80.943z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
