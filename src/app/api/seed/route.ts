// import prisma from '../../../lib/schema
import prisma from '@/lib/schema'
import { NextResponse } from 'next/server'

export async function GET(_request: Request) {

    await prisma.todo.deleteMany()

    const todo = await prisma.todo.createMany({
        data: [
            {
                descripcion: 'Descansar',
            },
            {
                descripcion: 'Comer',
                complete: true
            },
            {
                descripcion: 'Estudiar',
            },
            {
                descripcion: 'Jugar',
            }
        ]
    })


    console.log(todo)
    return NextResponse.json({
        message: 'Seed '
    })
}