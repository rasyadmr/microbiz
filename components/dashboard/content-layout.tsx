import { Navbar } from "@/components/dashboard/navbar";
import Breadcumbs, { BreadcrumbType } from "./breadcrumbs";
import { Card, CardContent } from "../ui/card";

export function ContentLayout({
  title,
  children,
  breadcrumbs,
}: {
  title: string;
  children: React.ReactNode;
  breadcrumbs: BreadcrumbType[];
}) {
  return (
    <div>
      <Navbar title={title} />
      <div className="pt-8 pb-8 px-4 sm:px-8">
        <Breadcumbs breadcrumbs={breadcrumbs} />
        <Card className="rounded-lg border-none mt-6">
          <CardContent className="p-6">{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
