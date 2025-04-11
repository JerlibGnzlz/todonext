import Image from 'next/image'
import Link from 'next/link'
import { CiLogout } from 'react-icons/ci'
import { SidebarItem } from './SidebarItem'
import { IoBaseballOutline, IoCalendarClear, IoCheckboxOutline, IoCodeOutline, IoListOutline } from 'react-icons/io5'


const menuItems = [
    {
        icon: <IoCalendarClear />,
        title: "Dashboard",
        path: "/dashboard"
    },
    {
        icon: <IoCheckboxOutline />,
        title: "Rest TODO",
        path: "/dashboard/rest-todos"
    },
    {
        icon: <IoListOutline />,
        title: "Server Actions",
        path: "/dashboard/server-todos"
    },
    {
        icon: <IoCodeOutline />,
        title: "Cookies",
        path: "/dashboard/cookies"
    },
    {
        icon: <IoBaseballOutline />,
        title: "Productos",
        path: "/dashboard/products"
    },
]


export const Sidebar = () => {
    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="mx-auto flex items-center justify-center border-b  py-4">
                    <Link href="#" title="home">
                        <Image
                            height={300}
                            width={200}
                            src="https://i.pinimg.com/236x/b1/3b/2f/b13b2f17232adde6a6182cd680bf46ea.jpg" className="w-32" alt="tailus logo" />
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Image
                        height={200}
                        width={500}
                        src="https://i.pinimg.com/236x/5a/11/0e/5a110e0b72a54423ee435b491597eb91.jpg"
                        alt="avatar"
                        className="w-10 h-10 m-auto rounded-full object-cover " />
                    <h5 className=" mt-4 text-xl font-semibold text-gray-600 ">Jerlib Gonzalez</h5>
                    <span className=" text-gray-400 lg:block">Administrador</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">

                    {menuItems.map((item) => (
                        <SidebarItem
                            key={item.path}
                            {...item}
                        />
                    ))}
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                    <CiLogout />
                    <span className="group-hover:text-gray-700">Logout</span>
                </button>
            </div>
        </aside >

    )
}
