import prisma from '@/lib/schema'
import { NextResponse, NextRequest } from 'next/server'

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
