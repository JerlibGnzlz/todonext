import prisma from '@/lib/schema'
import { NextResponse } from 'next/server'

export async function GET(_request: Request, { params }: { params: { id: string } }) {

    const { id } = await params

    const todoId = await prisma.todo.findUnique({ where: { id } })

    if (!todoId) {
        return NextResponse.json({ message: `Id ${id} no encontrado` }, { status: 404 });
    }

    return NextResponse.json({ message: 'Todo por su ID:', todoId })
}