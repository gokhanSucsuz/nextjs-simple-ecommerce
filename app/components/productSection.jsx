import Link from 'next/link'
import React from 'react'

const ProductSection = (props) => {
    return (
        <div className={`flex justify-between items-center ${props.className}`}>
            <div className='text-2xl'>
                {props.title}
            </div>
            {
                props.showAll === false ? <></> : <div>
                    <Link href={props.href || "/"} className='text-sm text-blue-600'>Show All</Link>
                </div>
            }
        </div>
    )
}

export default ProductSection
