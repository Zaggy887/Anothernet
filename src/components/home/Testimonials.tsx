import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { supabase } from "../../lib/supabase";
import { Testimonial } from "../../types";
import { Link } from "react-router-dom";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  async function loadTestimonials() {
    try {
      setLoading(true);

      const fallbackTestimonials = [
        {
          id: "manual-1",
          content:
            "The team's professionalism and ability to deliver ahead of schedule exceeded our expectations. Highly recommend for any growth-focused business.",
          client_name: "Sophie Bennett",
          client_role: "Managing Director, Apex Partners",
          rating: 5,
        },
        {
          id: "manual-2",
          content:
            "Outstanding advisory throughout our Series A. Their network opened doors we couldn't access on our own, and the deal terms exceeded our targets.",
          client_name: "Marcus Chen",
          client_role: "CEO, TechVenture Solutions",
          rating: 5,
        },
        {
          id: "manual-3",
          content:
            "Invaluable guidance during our acquisition process. Their strategic insight and negotiation expertise helped us achieve a successful exit with maximum value.",
          client_name: "Jennifer Walsh",
          client_role: "Founder, Industrial Dynamics Group",
          rating: 5,
        },
      ];

      if (supabase) {
        const { data, error } = await supabase
          .from("testimonials")
          .select("*")
          .eq("featured", true)
          .order("created_at", { ascending: false })
          .limit(3);

        if (error) throw error;

        if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          setTestimonials(fallbackTestimonials);
        }
      } else {
        setTestimonials(fallbackTestimonials);
      }
    } catch (err) {
      console.error("Error loading testimonials:", err);
      setTestimonials([
        {
          id: "manual-1",
          content:
            "The team's professionalism and ability to deliver ahead of schedule exceeded our expectations. Highly recommend for any growth-focused business.",
          client_name: "Sophie Bennett",
          client_role: "Managing Director, Apex Partners",
          rating: 5,
        },
        {
          id: "manual-2",
          content:
            "Outstanding advisory throughout our Series A. Their network opened doors we couldn't access on our own, and the deal terms exceeded our targets.",
          client_name: "Marcus Chen",
          client_role: "CEO, TechVenture Solutions",
          rating: 5,
        },
        {
          id: "manual-3",
          content:
            "Invaluable guidance during our acquisition process. Their strategic insight and negotiation expertise helped us achieve a successful exit with maximum value.",
          client_name: "Jennifer Walsh",
          client_role: "Founder, Industrial Dynamics Group",
          rating: 5,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function formatClientRole(role: string) {
    const links: Record<string, string> = {
      "Apex Partners": "https://www.apexpartners.com",
      "TechVenture Solutions": "https://www.techventuresolutions.com",
      "Industrial Dynamics Group":
        "https://www.industrialdynamicsgroup.com",
    };

    for (const [company, url] of Object.entries(links)) {
      if (role.includes(company)) {
        const [titlePart] = role.split(company);
        return (
          <>
            {titlePart}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-blue font-semibold hover:text-vivid-purple transition-colors duration-300"
            >
              {company}
            </a>
          </>
        );
      }
    }
    return role;
  }

  return (
    <>
      {/* ✅ Testimonials Section (white background) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-gray max-w-2xl mx-auto">
              Real results from real partnerships
            </p>
          </div>

          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center py-10">
              <div className="w-10 h-10 border-4 border-electric-blue border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* ✅ Mobile Slider */}
          {!loading && (
            <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
              <div className="flex gap-4 pb-4">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="snap-center flex-shrink-0 w-[85vw]"
                  >
                    <Card
                      hover
                      className="flex flex-col animate-fade-in-up h-full shadow-md bg-white rounded-2xl"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Quote className="w-10 h-10 text-gold/30 mb-4" />
                      <p className="text-slate-gray leading-relaxed mb-6 flex-grow">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: testimonial.rating || 5 }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-gold text-gold"
                            />
                          )
                        )}
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-bold text-navy">
                          {testimonial.client_name}
                        </p>
                        <p className="text-sm text-slate-gray">
                          {formatClientRole(testimonial.client_role)}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300 opacity-70"
                  />
                ))}
              </div>
            </div>
          )}

          {/* ✅ Desktop Grid */}
          {!loading && (
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  hover
                  className="flex flex-col animate-fade-in-up bg-white shadow-md hover:shadow-lg rounded-2xl transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Quote className="w-10 h-10 text-gold/30 mb-4" />
                  <p className="text-slate-gray leading-relaxed mb-6 flex-grow">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating || 5 }).map(
                      (_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      )
                    )}
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-navy">
                      {testimonial.client_name}
                    </p>
                    <p className="text-sm text-slate-gray">
                      {formatClientRole(testimonial.client_role)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ✅ Full-Width CTA BELOW (no white gap) */}
 <section className="relative w-full py-20 sm:py-28 bg-[linear-gradient(135deg,_#00c6ff_0%,_#6a11cb_35%,_#9333ea_65%,_#ff3cac_100%)]">
  {/* Glow overlay */}
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.12),transparent_60%)]" />

  <div className="relative text-center px-6 max-w-3xl mx-auto">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
     Contact Our Team
    </h2>
    <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
   We respond within 24 hours or book a complimentary 30-minute consultation with one of our experts.
    </p>

    <Link to="/contact">
      <Button className="bg-white text-vivid-purple font-semibold text-lg px-10 py-5 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
       Book Now →
      </Button>
    </Link>
  </div>
</section>
    </>
  );
}
