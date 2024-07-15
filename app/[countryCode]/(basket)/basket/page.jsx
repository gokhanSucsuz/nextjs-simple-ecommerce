"use client"
import { counts } from '@/app/consts/products'
import { useBasketStore } from '@/app/store/basketStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const BasketPage = (params) => {
    const { basket, addBasket, updateBasket } = useBasketStore()
    const router = useRouter()
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

    useEffect(() => {
        handleGroup(basket)
    }, [basket])

    const handleChangeCount = (product, count) => {
        const arr = [...groupData]
        const idx = arr.findIndex((item) => item.productId.toString() === product.productId.toString())
        if (Number(count) > arr[idx].count) {
            for (let i = 0; i < Number(count) - arr[idx].count; i++) {
                addBasket({
                    ...product
                })
            }
        } else {
            const basketArr = [...basket]
            for (let i = 0; i < arr[idx].count - Number(count); i++) {
                const idx = basketArr.findIndex((item) => item.productId.toString() === product.productId.toString())
                basketArr.splice(idx, 1)
            }
            updateBasket(basketArr)
        }


    }
    return (
        <div className='flex gap-4 justify-center'>
            <div className="flex flex-col w-[70%] gap-40">
                <div className="relative ">
                    <div className="flex-flex-col gap-4 mb-4  mx-auto">
                        <div className="text-2xl">Have you an account?</div>
                        <div className="text-sm flex items-center gap-4 justify-between">
                            Log in for a better experience
                            <button
                                onClick={() => { router.push(`/${params.countryCode}/signin`) }}
                                type="button"
                                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                Log in
                            </button>
                        </div>
                    </div>


                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Quantity
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Price
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Total Price
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    groupData.map((item) => {
                                        return (
                                            <tr key={item.productId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item.productName}

                                                </th>
                                                <td className="px-6 py-4 flex items-center gap-4">
                                                    <div className="text-sm text-red-500 underline cursor-pointer">
                                                        Delete
                                                    </div>
                                                    <select
                                                        onChange={(e) => handleChangeCount(item, e.target.value)}
                                                        value={item.count}
                                                        id="countries"
                                                        className="bg-gray-50 border w-[30%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        {
                                                            counts.map((item) => {
                                                                return (
                                                                    <option key={item} value={item}>{item}</option>
                                                                )
                                                            })
                                                        }

                                                    </select>
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${item.price}
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${(item.price * item.count).toFixed(2)}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
            <div className="flex flex-col w-[30%] p-5 shadow-lg">
                <div className="text-3xl text-gray-500 font-bold ">Order Summary</div>
                <div className="border-t border-solid border-gray-500 mt-4 mb-4"></div>
                <div className="flex items-center justify-between">
                    <div>Shopping Cart Total </div>
                    <div>${totalPrice.toFixed(2)}</div>
                </div>
                <div className="border-t border-solid border-gray-500 mt-4 mb-4"></div>
                <div className="flex items-center justify-between">
                    <div>Delivery </div>
                    <div>$0</div>
                </div>
                <div className="border-t border-solid border-gray-500 mt-4 mb-4"></div>
                <div className="flex items-center justify-between">
                    <div>Tax&Fee</div>
                    <div>${(totalPrice * 18 / 100).toFixed(2)}</div>
                </div>
                <div className="border-t border-solid border-gray-500 mt-4 mb-4"></div>
                <div className="flex items-center justify-between font-bold">
                    <div>Total</div>
                    <div>${(totalPrice + (totalPrice * 18 / 100)).toFixed(2)}</div>
                </div>
                <button
                    onClick={() => {

                        alert("Your payment is successful!")
                        router.replace(`/${params.countryCode}/main`)
                        updateBasket([])
                    }}
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Pay
                </button>

            </div>
        </div>
    )
}

export default BasketPage
