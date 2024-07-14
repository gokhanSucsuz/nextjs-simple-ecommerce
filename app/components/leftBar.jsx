"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const LeftBar = () => {
    const [order, setOrder] = useState({ sort: "default" })
    const pathname = usePathname()
    return (
        <div className='flex flex-col gap-2 px-8 py-8 mx-5 mt-10 border rounded-lg shadow-lg'>
            <div className='text-lg text-gray-400'>Order By</div>
            <div className='text-lg text-gray-600 cursor-pointer flex items-center gap-4'
                onClick={() => {
                    setOrder({ sort: "default" })
                }}
            >
                <div className='w-[8px] h-[8px] bg-purple-400 rounded-full'
                    style={{
                        visibility: order.sort === "default" ? "visible" : "hidden"
                    }}
                ></div>
                <Link href={`${pathname}`}>Default</Link>
            </div>
            <div className='text-lg text-gray-600 cursor-pointer flex items-center gap-4'
                onClick={() => {
                    setOrder({ sort: "desc" })
                }}
            >
                <div className='w-[8px] h-[8px] bg-purple-400 rounded-full'
                    style={{
                        visibility: order.sort === "desc" ? "visible" : "hidden"
                    }}
                ></div>
                <Link href={`${pathname}?sortBy=price_desc`}>Sort decreasing by price</Link>
            </div>
            <div className='text-lg text-gray-600 cursor-pointer flex items-center gap-4'
                onClick={() => {
                    setOrder({ sort: "asc" })
                }}
            >
                <div className='w-[8px] h-[8px] bg-purple-400 rounded-full'
                    style={{
                        visibility: order.sort === "asc" ? "visible" : "hidden"
                    }}
                ></div>
                <Link href={`${pathname}?sortBy=price_asc`}>Sort increasing by price </Link>
            </div>
        </div>
    )
}

export default LeftBar
