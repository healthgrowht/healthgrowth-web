export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <section className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          Health Growth Pro
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Presencia digital profesional para clínicas, centros médicos y profesionales de la salud.
        </p>

        <a
          href="https://wa.me/56951017947?text=Hola%20quiero%20mejorar%20mi%20presencia%20digital"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-xl transition"
        >
          Contactar por WhatsApp
        </a>
      </section>

      <section className="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Más visibilidad</h2>
          <p className="text-gray-400">
            Perfil optimizado y estructurado para atraer más pacientes.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Orden digital</h2>
          <p className="text-gray-400">
            WhatsApp organizado, mensajes claros y estructura profesional.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Contenido estratégico</h2>
          <p className="text-gray-400">
            Publicaciones alineadas a tu rubro que convierten.
          </p>
        </div>
      </section>

    </main>
  );
}