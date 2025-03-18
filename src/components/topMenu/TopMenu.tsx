import { CiBellOn, CiChat1, CiSearch } from 'react-icons/ci';

export const TopMenu = () => {
    return (
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5 px-6 flex items-center justify-between">

            <h5 className="text-2xl text-gray-600 font-medium">Dashboard</h5>

            {/* Right-side Actions */}
            <div className="flex items-center space-x-4">
                <div className="">
                    <div className="relative flex items-center text-black-400 focus-within:text-cyan-400">
                        <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-black-300">
                            <CiBellOn />
                        </span>
                        <input type="search" name="search" placeholder="Search here"
                            className="w-full pl-12 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-400 focus:border-cyan-300 transition" />
                    </div>
                </div>

                <button className="flex items-center justify-center w-10 h-10 rounded-xl border 
                    bg-gray-500 text-white transition-all duration-200 
                    hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white 
                    focus:bg-gradient-to-r focus:from-sky-600 focus:to-cyan-400 focus:text-white 
                    active:bg-sky-700 active:text-white">
                    <CiSearch />
                </button>

                <button className="flex items-center justify-center w-10 h-10 rounded-xl border  
                    bg-gray-500 text-white transition-all duration-200 
                    hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white 
                    focus:bg-gradient-to-r focus:from-sky-600 focus:to-cyan-400 focus:text-white 
                    active:bg-sky-700 active:text-white">
                    <CiChat1 size={25} />
                </button>

                <button className="flex items-center justify-center w-10 h-10 rounded-xl border 
                    bg-gray-500 text-white transition-all duration-200 
                    hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white 
                    focus:bg-gradient-to-r focus:from-sky-600 focus:to-cyan-400 focus:text-white 
                    active:bg-sky-700 active:text-white">
                    <CiBellOn size={25} />
                </button>
            </div>
        </div>
    )
}
