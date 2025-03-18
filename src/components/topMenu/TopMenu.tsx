import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from 'react-icons/ci'

export const TopMenu = () => {
    return (
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5 px-6 flex items-center justify-between">

            <h5 className="text-2xl text-gray-600 font-medium">Dashboard</h5>

            <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                <CiMenuBurger size={30} />
            </button>

            {/* Right-side Actions */}
            <div className="flex items-center space-x-4">
                <div className="hidden md:block w-64">
                    <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                        <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                            <CiSearch />
                        </span>
                        <input type="search" name="search" placeholder="Search here"
                            className="w-full pl-12 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" />
                    </div>
                </div>

                <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    <CiSearch />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    <CiChat1 size={25} />
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                    <CiBellOn size={25} />
                </button>
            </div>
        </div>
    )
}
