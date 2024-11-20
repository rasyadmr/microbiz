import { ContentLayout } from "@/components/dashboard/content-layout";
import { Button } from "@/components/ui/button";
import { ChartArea, FileText } from "lucide-react";
import Link from "next/link";

const breadcrumbList = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "Dashboard",
  },
];

const updates = [
  "Fix: Social Links & Consistent Text",
  "Fix: Dashboard Navigation Bar",
  "Add: Dashboard Content",
  "Version 0.1.1",
  "Add: Dashboard Loading Page",
  "Add: Dashboard pages",
  "Add: Dashboard Layout",
  "Fix: Register page",
  "Add: Authentication pages",
  "Fix: EsLint and Prettier",
];

export default function Page() {
  return (
    <ContentLayout title="Dashboard" breadcrumbs={breadcrumbList}>
      <div>
        <h1 className="text-2xl">Selamat datang kembali, User!</h1>
      </div>
      <div className="mt-5">
        <p className="text-gray-600">Apa yang anda ingin lakukan hari ini?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-2">
          <Button className="w-full" variant={"outline"} size={"lg"} asChild>
            <Link href="/dashboard/analysis">
              <ChartArea /> Analysis Data
            </Link>
          </Button>
          <Button className="w-full" variant={"outline"} size={"lg"} asChild>
            <Link href="/dashboard/tax">
              <FileText /> Formulir Pajak
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-gray-600">Perbaruan</p>
        <ul className="my-2 border rounded-md px-5 py-2">
          {updates.map((update, index) => (
            <li key={index} className="mb-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="ml-2">
                  <h4 className="text-sm text-gray-500">{update}</h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ContentLayout>
  );
}
