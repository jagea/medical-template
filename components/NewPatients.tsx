import { clinic } from "@/data/clinic";
import { CalendarDays, CheckCircle } from "lucide-react";

export default function NewPatients() {
  const { newPatients } = clinic;

  return (
    <section id="nuevos-pacientes" className="py-20 px-6 bg-blue-800">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-blue-700 text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-600">
          Getting Started
        </span>

        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {newPatients.title}
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
          {newPatients.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {newPatients.steps.map((step) => (
            <div
              key={step}
              className="flex items-center gap-3 bg-blue-700/50 border border-blue-600/50 rounded-xl px-5 py-4 text-left"
            >
              <CheckCircle size={20} className="text-blue-300 shrink-0" />
              <span className="text-white text-sm font-medium">{step}</span>
            </div>
          ))}
        </div>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition shadow-lg text-base"
        >
          <CalendarDays size={18} />
          {newPatients.cta}
        </a>
      </div>
    </section>
  );
}
