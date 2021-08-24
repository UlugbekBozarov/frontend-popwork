import React, { useState } from 'react'
import UserMessage from '../user-message/UserMessage'
import './management.scss'

const Management = () => {
    const [message] = useState(["Discover Popwork's resources on management. No big theories, only best practices and actionable tips based on the experience of hundreds of managers.", "Already thousands of downloads."]);
    return (
        <section id="management" style={{backgroundImage: "url('/images/management/bg_s7.svg')"}}>
            <div className="container">
                <div className="title">
                    <h1>The future of management</h1>
                    <p>At Popwork, we believe there is a <span>better way to manage people.</span></p>
                    <p>Management is the very foundation of every organisation, impacting the way we perform and find purpose at work.</p>
                    <p>Yet for too long, <span style={{background: "#FDE49B"}}>managers have been left alone</span> and lack support to manage their teams.</p>
                    <p><span>Popwork is the first tool that helps managers and team members work better together - week after week.</span> Designed by and for teams, Popwork immediately fits into your day-to-day.</p>
                    <p><span>Choosing Popwork is choosing to improve the way your team works.</span></p>
                </div>
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex align-items-end">
                        <UserMessage img="/images/users/user_5.png" left_right="left" md="sm" bg="#111" color="#FFF" message={message} />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row m-0 img_block">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <img src="/images/management/book_1.png" alt="book" />
                                <p>Download</p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <img src="/images/management/book_2.png" alt="book" />
                                <p>Download</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Management
