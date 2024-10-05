import React from "react";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import Header from "./header";
import About from "./about";
import Team from "./team";
import Social from "./social";

export const metadata: Metadata = {
  title: "Home",
};

export default function Page() {
  return (
    <div>
      <Header />
      <About />
      <Team />
      <Social />
    </div>
  );
}
