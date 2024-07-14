import generateRandomProducts from '@/app/actions/generateRandomProducts'
import ProductCard from '@/app/components/productCard'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const SearchPage = ({ params, searchParams }) => {
    let searchResult = []
    if (!searchParams.q || searchParams.q === "") {
        redirect("/")
    } else {
        searchResult = generateRandomProducts.searchData(searchParams.q)

    }
    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl text-center mb-4'>
                Search Results...
            </h1>
            {
                searchResult.length === 0 ? <div className='flex flex-col gap-4'>
                    <h1 className='text-lg'>Could not find any result for your search... </h1>
                    <Link href={`/${params.countryCode}/main`}>Return Home Page</Link>
                </div> :
                    <>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap'>
                            {
                                searchResult.map((item) => {
                                    return (
                                        <ProductCard key={item.productId} locale={params.countryCode} product={item} />
                                    )
                                })
                            }
                        </div>
                    </>
            }

        </div>
    )
}

export default SearchPage
