import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Spinner />
    </div>
  );
}
