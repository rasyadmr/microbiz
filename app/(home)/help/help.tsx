import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { steps } from "@/lib/datas";
import Image from "next/image";

export default function Help() {
  return (
    <section id="social" className="mx-24">
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 text-end">
          <div className="my-5 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Panduan Penggunaan
            </h2>
            <p className="mb-10 text-lg leading-8 text-gray-600">
              Berikut merupakan panduan dalam menggunakan produk-produk kami
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-y-20">
          {steps.map((step, i) => {
            return (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-3xl text-center">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div>
                    {step.steps.map((step, index) => (
                      <div
                        key={index}
                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                      >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full animate-pulse bg-purple-500" />
                        <div className="space-y-1">
                          <p className="text-xl font-medium leading-none">
                            {step.title}
                          </p>
                          <p className="text-sm text-gray-600">{step.text}</p>
                          {step.image ? (
                            <Image
                              className="py-5"
                              src={step.image}
                              alt={step.title}
                              width={4000}
                              height={4000}
                            />
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
