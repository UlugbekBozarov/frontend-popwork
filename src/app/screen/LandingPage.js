import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/shared/Navbar'

const LandingPage = () => {
    return (
        <div style={{ paddingTop: "100px" }}>
            <div className="bg_header">
                <Navbar />
                <Header />
            </div>
        </div>
    )
}

export default LandingPage
