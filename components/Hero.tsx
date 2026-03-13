import { clinic } from "@/data/clinic";
import { CalendarDays, Phone, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-300 -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-blue-600/50 text-blue-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-500/30">
            Primary Care · Internal Medicine · Rhode Island
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {clinic.headline}
          </h1>

          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            {clinic.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contacto"
              className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition shadow-lg text-base"
            >
              <CalendarDays size={18} />
              {clinic.cta}
            </a>
            <a
              href={`tel:${clinic.phone}`}
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition text-base"
            >
              <Phone size={18} />
              {clinic.ctaSecondary}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-blue-100 text-sm">
            {["Same-week appointments", "Most insurance accepted", "Accepting new patients"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-blue-300 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Image placeholder */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600/30 to-blue-900/50 border border-white/10 flex flex-col items-center justify-end p-8">
            {/* Doctor silhouette */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg viewBox="0 0 200 300" className="w-56 h-auto fill-white">
                <circle cx="100" cy="60" r="40" />
                <path d="M40 160 Q40 120 100 120 Q160 120 160 160 L170 300 H30 Z" />
                <rect x="70" y="145" width="60" height="10" rx="5" fill="white" opacity="0.6" />
                <circle cx="85" cy="175" r="8" />
                <circle cx="115" cy="175" r="8" />
                <path d="M85 183 Q100 195 115 183" stroke="white" strokeWidth="3" fill="none" />
              </svg>
            </div>

            <div className="relative z-10 bg-white/90 backdrop-blur rounded-2xl p-5 w-full shadow-xl">
              <p className="text-blue-800 font-bold text-sm mb-1">Professional Doctor Photo</p>
              <p className="text-gray-500 text-xs">Replace with a high-quality stock photo of a doctor or patient consultation</p>
              <div className="mt-3 flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-600 text-xs ml-1 mt-0.5">4.8 · Rated by patients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
