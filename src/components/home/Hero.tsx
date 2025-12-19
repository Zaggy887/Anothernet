import { useEffect, useState } from 'react';
import { ArrowRight, Zap, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Hero() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Play only once per browser session. Change to 'localStorage' for persistent skip.
    const done = sessionStorage.getItem('netgen:introPlayed');
    if (!done && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShowIntro(true);
      const t = setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem('netgen:introPlayed', '1');
      }, 1900); // total intro length
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-vivid-purple to-electric-blue">
      {/* ===== Intro overlay (first visit) ===== */}
      {showIntro && (
        <div className="fixed inset-0 z-50 intro-overlay">
          {/* gradient curtain sweep */}
          <div className="intro-beam" />
          {/* soft blur mask that eases out */}
          <div className="intro-blur" />
          {/* logo spark */}
          <div className="intro-spark">
            <div className="spark-icon">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      )}

      {/* grid texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

      {/* ambience blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-hot-pink/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vivid-purple/20 rounded-full blur-3xl" />
      </div>

      {/* floating badges */}
      <div className="absolute top-32 left-20 hidden lg:block">
        <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-vivid-purple rounded-2xl flex items-center justify-center animate-float shadow-2xl">
          <Zap className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 right-20 hidden lg:block">
        <div className="w-20 h-20 bg-gradient-to-br from-hot-pink to-bright-orange rounded-2xl flex items-center justify-center animate-float-delayed shadow-2xl">
          <Target className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center ${showIntro ? 'opacity-0' : 'animate-fade-in-up'}`}>
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 mb-8">
            <TrendingUp className="w-5 h-5 text-cyber-yellow" />
            <span className="text-white font-semibold"> Australia's #1 Brokerage Solutions</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-8 leading-tight">
            Brokerage that gets
            <span className="block bg-gradient-to-r from-cyber-yellow via-neon-green to-electric-blue bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              deals done
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-light">
            We connect capital, companies, and partnerships to unlock explosive growth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-vivid-purple hover:bg-off-white shadow-2xl hover:shadow-white/50 border-0 text-lg px-10 py-6"
              >
                Get Started
                <ArrowRight className="w-6 h-6" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-vivid-purple text-lg px-10 py-6"
              >
                Our Portfolio
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20 animate-fade-in-up-delayed">
          <div className="flex flex-wrap justify-center gap-4">
            {['$2.5B+ Raised', '200+ Deals', '95% Success Rate', '50+ Active Clients'].map((stat, index) => (
              <div
                key={stat}
                className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/20 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-white font-bold">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white to-transparent" />

      {/* local CSS */}
      <style>{`
        /* Intro overlay pieces */
        .intro-overlay {
          pointer-events: none;
        }
        .intro-beam {
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(60% 40% at 10% 50%, rgba(255,255,255,0.25), transparent 60%),
            linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.55) 50%, rgba(0,0,0,0) 100%);
          filter: blur(10px);
          transform: rotate(8deg) translateX(-35%);
          animation: beamSweep 1300ms cubic-bezier(.2,.7,.2,1) 120ms forwards, beamFade 400ms ease-out 1450ms forwards;
        }
        @keyframes beamSweep {
          0% { transform: rotate(8deg) translateX(-35%); opacity: 1; }
          100% { transform: rotate(8deg) translateX(35%); opacity: 1; }
        }
        @keyframes beamFade { to { opacity: 0; } }

        .intro-blur {
          position: absolute; inset: 0;
          backdrop-filter: blur(14px);
          background: radial-gradient(closest-corner at 50% 50%, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 60%, transparent 70%);
          animation: blurOut 900ms ease 1000ms forwards;
        }
        @keyframes blurOut { to { opacity: 0; backdrop-filter: blur(0px); } }

        .intro-spark {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          animation: sparkOut 500ms ease 1200ms forwards;
        }
        .spark-icon {
          width: 64px; height: 64px;
          display: grid; place-items: center;
          border-radius: 18px;
          background: linear-gradient(135deg, #5BB6FF, #9b5cff);
          box-shadow: 0 0 0 0 rgba(255,255,255,0.7), 0 12px 40px rgba(0,0,0,0.35);
          animation: sparkPop 550ms cubic-bezier(.2,1.2,.2,1) 100ms forwards;
        }
        @keyframes sparkPop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; box-shadow: 0 0 0 16px rgba(255,255,255,0.25), 0 12px 40px rgba(0,0,0,0.35); }
          100% { transform: scale(1); }
        }
        @keyframes sparkOut { to { opacity: 0; transform: translate(-50%, -50%) scale(0.92); } }

        /* Float & content entrances (you already had fade/scale) */
        @keyframes float {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-12px) }
        }
        .animate-float { animation: float 12s ease-in-out infinite; }
        .animate-float-delayed { animation: float 14s ease-in-out 1s infinite; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px) }
          to   { opacity: 1; transform: translateY(0) }
        }
        .animate-fade-in-up { animation: fadeUp 700ms cubic-bezier(.2,.7,.2,1) both; }
        .animate-fade-in-up-delayed { animation: fadeUp 800ms cubic-bezier(.2,.7,.2,1) .1s both; }

        @keyframes gradientShift { to { background-position: -200% 0; } }
        .animate-gradient-shift { animation: gradientShift 8s linear infinite; }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .intro-overlay, .intro-beam, .intro-blur, .intro-spark, .spark-icon {
            animation: none !important; opacity: 0 !important; visibility: hidden !important;
          }
          .animate-float, .animate-float-delayed, .animate-fade-in-up, .animate-fade-in-up-delayed, .animate-scale-in, .animate-gradient-shift {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
