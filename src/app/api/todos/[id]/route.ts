// import prisma from '@/lib/schema'
// import { NextResponse } from 'next/server'
// import { boolean, object, string } from 'yup';

// export async function GET(_request: Request, { params }: { params: { id: string } }) {

//     const { id } = await params

//     const todoId = await prisma.todo.findUnique({ where: { id } })

//     if (!todoId) {
//         return NextResponse.json({ message: `Id ${id} no encontrado` }, { status: 404 });
//     }

//     return NextResponse.json({ message: 'Todo por su ID:', todoId })
// }


// const putSchema = object({
//     descripcion: string().required(),
//     complete: boolean().optional().default(false)
// })

// export async function PUT(request: Request, { params }: { params: { id: string } }) {

//     const { id } = await params;

//     try {

//         const { descripcion, complete } = await putSchema.validate(await request.json())

//         const todo = await prisma.todo.update({
//             where: { id },
//             data: { descripcion, complete }
//         })


//         if (!todo) {
//             return NextResponse.json({ message: `Id ${id} no actualizado` }, { status: 404 });
//         }

//         return NextResponse.json({ message: 'Todo Actualizado:', todo })

//     } catch (error) {
//         NextResponse.json(error, { status: 400 })
//     }

// }

// import { Todo } from "@prisma/client";



// export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {

//     const body = { complete }

//     const todo = await fetch(`/api/todos/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     }).then(res => res.json())

//     console.log({ todo })

//     return todo
// }

// export async function PUT(req: Request, { params }: { params: { id: string } }) {
//     try {
//         const id = params.id;
//         const body = await req.json();

//         // Aquí iría la lógica para actualizar la tarea con el ID dado
//         return new Response(JSON.stringify({ message: "Tarea actualizada", id, data: body }), {
//             status: 200,
//             headers: { "Content-Type": "application/json" },
//         });
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (error) {
//         return new Response(JSON.stringify({ message: "Error al actualizar la tarea" }), {
//             status: 500,
//             headers: { "Content-Type": "application/json" },
//         });
//     }
// }
import prisma from "@/lib/schema";
import { NextResponse } from "next/server";


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { complete } = await req.json();

        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { complete },
        });


        return NextResponse.json({ message: "Tarea actualizada", data: updatedTodo }, { status: 200 });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ message: "Error al actualizar la tarea" }, { status: 500 });
    }
}
