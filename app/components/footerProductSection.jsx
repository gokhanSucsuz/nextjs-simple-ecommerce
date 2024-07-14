import Link from 'next/link'
import React from 'react'

const FooterProductSection = (props) => {
    console.log(props.countryCode)
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Products</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link href={`/${props.countryCode}`} className="hover:underline">Product1</Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterProductSection
