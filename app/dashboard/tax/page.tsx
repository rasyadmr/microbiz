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
    label: "Tax",
  },
];

export default function Page() {
  return (
    <ContentLayout title="Tax" breadcrumbs={breadcrumbList}>
      <h1 className="font-semibold text-2xl">Laporan Pajak</h1>
      <form className="my-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="yearlyGross">Yearly Gross</Label>
          <Input id="yearlyGross" name="yearlyGross" type="number" />
        </div>
        <div>
          <Label htmlFor="companyType">Jenis Usaha</Label>
          <Select name="companyType">
            <SelectTrigger>
              <SelectValue placeholder="Pilih jenis usaha" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Jenis Usaha</SelectLabel>
                <SelectItem value="IDV">Individu</SelectItem>
                <SelectItem value="CPR">Koperasi</SelectItem>
                <SelectItem value="CV">CV</SelectItem>
                <SelectItem value="VOF">Firma</SelectItem>
                <SelectItem value="PT">PT</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="businessAge">Umur Bisnis</Label>
          <Input id="businessAge" name="businessAge" type="number" />
        </div>
        <div className="flex items-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </ContentLayout>
  );
}
