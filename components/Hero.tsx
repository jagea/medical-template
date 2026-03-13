import { clinic } from "@/data/clinic";

export default function Hero() {
  return (
    <section className="bg-sky-600 text-white py-24 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">{clinic.name}</h1>
      <p className="text-xl mb-8 opacity-90">{clinic.tagline}</p>
      <a
        href="#contacto"
        className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-full hover:bg-sky-50 transition"
      >
        {clinic.cta}
      </a>
    </section>
  );
}
