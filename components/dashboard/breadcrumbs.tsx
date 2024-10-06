import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

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
          if (!item.link) {
            return (
              <>
                <BreadcrumbItem key={index.toString().concat(item.label)}>
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                </BreadcrumbItem>
                {index !== breadcrumbs.length - 1 ? 
                <BreadcrumbSeparator /> : null}
              </>
            );
          } else {
            return (
              <>
                <BreadcrumbItem key={index.toString().concat(item.label)}>
                  <BreadcrumbLink asChild>
                    <Link href={item.link}>{item.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            );
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
