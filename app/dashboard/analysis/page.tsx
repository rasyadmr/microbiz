"use client";

import { ContentLayout } from "@/components/dashboard/content-layout";
import BarchartComponent from "@/components/dashboard/analysis/barchart";
import { AnalysisForm } from "./form";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

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
    label: "Analysis",
  },
];

export default function Page() {
  const [dataX, setDataX] = useState<string[] | null>(null);
  const [dataY, setDataY] = useState<string[] | null>(null);

  useEffect(() => {
    console.log("Test");
  }, [dataX, dataY]);
  
  return (
    <ContentLayout title="Analysis" breadcrumbs={breadcrumbList}>
      <h1 className="font-semibold text-2xl">Analisis Data</h1>
      <AnalysisForm setDataX={setDataX} setDataY={setDataY} />
      <Separator className="my-5" />
      <BarchartComponent dataX={dataX} dataY={dataY} />
    </ContentLayout>
  );
}
