import prisma from '@/lib/schema'
import { NextResponse } from 'next/server'
import { boolean, object, string } from 'yup';

export async function GET(_request: Request, { params }: { params: { id: string } }) {

    const { id } = await params

    const todoId = await prisma.todo.findUnique({ where: { id } })

    if (!todoId) {
        return NextResponse.json({ message: `Id ${id} no encontrado` }, { status: 404 });
    }

    return NextResponse.json({ message: 'Todo por su ID:', todoId })
}


const putSchema = object({
    descripcion: string().required(),
    complete: boolean().optional().default(false)
})

export async function PUT(request: Request, { params }: { params: { id: string } }) {

    const { id } = await params;

    try {

        const { descripcion, complete } = await putSchema.validate(await request.json())

        const todo = await prisma.todo.update({
            where: { id },
            data: { descripcion, complete }
        })


        if (!todo) {
            return NextResponse.json({ message: `Id ${id} no actualizado` }, { status: 404 });
        }

        return NextResponse.json({ message: 'Todo Actualizado:', todo })

    } catch (error) {
        NextResponse.json(error, { status: 400 })
    }

}