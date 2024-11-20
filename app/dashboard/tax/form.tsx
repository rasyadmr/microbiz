"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BUSINESS_TYPE } from "@/lib/datas";

const formSchema = z.object({
  yearlyGross: z.coerce
    .number({ message: "Isi keuntungan tahunan dengan angka!" })
    .min(0, { message: "Masukkan keuntungan bisnis dengan benar!" }),
  companyType: z.enum(BUSINESS_TYPE as [string, ...string[]], {
    message: "Silahkan pilih jenis bisnis!",
  }),
  businessAge: z.coerce
    .number({ message: "Isi umur bisnis dengan angka!" })
    .min(0, { message: "Masukkan umur bisnis dengan benar!" }),
});

export function TaxForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO Submit action
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 grid gap-4">
        <FormField
          control={form.control}
          name="yearlyGross"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Keuntungan Tahunan</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>
                <span className="text-red-500">
                  {form.formState.errors.yearlyGross?.message}
                </span>
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jenis Usaha</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
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
              </FormControl>
              <FormDescription>
                <span className="text-red-500">
                  {form.formState.errors.companyType?.message}
                </span>
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="businessAge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Umur Bisnis</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>
                <span className="text-red-500">
                  {form.formState.errors.businessAge?.message}
                </span>
              </FormDescription>
            </FormItem>
          )}
        />
        <Button className="w-[20%]" type="submit">
          Kirim
        </Button>
      </form>
    </Form>
  );
}
