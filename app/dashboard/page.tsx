import { ContentLayout } from "@/components/dashboard/content-layout";

const breadcrumbList = [
  {
    label: "Home",
    link: "/home"
  },
  {
    label: "Dashboard"
  }
]

export default function Page() {
  return (
    <ContentLayout title="Dashboard" breadcrumbs={breadcrumbList}>
      <p>Hello</p>
    </ContentLayout>
  );
}
