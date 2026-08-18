"use client";
import { motion } from 'framer-motion';

const pillars = [
  {
    label: "Misión",
    icon: "◎",
    content:
      "Ayudar a PYMEs y negocios de servicios a ordenar su atención, mejorar su presencia digital, automatizar procesos comerciales y convertir consultas en oportunidades reales — mediante tecnología simple, acompañamiento práctico e inteligencia aplicada.",
    color: "from-blue-500/20 to-blue-600/10",
    accent: "border-blue-500/30",
    tag: "text-blue-400",
  },
  {
    label: "Visión",
    icon: "◈",
    content:
      "Ser el ecosistema chileno de modernización empresarial para PYMEs — integrando automatización, IA, CRM, contenido, datos y gestión comercial en soluciones accesibles, escalables y fáciles de implementar.",
    color: "from-indigo-500/20 to-indigo-600/10",
    accent: "border-indigo-500/30",
    tag: "text-indigo-400",
  },
  {
    label: "Propósito",
    icon: "◇",
    content:
      "Reducir la brecha digital de pequeños negocios — entregándoles herramientas concretas para vender mejor, responder más rápido, organizar clientes y crecer con tecnología sin depender de sistemas complejos o inaccesibles.",
    color: "from-purple-500/20 to-purple-600/10",
    accent: "border-purple-500/30",
    tag: "text-purple-400",
  },
];

export default function Mission() {
  return (
    <section
      id="mision"
      className="py-32 px-6 bg-gradient-to-b from-black via-black to-black border-b border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-4 block">
            Nuestro Propósito
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            El{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Por Qué
            </span>{" "}
            Detrás de Health Growth
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Creemos que todo negocio, por pequeño que sea, merece operar con orden, tecnología y
            sistemas que funcionen. Primero claridad, después escala.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >
              <div
                className={`relative p-8 rounded-[32px] bg-gradient-to-br ${p.color} border border-white/10 hover:${p.accent} transition-all duration-500 overflow-hidden h-full`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/10 to-transparent -z-10" />

                <div className={`text-3xl font-light mb-6 ${p.tag}`}>{p.icon}</div>

                <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${p.tag} mb-2 block`}>
                  {p.label}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {p.label === "Misión"
                    ? "Lo que hacemos"
                    : p.label === "Visión"
                    ? "A dónde vamos"
                    : "Por qué existimos"}
                </h3>

                <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                  {p.content}
                </p>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[32px] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-blue-500/5 text-center"
        >
          <p className="text-xl md:text-2xl font-light text-white mb-6 leading-relaxed max-w-3xl mx-auto">
            &ldquo;No es solo tecnología. Es el{" "}
            <span className="font-semibold text-indigo-300">compromiso</span> de transformar la
            realidad operativa de tu negocio — haciéndola más simple, más rápida, más
            confiable.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              Health Growth SpA · Chile
            </p>
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
