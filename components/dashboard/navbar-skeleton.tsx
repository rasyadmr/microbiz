import { Skeleton } from "@/components/ui/skeleton";
import { SheetMenu } from "@/components/dashboard/sheet-menu";

export default function NavbarSkeleton() {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
        <div className="mx-4 sm:mx-8 flex h-14 items-center">
          <div className="flex items-center space-x-4 lg:space-x-0">
            <SheetMenu />
            <Skeleton className="w-40 h-5" />
          </div>
          <div className="flex flex-1 items-center justify-end">
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </header>
  )
}