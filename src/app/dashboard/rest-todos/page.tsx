import prisma from "@/lib/schema";

export const metadata = {
    title: 'List of todos',
}
export default function RestTodosPage() {

    const todos = prisma.todo.findMany({
        orderBy: {
            createdAt: "asc"
        }
    })
    return (
        <div>
            {JSON.stringify(todos)}
        </div>
    );
}