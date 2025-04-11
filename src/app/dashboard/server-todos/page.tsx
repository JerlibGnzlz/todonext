import { NewTodo } from '../../../todos/components/NewTodo';
import prisma from "@/lib/schema";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
    title: 'Lista de todos',
}
export default async function ServerTodosPage() {

    const todos = await prisma.todo.findMany({
        orderBy: {
            descripcion: "asc"
        }
    })


    return (
        <>
            <span className='text-3xl mb-10'>Server Action</span>
            <div className="w-full px-5 mx-5 mb-5 flex flex-display-center ">
                <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </>
    );
}