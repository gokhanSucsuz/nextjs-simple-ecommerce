import Link from 'next/link'
import React from 'react'

const FooterCompanySection = (props) => {
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Home</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link href={`/${props.countryCode}`} className="hover:underline">About Us</Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterCompanySection
