import Link from 'next/link'
import React from 'react'

const FooterPrivacySection = (props) => {
    console.log(props.countryCode)
    return (
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Privacy</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link href={`/${props.countryCode}`} className="hover:underline">Privacy Policy</Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterPrivacySection
