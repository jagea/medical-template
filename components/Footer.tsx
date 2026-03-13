import { clinic } from "@/data/clinic";
import { Phone, Mail } from "lucide-react";

const anchorMap: Record<string, string> = {
  Services: "#servicios",
  Providers: "#providers",
  "New Patients": "#nuevos-pacientes",
  Contact: "#contacto",
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-14 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-white font-bold text-lg mb-3">{clinic.name}</p>
          <p className="text-sm leading-relaxed">{clinic.footerSeo}</p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={`tel:${clinic.phone}`} className="flex items-center gap-2 hover:text-white transition">
              <Phone size={14} /> {clinic.phone}
            </a>
            <a href={`mailto:${clinic.email}`} className="flex items-center gap-2 hover:text-white transition">
              <Mail size={14} /> {clinic.email}
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {clinic.footerLinks.map((link) => (
              <li key={link}>
                <a
                  href={anchorMap[link] ?? "#"}
                  className="hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Our Locations</p>
          <div className="space-y-4 text-sm">
            {clinic.offices.map((office) => (
              <div key={office.name}>
                <p className="text-white font-medium">{office.name}</p>
                <p>{office.address}</p>
                <p>{office.city}</p>
                <p className="text-blue-400">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-gray-800 text-xs text-center text-gray-600">
        © {new Date().getFullYear()} {clinic.name}. All rights reserved.
      </div>
    </footer>
  );
}
