import { ChartLine, FileText } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-24">
      <div className="container py-12 lg:py-16">
        <div className="mx-auto">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Produk Kami</h2>
              <p className="mt-3 text-muted-foreground">
                Sebuah aplikasi website yang memberikan fitur data analisis
                secara otomatis. Disamping itu, website kami dapat membuat
                formulir pambayaran pajak yang harus dilaporkan kepada kantor
                pajak. Hal tersebut dapat memudahkan UMKM atau pebisnis lain
                dalam membuat laporan pajak.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              <div className="flex flex-col md:flex-row">
                <div className="w-[50px] m-auto">
                  <ChartLine size={50} />
                </div>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Analisis Data secara Otomatis
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Salah satu produk kami dapat membuat insight dari data yang
                    anda berikan. Data tersebut akan ditunjukan menggunakan
                    chart atau plot dan memberikan kemudahan kepada pengguna
                    dalam mengambil keputusan.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-[50px] m-auto">
                  <FileText size={50} />
                </div>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Laporan Pajak
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Produk kami memberikan kemudahan kepada pengguna dalam
                    membuat laporan pajak untuk dilaporkan kepada Kantor Pajak.
                    Hal ini dapat mempersingkat waktu dan perhitungan secara
                    otomatis berdasarkan input dari pengguna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
