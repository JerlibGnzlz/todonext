'use client';

// import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { toast } from "sonner"
import { addTodo, deletedCompleted } from "../actions/todo-actions";


export const NewTodo = () => {
    const [descripcion, setDescripcion] = useState("")
    // const router = useRouter();


    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (descripcion.trim().length === 0) return
        toast.error("La descripción no puede estar vacía");
        // crearTodo(descripcion);
        addTodo(descripcion);
        setDescripcion("");
        // router.refresh();

    }


    return (
        <form
            onSubmit={onSubmit}
            className='flex w-full'>
            <input type="text"
                onChange={(e) => setDescripcion(e.target.value)}
                value={descripcion}
                className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
                placeholder="¿Qué necesita ser hecho?" />

            <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
                Crear
            </button>

            <span className='flex flex-1'></span>

            <button
                onClick={() => deletedCompleted()}
                type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
                <IoTrashOutline />
                Eliminar completados
            </button>


        </form>
    )
}