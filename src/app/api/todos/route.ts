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
        const body = await postSchema.validate(await request.json())

        const todo = await prisma.todo.create({ data: body })

        return NextResponse.json({ message: 'Creando todo', todo })

    } catch (error) {
        console.log(error)
    }
}