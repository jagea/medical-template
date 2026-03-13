import { clinic } from "@/data/clinic";
import {
  Stethoscope, Activity, Moon, ShieldCheck, ClipboardList, CalendarDays,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope size={32} />,
  Activity: <Activity size={32} />,
  Moon: <Moon size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  ClipboardList: <ClipboardList size={32} />,
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            Comprehensive Internal Medicine Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinic.services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-blue-600 mb-5 group-hover:text-blue-700 transition-colors">
                {iconMap[s.icon]}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full transition shadow-md"
          >
            <CalendarDays size={18} />
            Request Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
