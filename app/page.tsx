import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-5 lg:px-20">
      <div className="my-auto text-center">
        <Image
          src={"/logo-transparent.png"}
          alt="MicroBiz"
          width={400}
          height={600}
          className="mx-auto my-2"
        />
        <h1 className="text-4xl font-extrabold my-1">Welcome to MicroBiz</h1>
        <p className="text-lg my-1">
          An automated data analyst website for small and medium-sized
          enterprises
        </p>
        <Link href="/auth/login">
          <Button size={"lg"} className="my-4">
            <LogInIcon className="me-2 h-4 w-4"/> Enter
          </Button>
        </Link>
      </div>
    </main>
  );
}
