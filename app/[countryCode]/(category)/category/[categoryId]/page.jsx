import generateRandomProducts from '@/app/actions/generateRandomProducts'
import ProductCard from '@/app/components/productCard'
import React from 'react'

const CategoryDetail = ({ params }) => {
    const products = generateRandomProducts.getProductsByCategoryId(params.categoryId)
    return (
        <div className='flex flex-col gap-4'>
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                    products.map((item) => {
                        return (
                            <ProductCard locale={params.countryCode} product={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryDetail
