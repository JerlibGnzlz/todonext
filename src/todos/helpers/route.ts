import { Todo } from "@prisma/client";


export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {
    const body = { complete }

    const todo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const data = await todo.json()
    return data
}



export const crearTodo = async (descripcion: string): Promise<Todo> => {
    const body = { descripcion }

    const todo = await fetch(`/api/todos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const data = await todo.json()
    return data
}


export const eliminarTodo = async (id: string): Promise<Todo> => {

    const todo = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const data = await todo.json()
    return data
}