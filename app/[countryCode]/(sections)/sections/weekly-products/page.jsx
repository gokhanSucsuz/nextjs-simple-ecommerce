import generateRandomProducts from '@/app/actions/generateRandomProducts'
import ProductCard from '@/app/components/productCard'
import ProductSection from '@/app/components/productSection'
import React from 'react'

const WeeklyProducts = ({ params, searchParams }) => {
    let weeklyProductsAll = generateRandomProducts.getWeeklyProducts(1000)
    if (searchParams) {
        if (searchParams.sortBy === "price_asc") {
            weeklyProductsAll = generateRandomProducts.sortAsc(weeklyProductsAll)
        } else if (searchParams.sortBy === "price_desc") {
            weeklyProductsAll = generateRandomProducts.sortDesc(weeklyProductsAll)
        } else {
            weeklyProductsAll = generateRandomProducts.getWeeklyProducts(1000)
        }
    }
    return (
        <div className='flex flex-col'>
            <ProductSection showAll={false} title="Weekly Products" className="mb-4" />
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                    weeklyProductsAll.map((item) => {
                        return (
                            <ProductCard key={item} product={item} locale={params.countryCode} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default WeeklyProducts
