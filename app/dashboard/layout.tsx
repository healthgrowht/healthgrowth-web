"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { label: 'Dashboard', href: '/dashboard', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  )},
  { label: 'Pipeline', href: '/dashboard/leads', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
    </svg>
  )},
  { label: 'Contenido', href: '#', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ), soon: true },
  { label: 'Automatizaciones', href: '#', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ), soon: true },
  { label: 'Reportes', href: '#', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ), soon: true },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex text-white">
      {/* Sidebar */}
      <aside className={`${collapsed ? 'w-16' : 'w-60'} flex-shrink-0 bg-[#111118] border-r border-white/5 flex flex-col transition-all duration-200`}>
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-white/5 gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-black text-xs">HG</span>
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-white font-bold text-sm truncate">Health Growth</p>
              <p className="text-gray-500 text-[10px] truncate">CRM Operacional</p>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto text-gray-600 hover:text-gray-400 flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={collapsed ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 space-y-0.5 px-2">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group relative
                  ${active ? 'bg-indigo-600/20 text-indigo-400' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}
                  ${item.soon ? 'opacity-50 pointer-events-none' : ''}
                `}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="font-medium">{item.label}</span>
                    {item.soon && (
                      <span className="ml-auto text-[9px] bg-zinc-700 text-gray-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">pronto</span>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom: n8n + user */}
        <div className="border-t border-white/5 p-3 space-y-2">
          <a
            href="https://n8n.healthgrowth.cl"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-gray-600 hover:text-gray-400 hover:bg-white/5 transition-all"
          >
            <span className="w-4 h-4 bg-orange-500/20 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-orange-400 font-black text-[8px]">n8</span>
            </span>
            {!collapsed && <span>n8n Workflows</span>}
          </a>
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-7 h-7 rounded-full bg-indigo-700 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-[10px]">LC</span>
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-gray-300 text-xs font-medium truncate">Carlos V.</p>
                <p className="text-gray-600 text-[10px] truncate">Administrador</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="h-16 border-b border-white/5 flex items-center px-6 gap-4 bg-[#0a0a0f]/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex-1">
            <p className="text-xs text-gray-600 font-mono">HEALTH GROWTH — OPERADOR DIGITAL</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wide">n8n activo</span>
            </div>
            <Link
              href="/"
              className="text-xs text-gray-600 hover:text-gray-400 flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver web
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
