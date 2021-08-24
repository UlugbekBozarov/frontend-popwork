import React, { useState } from 'react'
import UserMessage from '../user-message/UserMessage'
import './testimonial.scss'

const Testimonial = () => {
    const [message] = useState(["5 questions every week: your team members take 10 minutes to check in with you."])
    return (
        <section id="testimonial">
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div className="section_title">
                            <h1>
                                Take your <span> team management </span> to the next level with well prepared 1-to-1 <span> meetings </span>
                            </h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <div className="img_block" >
                                <img src="/images/testimonial/s_11.png" alt="s_11" />
                                <img src="/images/testimonial/s_12.png" alt="s_12" />
                                <div className="pa_img">
                                    <img src="/images/testimonial/s_13.png" alt="s_13" />
                                </div>
                            </div>
                            <div className="pl-0 pl-md-4">
                                <UserMessage img="/images/users/user_2.png" left_right="right" md="sm" bg="#111" color="#FFF" message={message} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
