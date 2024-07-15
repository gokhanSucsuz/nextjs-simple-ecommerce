import React from 'react'

const Container = (props) => {
    return (
        <div className='container rounded-lg mt-10 mx-auto max-w-screen-xl min-h-screen pt-8 pb-16 px-2'>

            {
                props.children
            }
        </div>
    )
}

export default Container
