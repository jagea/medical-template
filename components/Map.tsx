"use client";

import { useEffect } from "react";
import { clinic } from "@/data/clinic";

export default function Map() {
  useEffect(() => {
    // Leaflet solo funciona en el browser, lo importamos dinamicamente
    import("leaflet").then((L) => {
      // Evita inicializar dos veces en hot reload
      clinic.offices.forEach((office, i) => {
        const containerId = `map-${i}`;
        const container = document.getElementById(containerId) as HTMLElement & { _leaflet_id?: number };
        if (!container || container._leaflet_id) return;

        const map = L.map(containerId).setView([office.lat, office.lng], 15);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);
        L.marker([office.lat, office.lng])
          .addTo(map)
          .bindPopup(`<b>${office.name}</b><br>${office.address}`)
          .openPopup();
      });
    });
  }, []);

  return (
    <section id="ubicacion" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestras Sedes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {clinic.offices.map((office, i) => (
            <div key={office.name}>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{office.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{office.address}</p>
              <p className="text-sky-600 text-sm mb-3">{office.hours}</p>
              <div
                id={`map-${i}`}
                className="w-full h-64 rounded-2xl overflow-hidden shadow"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
