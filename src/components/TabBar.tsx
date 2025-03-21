"use client"

import { useState } from "react"

// https://tailwindcomponents.com/component/radio-buttons-1


interface TabBarProps {
    currentTab?: number
    tabOptions?: number[]
}

export const TabBar = ({ currentTab = 1, tabOptions = [1, 2, 3, 4] }: TabBarProps) => {

    const [Select, setSelect] = useState(currentTab)

    const handleSelect = (tab: number) => {
        setSelect(tab)
    }

    return (
        <div className={`grid w-full  grid-cols-4 gap-2 space-x-2 rounded-xl bg-gray-200 p-2`}>

            {tabOptions.map((tab) => (
                <div key={tab}>
                    <input
                        checked={Select === tab}
                        onChange={() => { }}
                        type="radio"
                        id="1"
                        className="peer hidden" />
                    <label
                        onClick={() => handleSelect(tab)}
                        className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition-all">
                        {tab}
                    </label>
                </div>
            ))}
        </div>
    )
}