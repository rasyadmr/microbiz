import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContentSkeleton() {
  return (
    <>
      <Skeleton className="w-52 h-5" />
      <Card className="rounded-lg border-none mt-6">
        <Skeleton className="p-6 w-full h-[70vh]" />
      </Card>
    </>
  );
}
