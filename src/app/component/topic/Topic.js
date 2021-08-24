import React, { useState } from 'react'
import UserMessage from '../user-message/UserMessage'
import './topic.scss'

const Topic = () => {
    const [message] = useState(["Mood, achievements, priorities, challenges, topics for discussion: Popwork’s workspace includes it all."])
    return (
        <section id="topic">
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center order-2 order-md-1 p-3 p-xl-5">
                        <div className="w-100">
                            <div className="img_block">
                                <img src="/images/topic/s_21.png" alt="s_21" />
                            </div>
                            <UserMessage img="/images/users/user_3.png" left_right="left" md="sm" bg="#111" color="#FFF" message={message} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2 p-3 p-xl-5">
                        <div className="section_title">
                            <h1>
                                Focus on the <span> right topics </span> and regularly share <span> feedback </span> with each team member
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topic
