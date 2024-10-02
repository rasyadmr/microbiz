import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import Particles from "@/components/ui/particles";
import React from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen px-5 lg:px-20">
        <div className="my-auto text-center">
          <Image
            src={"/logo-transparent.png"}
            alt="MicroBiz"
            width={400}
            height={600}
            className="mx-auto my-2"
          />
          <h1 className="text-4xl font-extrabold mt-2">Welcome to MicroBiz</h1>
          <p className="text-lg mb-4">
            An automated data analyst website for small and medium-sized
            enterprises
          </p>
          <Link href="/home">
            <RainbowButton>
              <LogInIcon className="me-2 h-4 w-4" /> Enter
            </RainbowButton>
          </Link>
        </div>
      </main>
      <Particles
        className="absolute overflow-hidden inset-0 -z-10"
        quantity={100}
        color="black"
      />
    </>
  );
}
