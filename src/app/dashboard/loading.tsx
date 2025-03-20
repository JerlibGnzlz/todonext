import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-80 flex flex-col items-center gap-4">
                <Skeleton className="h-6 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-2/3 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-10 w-full rounded-lg" />
            </div>
        </div>
    );
}
