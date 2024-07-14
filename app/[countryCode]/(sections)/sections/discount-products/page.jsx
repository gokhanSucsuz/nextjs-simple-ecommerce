import generateRandomProducts from '@/app/actions/generateRandomProducts'
import ProductCard from '@/app/components/productCard'
import ProductSection from '@/app/components/productSection'
import React from 'react'

const DiscountProducts = ({ params, searchParams }) => {
      let discountProductsAll = generateRandomProducts.getDiscountProducts(20)
      if (searchParams) {
            if (searchParams.sortBy === "price_asc") {
                  discountProductsAll = generateRandomProducts.sortAsc(discountProductsAll)
            } else if (searchParams.sortBy === "price_desc") {
                  discountProductsAll = generateRandomProducts.sortDesc(discountProductsAll)
            } else {
                  discountProductsAll = generateRandomProducts.getDiscountProducts(20)
            }
      }
      return (
            <div className='flex flex-col'>
                  <ProductSection showAll={false} title="Discount Products" className="mb-4" />
                  <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {
                              discountProductsAll.map((item) => {
                                    return (
                                          <ProductCard product={item} locale={params.countryCode} />
                                    )
                              })
                        }
                  </div>

            </div>
      )
}

export default DiscountProducts
