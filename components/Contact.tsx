import { clinic } from "@/data/clinic";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 bg-sky-50">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Contacto</h2>
        <p className="text-center text-gray-500 mb-8">
          {clinic.phone} &nbsp;·&nbsp; {clinic.email}
        </p>
        <form className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
          <input
            type="email"
            placeholder="Tu email"
            className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
          <textarea
            rows={4}
            placeholder="¿En qué podemos ayudarte?"
            className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-300 resize-none"
          />
          <button
            type="submit"
            className="bg-sky-600 text-white font-semibold py-3 rounded-lg hover:bg-sky-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
