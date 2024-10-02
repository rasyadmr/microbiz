import NavbarComponent from "@/components/dashboard/NavbarComponent";
import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComponent />
      <main className="px-20">
        {children}
      </main>
    </>
  );
}