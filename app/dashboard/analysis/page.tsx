"use client";

import { ContentLayout } from "@/components/dashboard/content-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

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

// TODO Example variables
const variables = [
  {
    label: "Pendapatan",
    value: "income",
  }, {
    label: "Pengeluaran",
    value: "expense",
  }, {
    label: "Keuntungan",
    value: "profit",
  }, {
    label: "Pajak",
    value: "tax",
  }
]

// TODO Example data
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

// TODO Example Legends
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function Page() {
  return (
    <ContentLayout title="Analysis" breadcrumbs={breadcrumbList}>
      <h1 className="font-semibold text-2xl">Analisis Data</h1>
      <form className="my-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="excel">Excel file</Label>
          <Input id="excel" type="file" />
        </div>
        <div>
          <Label htmlFor="Xvar">Variabel X</Label>
          <Select name="Xvar">
            <SelectTrigger>
              <SelectValue placeholder="Variabel X" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Variabel X</SelectLabel>
                {variables.map((variable, index) => (
                  <SelectItem value={variable.value} key={variable.value.concat(index.toString())}>{variable.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
        <Label htmlFor="YVar">Variabel Y</Label>
          <Select name="YVar">
            <SelectTrigger>
              <SelectValue placeholder="Variabel Y" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Variabel Y</SelectLabel>
                {variables.map((variable, index) => (
                  <SelectItem value={variable.value} key={variable.value.concat(index.toString())}>{variable.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button type="submit">Display</Button>
        </div>
      </form>

      <Card>
        <CardHeader>
          <CardTitle>Bar Chart - Multiple</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </ContentLayout>
  );
}
