import React from 'react'
import Header from '../component/Header'
import Section1 from '../component/Section1'
import Section2 from '../component/Section2'
import Section3 from '../component/Section3'
import Section4 from '../component/Section4'
import Navbar from '../component/shared/Navbar'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    )
}

export default LandingPage
