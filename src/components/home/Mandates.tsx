import { useEffect, useState } from "react";
import { ArrowRight, Briefcase, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { supabase } from "../../lib/supabase";
import { Mandate } from "../../types";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function MandateCard({ mandate, index }: { mandate: Mandate; index: number }) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const getStatusStyles = (status: string) => {
    switch ((status || "").toLowerCase()) {
      case "active":
        return "bg-neon-green/20 text-neon-green border-neon-green";
      case "pending":
        return "bg-[#FFD000]/20 text-[#FFD000] border-[#FFD000]";
      case "closed":
        return "bg-slate-gray/20 text-slate-gray border-slate-gray";
      default:
        return "bg-electric-blue/20 text-electric-blue border-electric-blue";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-electric-blue shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 h-full">
        {/* Top gradient line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink" />

        {/* Card body */}
        <div className="p-6 sm:p-7 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-electric-blue to-vivid-purple shadow-md">
              <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <span
              className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold border ${getStatusStyles(
                mandate.status
              )}`}
            >
              {mandate.status}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 leading-snug">
            {mandate.title}
          </h3>

          <div className="space-y-2.5 mb-5 text-sm sm:text-base">
            <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
              <span className="text-slate-gray font-medium">Deal Type</span>
              <span className="font-semibold text-navy">
                {mandate.deal_type}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
              <span className="text-slate-gray font-medium">Sector</span>
              <span className="font-semibold text-navy">{mandate.sector}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
              <span className="text-slate-gray font-medium">Deal Size</span>
              <span className="font-bold bg-gradient-to-r from-electric-blue to-vivid-purple bg-clip-text text-transparent">
                {mandate.deal_size}
              </span>
            </div>
          </div>

          <p className="text-slate-gray text-sm sm:text-base leading-relaxed mb-6 flex-grow">
            {mandate.description}
          </p>

          <Link
            to={`/contact?mandate=${encodeURIComponent(mandate.title)}`}
            className="block mt-auto"
          >
            <Button className="w-full py-3 bg-gradient-to-r from-electric-blue to-vivid-purple text-white border-0 hover:from-vivid-purple hover:to-hot-pink font-semibold shadow-md hover:shadow-lg transition-all text-sm sm:text-base rounded-lg">
              Request More Information
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export function Mandates() {
  const [mandates, setMandates] = useState<Mandate[]>([]);
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    loadMandates();
  }, []);

  async function loadMandates() {
    const fallback = {
      id: "manual-1",
      title: "SaaS Platform Seeking Series B",
      deal_type: "Capital Raising",
      sector: "Technology",
      deal_size: "$20M - $30M",
      status: "Active",
      description:
        "Fast-growing enterprise software company with $15M ARR seeking $25M Series B to accelerate product development and market expansion across APAC.",
    };

    if (supabase) {
      const { data } = await supabase
        .from("mandates")
        .select("*")
        .eq("featured", true)
        .order("created_at", { ascending: false })
        .limit(3);

      setMandates(data?.length ? [...data, fallback] : [fallback]);
    } else {
      setMandates([fallback]);
    }
  }

  return (
    <section
      id="mandates"
      className="relative py-24 sm:py-28 bg-gradient-to-b from-off-white via-white to-off-white overflow-hidden"
    >
      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 right-10 w-80 h-80 bg-vivid-purple/10 blur-3xl rounded-full animate-float" />
        <div className="absolute bottom-16 left-10 w-80 h-80 bg-electric-blue/10 blur-3xl rounded-full animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-vivid-purple/10 to-hot-pink/10 border border-vivid-purple/30 rounded-full mb-5">
            <TrendingUp className="w-4 h-4 text-vivid-purple" />
            <span className="text-navy font-semibold text-sm sm:text-base">
              Featured Deals
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Active Portfolio
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-electric-blue to-vivid-purple" />
            <CheckCircle className="w-5 h-5 text-neon-green" />
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-vivid-purple to-hot-pink" />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-gray max-w-2xl mx-auto leading-relaxed">
            Explore current opportunities to accelerate your growth strategy
          </p>
        </div>

        {/* ✅ Mobile horizontal swipe with dots */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 mb-8">
          <div className="flex gap-5 pb-5">
            {mandates.map((mandate, index) => (
              <div
                key={mandate.id}
                className="snap-center flex-shrink-0 w-[85vw]"
              >
                <MandateCard mandate={mandate} index={index} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {mandates.slice(0, 3).map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === 0
                    ? "bg-electric-blue opacity-100"
                    : "bg-gray-300 opacity-70"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mandates.map((mandate, index) => (
            <MandateCard key={mandate.id} mandate={mandate} index={index} />
          ))}
        </div>

        {/* Fallback */}
        {mandates.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-14 h-14 text-slate-gray/30 mx-auto mb-3" />
            <p className="text-base sm:text-lg text-slate-gray">
              No featured mandates available at this time
            </p>
          </div>
        )}

        <div className="text-center">
          <Link to="/portfolio">
            <Button className="px-8 py-3 bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink hover:from-vivid-purple hover:to-bright-orange text-white border-0 shadow-xl hover:shadow-electric-blue/40 transition-all duration-300 hover:scale-[1.03]">
              View Our Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
