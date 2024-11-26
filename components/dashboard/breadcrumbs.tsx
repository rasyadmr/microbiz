import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Fragment } from "react";

export type BreadcrumbType = {
  link?: string;
  label: string;
};

export default function Breadcumbs({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbType[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
      {breadcrumbs.map((item, index) => {
          const breadcrumbKey = item.link ? item.link : item.label;

          return (
            <Fragment key={breadcrumbKey}>
              <BreadcrumbItem>
                {item.link ? (
                  <BreadcrumbLink asChild>
                    <Link href={item.link}>{item.label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
