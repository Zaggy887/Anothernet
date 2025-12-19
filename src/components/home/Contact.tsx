import { useState, FormEvent, useEffect } from 'react';
import { Send, CheckCircle, Mail, Calendar, Twitter, Instagram, Clock, Zap } from 'lucide-react';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';
import { ContactSubmission } from '../../types';
import { useSearchParams } from 'react-router-dom';

export function Contact() {
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

  useEffect(() => {
    const mandate = searchParams.get('mandate');
    if (mandate) {
      setFormData(prev => ({
        ...prev,
        message: `I would like more information about: ${decodeURIComponent(mandate)}\n\n`,
        submission_type: 'portfolio_inquiry'
      }));
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (supabase) {
        const { error: submitError } = await supabase
          .from('contact_submissions')
          .insert([formData]);

        if (submitError) throw submitError;
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-white via-off-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-navy mb-4">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-slate-gray max-w-2xl mx-auto">
            Ready to accelerate your next deal? Let's start the conversation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* Calendly Embed */}
          <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-electric-blue/20 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink"></div>
            <div className="p-8 sm:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-2xl flex items-center justify-center shadow-lg mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-navy mb-3">Schedule a Meeting</h3>
                <p className="text-slate-gray text-base mb-8">
                  Book a convenient time directly on our calendar for faster response.
                </p>
              </div>

              {/* Calendly Inline Embed */}
              <div className="relative w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://calendly.com/your-calendly-link?embed_domain=netgen-brokerage.com&embed_type=Inline"
                  title="Book a Meeting with Netgen"
                  className="w-full h-[700px] border-0"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="text-center text-xs text-slate-gray mt-4">
                <Clock className="w-3 h-3 inline mr-1" />
                Available Monday–Friday, 9am–6pm EST
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 hover:border-electric-blue/30 transition-all">
            {isSuccess ? (
              <div className="text-center py-16 px-6">
                <div className="w-20 h-20 bg-gradient-to-br from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                <p className="text-slate-gray mb-4">We'll get back to you within 24 hours.</p>
                <Button onClick={() => setIsSuccess(false)} className="bg-gradient-to-r from-electric-blue to-vivid-purple text-white">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="border-2 border-gray-200 focus:border-electric-blue focus:ring-4 focus:ring-electric-blue/20"
                  />
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    className="border-2 border-gray-200 focus:border-electric-blue focus:ring-4 focus:ring-electric-blue/20"
                  />
                </div>

                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                  className="border-2 border-gray-200 focus:border-electric-blue focus:ring-4 focus:ring-electric-blue/20"
                />

                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your needs..."
                  rows={5}
                  className="border-2 border-gray-200 focus:border-electric-blue focus:ring-4 focus:ring-electric-blue/20 resize-none"
                />

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl font-semibold text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-navy to-electric-blue text-white border-0 shadow-lg py-4 hover:scale-[1.02] transition-all"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-gradient-to-r from-navy via-electric-blue/5 to-navy rounded-2xl p-8 sm:p-12 border-2 border-navy/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy mb-3">Connect on Social Media</h3>
            <p className="text-slate-gray">Follow us for industry insights and updates</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-white rounded-xl border-2 border-gray-200 hover:border-electric-blue hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center group-hover:bg-electric-blue transition-all">
                <Twitter className="w-5 h-5 text-electric-blue group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-gray uppercase tracking-wide">Follow on</p>
                <p className="text-lg font-bold text-navy">Twitter</p>
              </div>
            </a>

            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-white rounded-xl border-2 border-gray-200 hover:border-hot-pink hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="w-10 h-10 bg-hot-pink/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-vivid-purple group-hover:to-hot-pink transition-all">
                <Instagram className="w-5 h-5 text-hot-pink group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-gray uppercase tracking-wide">Follow on</p>
                <p className="text-lg font-bold text-navy">Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
