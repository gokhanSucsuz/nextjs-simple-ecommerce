"use client"
import generateRandomProducts from '@/app/actions/generateRandomProducts'
import { useBasketStore } from '@/app/store/basketStore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const ProductDetail = ({ params }) => {
    const { addBasket } = useBasketStore()
    const router = useRouter()
    const [product, setProduct] = useState(null)
    const [selectedColor, setSelectedColor] = useState('')

    useEffect(() => {
        if (!params.productId) {
            router.push(`/${params.countryCode}/main`)
        } else {
            const fetchedProduct = generateRandomProducts.getProductById(params.productId)
            setProduct(fetchedProduct)
            setSelectedColor(fetchedProduct?.colors[0] || '')
        }
    }, [params.productId, params.countryCode, router])

    if (!product) {
        return (
            <div className="flex items-center justify-center w-full h-screen border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-4 text-3xl font-bold leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">Loading...</div>
            </div>

        )
    }

    return (
        <div>
            <div className="flex flex-col gap-4 mx-auto max-w-screen-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Title: {product?.productName}
                </h5>
                <Image src={product.image} className='w-full' width="200" height="100" alt={product.productName} />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className='font-bold'>Description:</span> {product.description}
                </p>
                <p><span className='font-bold'>Price:</span> {product.price}</p>
                <p><span className='font-bold'>Product Code:</span> {product.productCode}</p>

                <ul className="w-16 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                    <div className='flex gap-2'>
                        <h3 className="p-1 font-semibold text-gray-900 dark:text-white text-center me-4">Color Select</h3>
                        {
                            product.colors.map(item => {
                                return (
                                    <li key={item} className={`w-full border-b border-gray-200 p-1 rounded-lg dark:border-gray-600`} style={{
                                        backgroundColor: item
                                    }}>
                                        <div className="flex items-center p-3">
                                            <input type="radio"
                                                value={item}
                                                onChange={(e) => setSelectedColor(e.target.value)}
                                                checked={item === selectedColor} name="list-radio" className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500`} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </div>

                </ul>

                <p><span className='font-bold'>Department:</span> {product.department}</p>
                <button
                    onClick={() => addBasket({ ...product, selectedColor })}
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductDetail
