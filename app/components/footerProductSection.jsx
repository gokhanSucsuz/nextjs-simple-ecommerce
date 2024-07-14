import Link from 'next/link'
import React from 'react'
import generateRandomProducts from '../actions/generateRandomProducts'

const FooterProductSection = (props) => {
    console.log(props.countryCode)
    const allProducts = generateRandomProducts.getAllProducts()
    console.log(allProducts)
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Products</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 flex flex-col gap-2">
                    {
                        allProducts.map((item) =>
                            <Link key={item.productId} href={`/${props.countryCode}/products/${item.productId}`} className="hover:underline">
                                {
                                    item.productName
                                }
                            </Link>
                        )
                    }
                </li>
            </ul>
        </div>
    )
}

export default FooterProductSection
