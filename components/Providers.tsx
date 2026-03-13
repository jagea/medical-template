import { clinic } from "@/data/clinic";
import { CalendarDays, BadgeCheck } from "lucide-react";

export default function Providers() {
  return (
    <section id="providers" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            Experienced Internal Medicine Providers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clinic.providers.map((provider, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Photo placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-56 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-white/60 flex items-center justify-center shadow-inner">
                  <svg viewBox="0 0 80 80" className="w-16 h-16 fill-blue-400">
                    <circle cx="40" cy="28" r="18" />
                    <path d="M10 72 Q10 52 40 52 Q70 52 70 72 Z" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <BadgeCheck size={16} className="text-blue-600" />
                  <span className="text-blue-700 text-xs font-semibold uppercase tracking-wide">
                    {provider.experience}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{provider.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{provider.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-semibold px-8 py-4 rounded-full transition"
          >
            <CalendarDays size={18} />
            Meet Our Providers
          </a>
        </div>
      </div>
    </section>
  );
}
