import React, { useState } from 'react'
import UserMessage from '../user-message/UserMessage'
import './conversation.scss'

const Conversation = () => {
    const [message] = useState(["5 questions every week: your team members take 10 minutes to check in with you."])
    return (
        <section id="conversation">
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div className="section_title p-0 p-xl-5">
                            <h1>
                                Turn your conversations <span> into actions </span> and make your team move <span> forward week after week </span>
                            </h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div style={{position: "relative"}}>
                            <div className="img_block px-4">
                                <img className="w-100" src="/images/conversation/s_31.png" alt="s_31" />
                                <img src="/images/conversation/s_32.png" alt="s_32" />
                                <img src="/images/conversation/s_33.png" alt="s_33" />
                            </div>
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

export default Conversation
