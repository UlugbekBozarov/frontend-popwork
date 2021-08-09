import React from 'react'

const UserMessage = ({img, left_right, bg, md, color, message}) => {
    return (
        <div className={"user_message " + md + " " + left_right}>
            <div className="message_block" style={{backgroundColor: bg, color: color}}>
                {
                    message.map((m, i) => {
                        return (
                            <p key={i}>{m}</p>
                        )
                    })
                }
            </div>
            <div className="user_image">
                <img src={img} alt="user" />
            </div>
        </div>
    )
}

export default UserMessage
