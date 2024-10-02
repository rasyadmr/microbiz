import Particles from "@/components/ui/particles";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <main className="flex justify-center items-center min-h-screen">
    <Particles quantity={30} size={2} color="black" className="absolute inset-0 -z-10" refresh />
    <div>
      {children}
    </div>
  </main>
  )
}
