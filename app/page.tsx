// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  // In Next.js 15, redirect to the /dashboard directly
  // App router doesn't do client-side redirects here
  redirect("/dashboard");
}