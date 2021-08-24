import React, { useState } from 'react'
import UserMessage from '../user-message/UserMessage'
import './expensive.scss'

const Expensive = () => {
    const [message] = useState(["We also offer Enterprise plan. If you want to positively impact your organisation, contact us via the chat"])
    const [s6] = useState([
        {
            img: "/images/expensive/1.png",
            text: "Plug and play, for teams of all sizes"
        },
        {
            img: "/images/expensive/2.png",
            text: "Dedicated team support to answer all your questions"
        },
        {
            img: "/images/expensive/3.png",
            text: "Available in English and French"
        },
        {
            img: "/images/expensive/4.png",
            text: "Works on mobile and desktop"
        },
        {
            img: "/images/expensive/5.png",
            text: "It's secure: data encryption, European hosting, GRPR compliant"
        }
    ])
    return (
        <section id="expensive" style={{backgroundImage: "url('/images/expensive/bg_s6.svg')"}}>
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 order-2 order-md-1">
                        <div className="left_block">
                            <p>Team</p>
                            <p>For managers who want to work better with their teams.</p>
                            <div className="price">
                                <h1>8€</h1>
                                <p>per user, per month</p>
                            </div>
                            <div className="form_try_it_now">
                                <div className="form_block mb-5 mb-sm-3">
                                    <div className="form-group d-flex">
                                        <input type="text" className="form-control" placeholder="yourname@company.com" />
                                        <button className="btn btn_rainbow d-none d-sm-block">Try it now</button>
                                    </div>
                                    <button className="btn btn_rainbow d-block d-sm-none" style={{width: "100%"}}>Try it now</button>
                                </div>
                                <p className="pt-4 pt-sm-0">Free 30-days trial, no credit card required</p>
                            </div>
                            <div className="plugin">
                                {
                                    s6.map((s, i) => {
                                        return (
                                            <h6 key={i}>
                                                <span>
                                                    <img src={s.img} alt={"img" + i} />
                                                </span>
                                                {
                                                    s.text
                                                }
                                            </h6>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 order-1 order-md-2">
                        <div className="section_title p-0 p-xl-5">
                            <h1>
                                <span> Less expensive </span> than a dysfunctional team
                            </h1>
                            <div className="message">
                                <UserMessage img="/images/users/user_4.png" left_right="right" md="sm" bg="#111" color="#FFF" message={message} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expensive
