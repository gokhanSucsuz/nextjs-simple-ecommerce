import Link from 'next/link'
import React from 'react'
import generateRandomProducts from '../actions/generateRandomProducts'

const FooterCategoriesSection = (props) => {
    console.log(props.countryCode)
    const categories = generateRandomProducts.getCategories()
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Categories</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {
                    categories.map((cat) => {
                        return (
                            <li className="mb-4" key={cat.categoryId}>
                                <Link href={`/${props.countryCode}/category/${cat.categoryId}`} className="hover:underline">{
                                    cat.categoryName}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FooterCategoriesSection
