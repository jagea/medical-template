import { clinic } from "@/data/clinic";
import { CalendarDays, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contacto" className="py-24 px-6 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-5">
          Schedule Your Appointment Today
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
          Contact our office to request an appointment with one of our experienced providers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-white text-blue-800 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition shadow-lg text-base"
          >
            <CalendarDays size={18} />
            Request Appointment
          </a>
          <a
            href={`tel:${clinic.phone}`}
            className="flex items-center justify-center gap-2 border-2 border-white/60 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition text-base"
          >
            <Phone size={18} />
            Call Now  {clinic.phone}
          </a>
        </div>

        <p className="text-blue-300 text-sm">
          Both offices open Mon–Fri · {clinic.offices[0].hours}
        </p>
      </div>
    </section>
  );
}
