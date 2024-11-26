"use client";

import { Bar, BarChart, CartesianGrid } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { translateData } from "@/lib/analysis";

const chartConfig = {
  varX: {
    label: "Variable X",
    color: "hsl(var(--chart-1))",
  },
  varY: {
    label: "Variable Y",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function BarchartComponent({
  dataX,
  dataY,
}: {
  dataX: string[] | null;
  dataY: string[] | null;
}) {
  const chartData = translateData(dataX, dataY);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          style={{ width: "100%", height: "400px" }}
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            {/* <XAxis tickLine={false} tickMargin={10} axisLine={false} /> */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="varX" fill="var(--color-varX)" radius={4} />
            <Bar dataKey="varY" fill="var(--color-varY)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">Prediction</div>
        <div className="leading-none text-muted-foreground">
          Prediction Result
        </div>
      </CardFooter>
    </Card>
  );
}
