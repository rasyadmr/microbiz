"use client";

import { ContentLayout } from "@/components/dashboard/content-layout";
import { AnalysisForm } from "./form";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { AreachartComponent } from "@/components/dashboard/analysis/areachart";
import { LinechartComponent } from "@/components/dashboard/analysis/linechart";
import BarchartComponent from "@/components/dashboard/analysis/barchart";

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

  return (
    <ContentLayout title="Analysis" breadcrumbs={breadcrumbList}>
      <h1 className="font-semibold text-2xl">Analisis Data</h1>
      <AnalysisForm setDataX={setDataX} setDataY={setDataY} />
      <Separator className="my-5" />
      <div className="grid grid-cols-1 gap-5">
        {!dataX || !dataY || dataX.length === 0 || dataY.length === 0 ? (
          <div>No data available for the chart</div>
        ) : (
          <>
            <LinechartComponent dataX={dataX} dataY={dataY} />
            <AreachartComponent dataX={dataX} dataY={dataY} />
            <BarchartComponent dataX={dataX} dataY={dataY} />
          </>
        )}
      </div>
    </ContentLayout>
  );
}
