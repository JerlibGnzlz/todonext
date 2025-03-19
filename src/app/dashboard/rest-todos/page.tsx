import prisma from "@/lib/schema";
import { NewTodo } from "@/todos/components/NewTodo";
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
            <div className="w-full px-5 mx-5 mb-5 flex flex-display-center ">
                <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </div>
    );
}