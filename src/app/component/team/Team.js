import React, { useState } from 'react'
import './team.scss'

const Team = () => {
    const [s4] = useState([
        {
            img: "/images/team/s_user_1.png",
            title: "C-Levels",
            description: "Create the conditions needed for effective management at all levels of the company"
        },
        {
            img: "/images/team/s_user_2.png",
            title: "Senior managers",
            description: "Gain time and boost your team’s performance and engagement week after week"
        },
        {
            img: "/images/team/s_user_3.png",
            title: "Junior managers",
            description: "Start off on the right foot and rely on a simple and proven management framework"
        },
        {
            img: "/images/team/s_user_4.png",
            title: "Remote managers",
            description: "Maintain close contact with your team remotely while developing autonomy"
        }
    ])

    return (
        <section id="team" style={{backgroundImage: "url('/images/team/bg_team.svg')"}}>
            <div className="container">
                <div className="title">
                    <h1>Is Popwork right for my team ?</h1>
                </div>
                <div className="row m-0">
                    {
                        s4.map((s, i) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-3" key={i}>
                                    <div className="section_card">
                                        <div className="img_block">
                                            <img src={s.img} alt={i} />
                                        </div>
                                        <div className="body">
                                            <h6>{s.title}</h6>
                                            <p>{s.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Team
