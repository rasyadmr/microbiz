import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import bg from "@/public/hero.jpeg";

export default function Header() {
  return (
    <header className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        {/* <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" /> */}
      </div>
      <div className="relative">
        <div className="container py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <Image
              src={"/logo-transparent.png"}
              alt="MicroBiz"
              height={100}
              width={100}
              className="mx-auto"
            />
            <div className="mt-5 max-w-2xl">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                MicroBiz
              </h1>
            </div>
            <div className="mt-5 max-w-3xl">
              <p className="text-xl text-muted-foreground">
                Sebuah website yang melakukan data analisis secara otomatis dan pembuatan formulir pajak
                untuk Usaha mikro, kecil, dan menengah (UMKM).
              </p>
            </div>
            <div className="mt-8 gap-3 flex flex-col md:flex-row justify-center">
              <Link href={"/auth/login"}>
                <Button size={"lg"}>Mulai Sekarang</Button>
              </Link>
              <Link href={"/help"}>
                <Button size={"lg"} variant={"outline"}>
                  Panduan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function HeaderLite() {
  return (
    <div
      className="flex w-full h-[80vh] items-center"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[40%] ml-10 bg-white bg-opacity-50 shadow rounded-md backdrop-blur-lg p-5">
        <h1 className="text-5xl">MicroBiz</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          incidunt nihil aliquid, laudantium alias ipsum earum accusamus?
          Blanditiis similique fuga molestias quas harum quia odit quod eaque
          temporibus ea aliquam, laborum nisi dolorum cumque laboriosam minima
          nam animi debitis reprehenderit earum error rem sequi officia! Iusto
          minima voluptatibus, unde quo, saepe atque rerum expedita repellendus
          eveniet consectetur rem quis odio et quam numquam nihil molestias
          beatae delectus quibusdam culpa. Quo perspiciatis blanditiis qui
          similique expedita debitis optio suscipit labore ut. Corrupti sapiente
          commodi iste, amet veritatis explicabo, libero minus officia laborum
          deleniti similique, magnam molestias quos id nesciunt ipsum sunt?
        </p>
      </div>
    </div>
  );
}
