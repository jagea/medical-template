import { clinic } from "@/data/clinic";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-sky-600 font-bold text-lg">{clinic.name}</span>
        <div className="flex gap-6 text-sm text-gray-600 font-medium">
          <a href="#servicios" className="hover:text-sky-600 transition">Servicios</a>
          <a href="#equipo" className="hover:text-sky-600 transition">Equipo</a>
          <a href="#ubicacion" className="hover:text-sky-600 transition">Sedes</a>
          <a href="#contacto" className="hover:text-sky-600 transition">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
