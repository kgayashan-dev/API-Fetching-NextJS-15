// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // This is a placeholder for more advanced middleware
  // You could add API URL rewriting or additional security checks here

  return NextResponse.next();
}

// Optional: Configure which paths should use the middleware
export const config = {
  matcher: [
    // Add paths that should trigger the middleware
    "/dashboard/:path*",
  ],
};
