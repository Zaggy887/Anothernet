import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { TrustedCompany } from '../../types';
import { Building2 } from 'lucide-react';

export function TrustBar() {
  const [companies, setCompanies] = useState<TrustedCompany[]>([]);

  useEffect(() => {
    loadCompanies();
  }, []);

  async function loadCompanies() {
    const { data } = await supabase
      .from('trusted_companies')
      .select('*')
      .order('order_index');

    if (data) {
      // Duplicate for seamless loop
      setCompanies([...data, ...data]);
    }
  }

  return (
    <section className="bg-off-white py-10 overflow-hidden">
      <div className="relative">
        {/* marquee container */}
        <div className="flex gap-12 animate-marquee md:animate-marquee-slow">
          {companies.map((company, index) => (
            <div
              key={`${company.id}-${index}`}
              className="flex items-center gap-3 px-6 flex-shrink-0"
            >
              <Building2 className="w-7 h-7 text-slate-gray/50" />
              <span className="text-lg font-semibold text-slate-gray whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom animation speeds */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        /* Desktop slower */
        @media (min-width: 768px) {
          .animate-marquee-slow {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}
