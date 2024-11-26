"use client";

import { Area, AreaChart, CartesianGrid } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
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

export function AreachartComponent({
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
        <CardTitle>Area Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="varX"
              type="natural"
              fill="var(--color-varX)"
              fillOpacity={0.4}
              stroke="var(--color-varX)"
              stackId="a"
            />
            <Area
              dataKey="varY"
              type="natural"
              fill="var(--color-varY)"
              fillOpacity={0.4}
              stroke="var(--color-varY)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Prediction
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Prediction Result
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
