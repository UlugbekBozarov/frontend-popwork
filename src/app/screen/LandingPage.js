import React from 'react'
import Header from '../component/Header'
import Section1 from '../component/Section1'
import Section2 from '../component/Section2'
import Section3 from '../component/Section3'
import Section4 from '../component/Section4'
import Section5 from '../component/Section5'
import Section6 from '../component/Section6'
import Section7 from '../component/Section7'
import Section8 from '../component/Section8'
import Footer from '../component/shared/Footer'
import Navbar from '../component/shared/Navbar'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Section1 />
            <div className="bg_s23">
                <Section2 />
                <Section3 />
            </div>
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Footer />
        </div>
    )
}

export default LandingPage
