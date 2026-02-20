"use client";

import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { storeCookie } from "@/actions/handleCookies";
import { setCookie as setClientCookie } from "@/actions/clientCookie";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  useEffect(() => {
    // If token is passed in query params (?amalajeun_token=...), store it in a client cookie and remove it from the URL
    const storeTokenFromQuery = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (token) {
          setClientCookie("r3sonance_token", token, {
            maxAge: 3600,
            path: "/",
          });

          router.replace("/dashboard");
        }
      } catch (e) {
        // ignore in non-browser environments
      }
    };

    storeTokenFromQuery();
  }, [router]);
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Features />
      <Footer />
    </main>
  );
}
