import prisma from "@/lib/schema";
import { NextResponse } from "next/server";
import { boolean, object, string } from 'yup';


const putSchema = object({
    descripcion: string().optional(),
    complete: boolean().optional().default(false)
})



export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const body = await req.json();

        const validatedData = await putSchema.validate(body);

        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: validatedData, // Usamos los datos validados
        });

        return NextResponse.json({ message: "Tarea actualizada", data: updatedTodo }, { status: 200 });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ message: "Error al actualizar la tarea" }, { status: 500 });
    }
}




