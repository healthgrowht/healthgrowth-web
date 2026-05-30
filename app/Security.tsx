"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Security() {
  return (
    <motion.section 
      id="seguridad" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-32 px-6 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
              <h4 className="text-white font-bold mb-3">Seguridad de la Información</h4>
              <ul className="text-[11px] text-gray-500 space-y-2">
                <li>✓ Protección de datos y Confidencialidad</li>
                <li>✓ Gestión responsable de información</li>
                <li>✓ Resguardo documental y Accesos controlados</li>
                <li>✓ Buenas prácticas digitales</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
              <h4 className="text-white font-bold mb-3">Área Salud y Estética</h4>
              <ul className="text-[11px] text-gray-500 space-y-2">
                <li>✓ Respeto por la confidencialidad</li>
                <li>✓ Protección de información sensible</li>
                <li>✓ Gestión documental profesional</li>
                <li>✓ Cumplimiento ético de antecedentes</li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 sm:col-span-2">
              <h4 className="text-white font-bold mb-3">Continuidad Operativa</h4>
              <p className="text-xs text-gray-500">Implementamos una arquitectura escalable diseñada para que tu negocio crezca sobre una base tecnológica estable y segura.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 space-y-6"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 block">Seguridad Grado Crítico</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Tu información es <br /> tu activo más valioso
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            En Health Growth, no jugamos con los datos. Implementamos sistemas donde la seguridad y la disponibilidad son los pilares de la modernización.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-blue-500/50 to-transparent" />
          <p className="text-xs text-gray-600 font-mono tracking-tighter">ESTÁNDARES DE SEGURIDAD OPERACIONAL // PROTECCIÓN DE ACTIVOS DIGITALES</p>
        </motion.div>
      </div>
    </motion.section>
  );
}