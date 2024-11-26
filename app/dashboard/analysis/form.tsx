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
import { useState } from "react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/extension/file-upload";
import { CloudUpload, Paperclip } from "lucide-react";
import { toast } from "sonner";
import { getVariableDataXlsx, processVariables } from "@/lib/analysis";
import { analysisDZOConfig } from "@/lib/datas";

const formSchema = z.object({
  analysisFile: z.any(), // TODO: Decide if this is necessary
  varX: z
    .string({ message: "Silahkan pilih variabel pertama!" })
    .min(1, { message: "Silahkan pilih variabel pertama!" }),
  varY: z
    .string({ message: "Silahkan pilih variabel kedua!" })
    .min(1, { message: "Silahkan pilih variabel kedua!" }),
});

export function AnalysisForm({
  setDataX,
  setDataY,
}: {
  setDataX: (data: string[]) => void;
  setDataY: (data: string[]) => void;
}) {
  const [file, setFile] = useState<File[] | null>(null);
  const [variables, setVariables] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onChange = async (file: File[] | null) => {
    if (!file || file.length === 0) {
      setFile(null);
      setVariables(null);
      return;
    }

    setFile(file);
    setIsLoading(true);

    try {
      const result = await processVariables(file[0]);
      setVariables(result);
    } catch (error) {
      toast.error("Error processing the file");
      console.error("Error processing file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!file) {
        throw new Error("File is required");
      }

      setIsLoading(true);

      const dataX = await getVariableDataXlsx(file[0], values.varX);
      const dataY = await getVariableDataXlsx(file[0], values.varY);

      setDataX(dataX as string[]);
      setDataY(dataY as string[]);

      toast.success("Analysis completed successfully!");
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
      console.error("Form submission error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="my-5 grid gap-4">
        <FormField
          control={form.control}
          name="analysisFile"
          render={() => (
            <FormItem>
              <FormLabel>File</FormLabel>
              <FormControl>
                <FileUploader
                  value={file}
                  onValueChange={onChange}
                  dropzoneOptions={analysisDZOConfig}
                  className="relative bg-background rounded-lg p-2"
                >
                  <FileInput
                    id="fileInput"
                    className="outline-dashed outline-1 outline-slate-500"
                  >
                    <div className="flex items-center justify-center flex-col p-8 w-full">
                      <CloudUpload className="text-gray-500 w-10 h-10" />
                      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        &nbsp;or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        XLSX or CSV
                      </p>
                    </div>
                  </FileInput>
                  <FileUploaderContent>
                    {file &&
                      file.length > 0 &&
                      file.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                          <Paperclip className="h-4 w-4 stroke-current" />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>
              <FormDescription>
                <span className="text-red-500">
                  {form.formState.errors.analysisFile?.message?.toString()}
                </span>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="varX"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Variabel X</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={isLoading || !file}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Variabel X" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Variabel X</SelectLabel>
                      {variables?.map((variable) => (
                        <SelectItem value={variable} key={variable}>
                          {variable}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                <span className="text-red-500">
                  {form.formState.errors.varX?.message}
                </span>
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="varY"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Variabel Y</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={isLoading || !file}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Variabel Y" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Variabel Y</SelectLabel>
                      {variables?.map((variable) => (
                        <SelectItem value={variable} key={variable}>
                          {variable}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                <span className="text-red-500">
                  {form.formState.errors.varY?.message}
                </span>
              </FormDescription>
            </FormItem>
          )}
        />

        <Button className="w-[20%]" type="submit" disabled={!file || isLoading}>
          {isLoading ? "Processing..." : "Tampilkan"}
        </Button>
      </form>
    </Form>
  );
}
