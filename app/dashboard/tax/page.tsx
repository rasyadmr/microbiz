import { ContentLayout } from "@/components/dashboard/content-layout";
import { TaxForm } from "./form";

const breadcrumbList = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Tax",
  },
];

export default function Page() {
  return (
    <ContentLayout title="Tax" breadcrumbs={breadcrumbList}>
      <h1 className="font-semibold text-2xl">Laporan Pajak</h1>
      <TaxForm />
    </ContentLayout>
  );
}
