import { clinic } from "@/data/clinic";
import Image from "next/image";

export default function Team() {
  return (
    <section id="equipo" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestro Equipo</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {clinic.team.map((member) => (
            <div key={member.name} className="text-center w-48">
              <div className="w-28 h-28 mx-auto rounded-full bg-sky-200 overflow-hidden mb-4 flex items-center justify-center">
                <span className="text-5xl">👤</span>
              </div>
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-sky-600">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
