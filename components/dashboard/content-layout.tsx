import { Navbar } from "@/components/dashboard/navbar";
import Breadcumbs, { BreadcrumbType } from "@/components/dashboard/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";
import ContentSkeleton from "@/components/dashboard/content-skeleton";
import NavbarSkeleton from "@/components/dashboard/navbar-skeleton";

export async function ContentLayout({
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
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar title={title} />
      </Suspense>
      <div className="pt-8 pb-8 px-4 sm:px-8">
        <Suspense fallback={<ContentSkeleton />}>
          <Breadcumbs breadcrumbs={breadcrumbs} />
          <Card className="rounded-lg border-none mt-6 w-full h-full">
            <CardContent className="p-6">{children}</CardContent>
          </Card>
        </Suspense>
      </div>
    </div>
  );
}
