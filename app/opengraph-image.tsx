import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Health Growth SpA — Modernización y Crecimiento para PYMEs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #000000 0%, #0f0f1a 50%, #060618 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top-right glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 65%)',
          }}
        />
        {/* Bottom-left glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-80px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 65%)',
          }}
        />

        {/* Pill badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 20px',
            borderRadius: '50px',
            border: '1px solid rgba(99,102,241,0.4)',
            background: 'rgba(99,102,241,0.12)',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#818cf8',
            }}
          />
          <span style={{ color: '#a5b4fc', fontSize: '15px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Modernización Digital · Chile
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 900,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.05,
            maxWidth: '920px',
            marginBottom: '28px',
          }}
        >
          Ordenamos tu negocio{' '}
          <span style={{ color: '#818cf8' }}>para que venda mejor.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '22px',
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '680px',
            lineHeight: 1.5,
            marginBottom: '48px',
          }}
        >
          Presencia digital · Automatización · CRM para PYMEs chilenas
        </div>

        {/* Bottom row: brand + CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 28px',
              borderRadius: '50px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span style={{ color: '#e2e8f0', fontSize: '18px', fontWeight: 700 }}>Health Growth SpA</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 32px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #4f46e5, #2563eb)',
            }}
          >
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 800 }}>Evaluación Gratuita →</span>
          </div>
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '40px',
            color: '#334155',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.05em',
          }}
        >
          healthgrowth.cl
        </div>
      </div>
    ),
    { ...size }
  );
}
