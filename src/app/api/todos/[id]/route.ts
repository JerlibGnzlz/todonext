// import prisma from '@/lib/schema'
// import { NextResponse } from 'next/server'
import { boolean, object, string } from 'yup';

// export async function GET(_request: Request, { params }: { params: { id: string } }) {

//     const { id } = await params

//     const todoId = await prisma.todo.findUnique({ where: { id } })

//     if (!todoId) {
//         return NextResponse.json({ message: `Id ${id} no encontrado` }, { status: 404 });
//     }

//     return NextResponse.json({ message: 'Todo por su ID:', todoId })
// }


const putSchema = object({
    descripcion: string().optional(),
    complete: boolean().optional().default(false)
})




import prisma from "@/lib/schema";
import { NextResponse } from "next/server";

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




export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;


        const updatedTodo = await prisma.todo.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Tarea eliminada", data: updatedTodo }, { status: 200 });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ message: "Error al eliminar la tarea" }, { status: 500 });
    }
}
