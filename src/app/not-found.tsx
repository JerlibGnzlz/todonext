import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
                <Image
                    src="https://i.pinimg.com/236x/c0/39/4b/c0394b72e5a6bc6ea14c2737b9f91944.jpg"
                    alt="Página no encontrada"
                    width={300}
                    height={200}
                    className="mx-auto mb-4"
                />
                <h2 className="text-4xl font-bold text-gray-800">404 - Not Found</h2>
                <p className="text-gray-600 mt-2">No se pudo encontrar el recurso solicitado.</p>

                <Link href="/dashboard/rest-todos">
                    <button className="mt-6 bg-sky-500 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all">
                        Volver al inicio
                    </button>
                </Link>
            </div>
        </div>
    );
}
