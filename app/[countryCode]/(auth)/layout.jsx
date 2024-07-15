
import React from 'react'

const PageLayout = (props) => {
    return (
        <div className='h-screen flex items-center justify-center'>

            {props.children}

        </div>
    )
}

export default PageLayout
