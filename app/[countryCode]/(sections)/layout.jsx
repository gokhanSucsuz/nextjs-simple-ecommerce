
import Container from '@/app/components/container'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import LeftBar from '@/app/components/leftBar'
import React from 'react'

const PageLayout = (props) => {
    return (
        <div>
            <Header {...props.params} />
            <div className='flex flex-wrap md:flex-nowrap mx-4'>
                <LeftBar />
                <Container>
                    {props.children}
                </Container>
            </div>
            <Footer {...props.params} />
        </div>
    )
}

export default PageLayout
