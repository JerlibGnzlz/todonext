import prisma from '@/lib/schema'
import { NextResponse } from 'next/server'
import { boolean, object, string } from 'yup';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const take = +(searchParams.get('take') ?? "10")
    const skip = +(searchParams.get('skip') ?? "0")

    if (isNaN(take)) {
        return NextResponse.json(
            { message: 'Take debe ser un número' },
            { status: 400 }
        )
    }
    if (isNaN(skip)) {
        return NextResponse.json(
            { message: 'skip debe ser un número' },
            { status: 400 }
        )
    }

    const todos = await prisma.todo.findMany({ take, skip })

    return NextResponse.json({ message: 'TODO', todos })

}




const postSchema = object({
    descripcion: string().required(),
    complete: boolean().optional().default(false)
})

export async function POST(request: Request) {

    try {
        const { descripcion, complete } = await postSchema.validate(await request.json())

        const todo = await prisma.todo.create({ data: { descripcion, complete } })


        return NextResponse.json({ message: 'Creando todo', todo })

    } catch (error) {
        NextResponse.json(error, { status: 400 })
    }
}


export async function DELETE() {
    try {


        const deletedTodo = await prisma.todo.deleteMany({
            where: { complete: true },
        });

        return NextResponse.json({ message: "Tareas eliminadas", data: deletedTodo }, { status: 200 });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ message: "Error al eliminar las tareas" }, { status: 500 });
    }
}
