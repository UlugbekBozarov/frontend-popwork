import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

import './game_changer_team.scss'

// install Swiper modules
SwiperCore.use([Pagination]);

const GameChangerTeam = () => {
    const [s5] = useState([
        {
            id: 1,
            carousel: [
                {
                    brandImg: "/images/game-changer-team/1/brand_s11.png",
                    position: "Executive",
                    description: "This gorgeous tool was immediately adopted by the team. It sets the right dynamics without any extra mental load.",
                    fullName: "Clara Vaisse",
                    useImg: "/images/game-changer-team/1/user_s11.png"
                },
                {
                    brandImg: "/images/game-changer-team/1/brand_s12.png",
                    position: "Manager",
                    description: "With Popwork, I have access to all the important information of my team.",
                    fullName: "Aliénor Behaghel",
                    useImg: "/images/game-changer-team/1/user_s12.png"
                },
                {
                    brandImg: "/images/game-changer-team/1/brand_s13.png",
                    position: "Manager",
                    description: "After a few weeks, I can’t imagine managing my team without Popwork.",
                    fullName: "Antoine Loredo",
                    useImg: "/images/game-changer-team/1/user_s13.png"
                },
                {
                    brandImg: "/images/game-changer-team/1/brand_s13.png",
                    position: "Executive",
                    description: "It’s super user friendly to follow your team and discuss the right topics",
                    fullName: "Benoit Yèche",
                    useImg: "/images/game-changer-team/1/user_s14.png"
                }
            ]
        },
        {
            id: 1,
            carousel: [
                {
                    brandImg: "/images/game-changer-team/2/brand_s21.png",
                    position: "Manager",
                    description: "Clear, simple and efficient.",
                    fullName: "Grégoire Tayeau",
                    useImg: "/images/game-changer-team/2/user_s21.png"
                },
                {
                    brandImg: "/images/game-changer-team/2/brand_s22.png",
                    position: "Team member",
                    description: "With Popwork, I can focus on the right topics with my manager and make progress week after week.",
                    fullName: "Jeanne Latil-Flamme",
                    useImg: "/images/game-changer-team/2/user_s22.png"
                },
                {
                    brandImg: "/images/game-changer-team/2/brand_s23.png",
                    position: "Team member",
                    description: "Popwork helps me prioritize my work every week.",
                    fullName: "Marie-Louise Nielsen",
                    useImg: "/images/game-changer-team/2/user_s23.png"
                }
            ]
        },
        {
            id: 1,
            carousel: [
                {
                    brandImg: "/images/game-changer-team/3/brand_s31.png",
                    position: "Manager",
                    description: "Popwork helps to spot and tackle topics with anticipation without micromanaging things. Best no bullshit tool!",
                    fullName: "Tancrède Le Merrer",
                    useImg: "/images/game-changer-team/3/user_s31.png"
                },
                {
                    brandImg: "/images/game-changer-team/3/brand_s32.png",
                    position: "Manager",
                    description: "Popwork gives an intuitive and clear framework that facilitates feedback and follow-up.",
                    fullName: "Mélanie Babinot",
                    useImg: "/images/game-changer-team/3/user_s32.png"
                },
                {
                    brandImg: "/images/game-changer-team/3/brand_s33.png",
                    position: "Executive",
                    description: "Popwork helps me structure the topics of my team; I save time every week !",
                    fullName: "Nelson Burton",
                    useImg: "/images/game-changer-team/3/user_s33.png"
                },
                {
                    brandImg: "/images/game-changer-team/3/brand_s34.png",
                    position: "Executive",
                    description: "Great tool that allows me to take the pulse and bring up topics that are not necessarily on my radar.",
                    fullName: "Nicolas Chagny",
                    useImg: "/images/game-changer-team/3/user_s34.png"
                }
            ]
        }
    ])
    return (
        <section id="game_changer_team">
            <div className="title">
                <h1>Popwork is a game changer for teams</h1>
            </div>
            <div>
                {
                    s5.map((car, i) => {
                        return (
                            <div key={i}>
                                <>
                                    <Swiper slidesPerView={1} spaceBetween={30} loop={true} 
                                    pagination={{
                                        "clickable": true
                                    }}
                                        breakpoints={{
                                            "700": {
                                                "slidesPerView": (i % 2 === 1 ? 2 : 1),
                                                "spaceBetween": 50
                                            },
                                            "1200": {
                                                "slidesPerView": (i % 2 === 1 ? 3 : 2),
                                                "spaceBetween": 50
                                            }
                                        }} className={"mySwiper " + (i === 0 ? "p_t" : i === (s5.length - 1) ? "p_b" : "") + " " + (i % 2 === 0 ? "p_juft" : "p_toq")} key={i} >
                                        {
                                            car.carousel.map((c, j) => {
                                                return (
                                                    <SwiperSlide className="h-100" key={j}>
                                                        <div className="card">
                                                            <div className="card_title">
                                                                <img src={c.brandImg} alt={"img_" + i + "_" + j} />
                                                                <span>{c.position}</span>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="description">
                                                                    <p>{c.description}</p>
                                                                </div>
                                                                <div className="user_img">
                                                                    <img src={c.useImg} alt={"user_" + i + "" + j} />
                                                                </div>
                                                            </div>
                                                            <div className="card_f">
                                                                <p>{c.fullName}</p>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default GameChangerTeam
