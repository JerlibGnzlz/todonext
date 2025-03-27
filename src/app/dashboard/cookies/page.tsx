import { TabBar } from "@/components/TabBar";
import { cookies } from "next/headers";


export const metadata = {
    title: 'Cookies',
    description: 'cookies',
};


export default async function CokiesPage() {

    const cookieStore = await cookies();
    const cookieTab = cookieStore.get('selectTab')?.value ?? "1"


    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex col-span-2">
                <span className="text-3xl">TabBar</span>
            </div>
            <TabBar
                // tabOptions={[1, 2, 3, 4]}
                currentTab={+cookieTab}
            />
        </div>
    );
}