"use client"

import { Todo } from "@prisma/client"
import { TodoItem } from './TodoItem';

import * as api from '../helpers/todos'

interface TodosGridProps {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={api.updateTodo} />
            ))}
        </div>
    );
}
