"use client";
import React from 'react';
import Image from 'next/image';

export default function Roquito() {
  return (
    <section id="roquito" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-blue-500 mb-4 block">Historia Emocional</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Roquito: el origen de la confianza</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Roquito es el perro que inspiró el primer caso real de Health Growth. Su presencia nos recuerda que cada negocio se construye con cariño, cuidado y compromiso.
          </p>
          <div className="grid gap-4">
            <div className="rounded-3xl bg-zinc-900/30 border border-white/10 p-6">
              <h3 className="text-white font-bold mb-3">Propósito visible</h3>
              <p className="text-gray-500 text-sm leading-relaxed">No solo creamos sistemas digitales. Creamos experiencias para negocios que quieren conectar con confianza y cercanía.</p>
            </div>
            <div className="rounded-3xl bg-zinc-900/30 border border-white/10 p-6">
              <h3 className="text-white font-bold mb-3">Una marca con corazón</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Roquito representa la promesa de que tus clientes y sus mascotas se sentirán bienvenidos desde el primer mensaje.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900/40 shadow-2xl">
          <Image src="/images/roquito.svg" alt="Roquito" width={800} height={600} className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}
