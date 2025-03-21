import { TabBar } from "@/components/TabBar";


export const metadata = {
    title: 'Cookies',
    description: 'cookies',
};


export default function CokiesPage() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex col-span-2">
                <span className="text-3xl">TabBar</span>
            </div>
            <TabBar
                tabOptions={[1, 2, 3, 4]}
                currentTab={1}
            />
        </div>
    );
}