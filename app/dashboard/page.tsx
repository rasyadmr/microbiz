import { ContentLayout } from "@/components/dashboard/content-layout";
import { Button } from "@/components/ui/button";
import { ChartArea, FileText } from "lucide-react";
import Link from "next/link";
import Commits from "./commits";

const breadcrumbList = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "Dashboard",
  },
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

      <Commits />
    </ContentLayout>
  );
}
