import prisma from "@/lib/schema";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
    title: 'Lista de todos',
}
export default async function RestTodosPage() {

    const todos = await prisma.todo.findMany({
        orderBy: {
            descripcion: "asc"
        }
    })
    return (
        <div>
            <TodosGrid todos={todos} />
        </div>
    );
}