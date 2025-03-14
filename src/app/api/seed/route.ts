// import prisma from '../../../lib/schema
import prisma from '@/lib/schema'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    await prisma.todo.deleteMany()

    const todo = await prisma.todo.createMany({
        data: [
            {
                descripcion: 'Tarea 1',
            },
            {
                descripcion: 'Tarea 2',
                complete: true
            },
            {
                descripcion: 'Tarea 3',
            }
        ]
    })


    console.log(todo)
    return NextResponse.json({
        message: 'Seed '
    })
}