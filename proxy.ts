import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// /dashboard y /dashboard/leads son herramientas internas de Carlos OS.
// En producción Vercel se bloquean y redirigen a la home.
// En desarrollo local y preview siguen accesibles normalmente.
export function proxy(request: NextRequest) {
  if (process.env.VERCEL_ENV === 'production') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
