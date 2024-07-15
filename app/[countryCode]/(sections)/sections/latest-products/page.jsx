import generateRandomProducts from '@/app/actions/generateRandomProducts'
import ProductCard from '@/app/components/productCard'
import ProductSection from '@/app/components/productSection'
import React from 'react'

const LatestProducts = ({ params, searchParams }) => {
    let latestProductsAll = generateRandomProducts.getLatestProducts(10)
    if (searchParams) {
        if (searchParams.sortBy === "price_asc") {
            latestProductsAll = generateRandomProducts.sortAsc(latestProductsAll)
        } else if (searchParams.sortBy === "price_desc") {
            latestProductsAll = generateRandomProducts.sortDesc(latestProductsAll)
        } else {
            latestProductsAll = generateRandomProducts.getLatestProducts(10)
        }
    }
    return (
        <div className='flex flex-col'>
            <ProductSection showAll={false} title="Latest Products" className="mb-4" />
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                    latestProductsAll.map((item) => {
                        return (
                            <ProductCard key={item} product={item} locale={params.countryCode} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default LatestProducts
