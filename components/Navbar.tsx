import { clinic } from "@/data/clinic";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <span className="text-blue-800 font-bold text-xl leading-tight block">
            {clinic.shortName}
          </span>
          <span className="text-gray-400 text-xs tracking-wide uppercase">
            Internal Medicine
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">
          <a href="#servicios" className="hover:text-blue-700 transition">Services</a>
          <a href="#providers" className="hover:text-blue-700 transition">Providers</a>
          <a href="#nuevos-pacientes" className="hover:text-blue-700 transition">New Patients</a>
          <a href="#ubicacion" className="hover:text-blue-700 transition">Locations</a>
          <a href="#contacto" className="hover:text-blue-700 transition">Contact</a>
        </div>

        <a
          href="#contacto"
          className="hidden md:flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition shadow-sm"
        >
          <Phone size={14} />
          {clinic.phone}
        </a>
      </div>
    </nav>
  );
}
