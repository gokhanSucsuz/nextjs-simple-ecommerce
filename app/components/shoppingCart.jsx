"use client"
import React, { useEffect, useState } from 'react'
import { useBasketStore } from '../store/basketStore'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const ShoppingCart = (props) => {
    const { basket } = useBasketStore()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [groupData, setGroupData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const handleGroup = (data) => {
        const grouped = {}
        let total = 0
        data.forEach((item) => {
            const { productId } = item
            total += parseFloat(item.price)
            if (grouped[productId]) {
                grouped[productId].count++
            } else {
                grouped[productId] = { ...item, count: 1 }
            }
        })
        setTotalPrice(total)
        setGroupData(Object.values(grouped))
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (!e.target.closest(".relative")) {
                setIsOpen(false)
            }
        })
        const subscriber = (listener) => {
            return useBasketStore.subscribe(listener)
        }
        const listener = (state) => {
            setTimeout(() => {
                if (!pathname.includes("/basket")) {
                    setIsOpen(true)
                }
            }, 100)
        }
        subscriber(listener)
    }, [])

    useEffect(() => {
        handleGroup(basket)
    }, [basket])
    return (
        <div className='relative z-10'>
            <button
                onClick={toggleMenu}
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                className="flex text-sm bg-gray-200 p-3 me-2 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
                Cart ({groupData.length || 0})
                <span className="sr-only"></span>
            </button>

            {
                isOpen && <div id="dropdownAvatar"
                    className="absolute -left-[240px] w-96 top-[140%] border bg-white divide-y divide-gray-400 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="font-medium truncate text-center">Chart</div>
                    </div>
                    {basket.length === 0 ? <div className=' p-2 text-red-600 text-center'>Your cart is empty!</div> :
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                            {groupData.map((item) => {
                                return (
                                    <li key={item.productId} className='pb-3 hover:bg-slate-100 cursor-pointer'>
                                        <div className="flex items-center space-x-4 px-4">
                                            <div className="flex-shrink-0">
                                                <img src={item.image} alt={item.productName} className="w-8 h-8 rounded-full" />
                                            </div>
                                            <div className="max-w-[200px]">
                                                <p className="text-sm font-medium truncate">
                                                    {item.productShortName}
                                                </p>
                                                <p className="text-sm font-medium truncate">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="inline-flex flex-col items-center text-base font-semibold justify-end">
                                                <div>${(item.price * item.count).toFixed(2)}</div>
                                                <div>Quantity: {item.count}</div>
                                            </div>
                                        </div>
                                    </li>)
                            })}

                        </ul>}

                    <div className="py-2">
                        <Link href={`/${props.countryCode}/basket`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Go to Cart , Total Price : ${totalPrice.toFixed(2)}
                        </Link>
                    </div>
                </div>
            }
        </div>

    )
}

export default ShoppingCart
