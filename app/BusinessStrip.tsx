"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const businesses = [
  {
    id: "barberia",
    label: "Barbería",
    tagline: "Presencia profesional y agenda sin cruces de horario.",
    photo: "/images/business/barberia.jpg",
    bar: "bg-amber-500",
    border: "border-amber-700/25",
    gradient: "from-amber-950/60 via-transparent",
  },
  {
    id: "grooming",
    label: "Peluquería Canina",
    tagline: "Clientes, mascotas e historial organizado en un solo lugar.",
    photo: "/images/business/grooming.jpg",
    bar: "bg-teal-400",
    border: "border-teal-700/25",
    gradient: "from-teal-950/60 via-transparent",
  },
  {
    id: "estetica",
    label: "Estética",
    tagline: "Imagen digital y agenda que convierten seguidores en clientes.",
    photo: "/images/business/estetica.jpg",
    bar: "bg-rose-400",
    border: "border-rose-700/25",
    gradient: "from-rose-950/60 via-transparent",
  },
  {
    id: "profesional",
    label: "Profesionales",
    tagline: "Presencia seria y clientes bien registrados desde el primer día.",
    photo: "/images/business/profesional.jpg",
    bar: "bg-blue-400",
    border: "border-blue-700/25",
    gradient: "from-blue-950/60 via-transparent",
  },
  {
    id: "pyme",
    label: "PYME / Comercio",
    tagline: "De la consulta por WhatsApp al cliente que vuelve a comprar.",
    photo: "/images/business/comercio.jpg",
    bar: "bg-violet-400",
    border: "border-violet-700/25",
    gradient: "from-violet-950/60 via-transparent",
  },
];

export default function BusinessStrip() {
  return (
    <section className="py-12 md:py-16 px-6 bg-[#071428] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 md:mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-600 mb-1.5">
            Trabajamos con
          </p>
          <h2 className="text-xl md:text-2xl font-extrabold text-white">
            Negocios de servicios como el tuyo
          </h2>
        </div>

        {/* Cards */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {businesses.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className={`relative flex-shrink-0 w-[200px] md:w-auto rounded-[20px] border ${b.border} overflow-hidden bg-[#060d1c]`}
            >
              {/* Top accent bar */}
              <div className={`h-[3px] w-full ${b.bar}`} />

              {/* Photo */}
              <div className="relative h-[140px] overflow-hidden">
                <Image
                  src={b.photo}
                  alt={b.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, 20vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${b.gradient} to-transparent`} />
              </div>

              {/* Text */}
              <div className="px-4 pb-5 pt-3">
                <p className="text-white font-extrabold text-[15px] leading-tight mb-1.5">
                  {b.label}
                </p>
                <p className="text-gray-500 text-[12px] leading-relaxed">
                  {b.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="md:hidden text-center text-gray-700 text-[11px] mt-3">← desliza →</p>
      </div>
    </section>
  );
}
