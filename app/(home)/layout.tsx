import NavbarComponent from "@/components/dashboard/NavbarComponent";
import Footer from "@/components/dashboard/Footer";
import React from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComponent />
      <main className="mx-20 mb-20 border rounded-md shadow-md">
        {children}
      </main>
      <Footer />
    </>
  );
}