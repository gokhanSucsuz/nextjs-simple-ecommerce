
import Container from '@/app/components/container'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import React from 'react'

const PageLayout = (props) => {
    return (
        <div>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </div>
    )
}

export default PageLayout
