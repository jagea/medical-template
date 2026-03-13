import { clinic } from "@/data/clinic";

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clinic.services.map((s) => (
            <div key={s.title} className="bg-sky-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
