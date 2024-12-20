"use client";

import { CartesianGrid, Line, LineChart } from "recharts";

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

export function LinechartComponent({
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
        <CardTitle>Line Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            {/* <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            /> */}
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="varX"
              type="monotone"
              stroke="var(--color-varX)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="varY"
              type="monotone"
              stroke="var(--color-varY)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
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
