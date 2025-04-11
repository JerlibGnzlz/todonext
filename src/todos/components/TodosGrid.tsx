"use client"

import { Todo } from "@prisma/client"
import { TodoItem } from './TodoItem';
// import { updateTodo } from "../helpers/route";
// import { useRouter } from "next/navigation";
import { toggleTodo } from "../actions/todo-actions";

interface TodosGridProps {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {

    // const router = useRouter(); // Hook para manejar navegación y refrescar la UI




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}

                // toggleTodo={async (id, complete) => {
                //     await updateTodo(id, complete); // Actualiza la tarea
                // router.refresh(); // Refresca la UI
                // }} />
                />)
            )}
        </div>
    );
}
