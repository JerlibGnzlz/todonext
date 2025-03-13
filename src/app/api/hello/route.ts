import { NextResponse, } from 'next/server'

export async function GET(_request: Request) {

    return NextResponse.json({
        message: 'Next.js get el servidor'
    })
}


export async function POST(_request: Request) {

    return NextResponse.json({
        message: 'Next.js post el servidor'
    })
}