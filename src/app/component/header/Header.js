import React, { useState } from 'react'
import UserMessage from '../user-message/UserMessage'
import './header.scss'

const Header = () => {
    const [m] = useState([
        '/images/header/h_1.png',
        '/images/header/h_2.png',
        '/images/header/h_3.png',
        '/images/header/h_4.png',
        '/images/header/h_5.png',
        '/images/header/h_6.png'
    ])
    const [message] = useState(["Every week, Popwork asks a few simple questions to your team about what matters. It’s what we call a check-in. ✌️", "Popwork is also an intuitive workspace to prepare 1-to-1 meetings, share feedback and follow up on topics week after week."])

    return (
        <header id="header" style={{backgroundImage: "url('/images/header/bg.svg')"}}>
            <div className="container">
                <div className="title">
                    <h1>Make your and your team's lives easier with Popwork</h1>
                    <p>
                        Boost your team’s performance and engagement<br /> with great weekly 1-to-1 meetings
                    </p>
                </div>
                <div className="form" style={{ maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
                    <div className="form_try_it_now">
                        <div className="form_block">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="yourname@company.com" />
                                <button className="btn btn_rainbow d-none d-sm-block">
                                    Try it now
                                </button>
                            </div>
                        </div>
                        <button className="btn btn_rainbow d-sm-none" style={{width: "100%"}}>
                            Try it now
                        </button>
                        <div className="form_description">
                            <p>Free 30-days trial, no credit card required</p>
                        </div>
                    </div>
                </div>
                <div className="teams">
                    <div className="teams_container">
                        {
                            m.map((r, i) => {
                                return (
                                    <div className="team_block" key={i}>
                                        <img src={r} alt="team" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="teams_description">
                        <p>Their teams and hundreds more are using Popwork - in person or remote.</p>
                    </div>
                    <div className="d-flex justify-content-center mt-4 team_icon">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                                <path d="M18.0015 24.7455V11.2455" stroke="black" strokeWidth="8.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.6265 19.1205L18.0015 24.7455L12.3765 19.1205" stroke="black" strokeWidth="8.75" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.25153 17.9955C2.25153 22.1726 3.9109 26.1787 6.86459 29.1324C9.81829 32.0861 13.8244 33.7455 18.0015 33.7455C22.1787 33.7455 26.1848 32.0861 29.1385 29.1324C32.0922 26.1787 33.7515 22.1726 33.7515 17.9955C33.7515 13.8183 32.0922 9.81225 29.1385 6.85855C26.1848 3.90485 22.1787 2.24548 18.0015 2.24548C13.8244 2.24548 9.81829 3.90485 6.86459 6.85855C3.9109 9.81225 2.25153 13.8183 2.25153 17.9955V17.9955Z" stroke="black" strokeWidth="8.75" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="36" height="36" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="message">
                    <div className="block">
                        <UserMessage img="/images/users/user_1.png" left_right="left" bg="#FFF" color="#111111" message={message} />
                    </div>
                </div>
            </div>
            <div className="bg_img">
                {/* <img src={logo} alt="logo" /> */}
            </div>
        </header>
    )
}

export default Header
