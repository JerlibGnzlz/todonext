"use server";

import prisma from "@/lib/schema";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {

    const todo = await prisma.todo.findFirst({
        where: {
            id
        }
    })

    if (!todo) {
        throw new Error(`Todo ${id} no encontrado`)
    }

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: { complete }
    })

    revalidatePath('/dashboard/server-todos')

    return updatedTodo

}



export const addTodo = async (descripcion: string) => {
    try {

        const todo = await prisma.todo.create({ data: { descripcion } })
        revalidatePath('/dashboard/server-todos')

        return todo


    } catch (error) {
        return {
            message: "Error al crear la tarea",
            error
        }
    }
}


export const deletedCompleted = async () => {
    try {


        const todo = await prisma.todo.deleteMany({
            where: { complete: true },
        });

        revalidatePath('/dashboard/server-todos')
        return todo


    } catch (error) {
        return {
            message: "Error al eliminar la tarea",
            error
        }
    }
}