import { Button } from "@/components/ui/button";
import { social } from "@/lib/datas";
import Image from "next/image";

export default function Social() {
  return (
    <section id="social" className="mx-24">
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 text-end">
          <div className="max-w-2xl ms-auto my-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sosial media kami
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anda dapat melihat sosial media kami dengan meng-klik salah satu tombol dibawah.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3 sm:gap-y-16 xl:col-span-2"
          >
            {social.map((social) => (
              <li key={social.name}>
                <Button variant={"outline"} size={"lg"} className="w-full">
                  <Image src={social.icon} height={30} width={30} alt={social.name} className="mr-5" />
                  <div className="flex items-center gap-x-6">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {social.name}
                    </h3>
                  </div>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
