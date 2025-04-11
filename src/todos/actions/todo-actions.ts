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

    revalidatePath('/todos')

    return updatedTodo

}