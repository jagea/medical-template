"use client";

import { useEffect } from "react";
import { clinic } from "@/data/clinic";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Locations() {
  useEffect(() => {
    import("leaflet").then((L) => {
      clinic.offices.forEach((office, i) => {
        const containerId = `map-${i}`;
        const container = document.getElementById(containerId) as HTMLElement & { _leaflet_id?: number };
        if (!container || container._leaflet_id) return;

        const map = L.map(containerId).setView([office.lat, office.lng], 15);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        const icon = L.divIcon({
          html: `<div style="background:#1d4ed8;width:16px;height:16px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
          className: "",
        });

        L.marker([office.lat, office.lng], { icon })
          .addTo(map)
          .bindPopup(`<b>${office.name}</b><br>${office.address}<br>${office.city}`)
          .openPopup();
      });
    });
  }, []);

  return (
    <section id="ubicacion" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Find Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            Convenient Care in Two Rhode Island Locations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clinic.offices.map((office, i) => (
            <div
              key={office.name}
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div id={`map-${i}`} className="w-full h-52" />
              <div className="p-7">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-gray-600 text-sm">
                      {office.address}<br />{office.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-blue-600 shrink-0" />
                    <span className="text-gray-600 text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-blue-600 shrink-0" />
                    <span className="text-gray-600 text-sm">{office.hours}</span>
                  </div>
                </div>
                <a
                  href="#contacto"
                  className="mt-6 w-full flex justify-center items-center bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-3 rounded-xl transition"
                >
                  Request Appointment at This Location
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
