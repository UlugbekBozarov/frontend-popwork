import React from 'react'
import './contact.scss'

const Contact = () => {
    return (
        <section id="contact" style={{backgroundImage: "url('/images/contact/bg_contact.svg')"}}>
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 col-md-6">
                        <h1>Start using Popwork with your team today</h1>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-end">
                        <div className="form_try_it_now">
                            <div className="form_block mb-5 mb-sm-3">
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control" placeholder="yourname@company.com" />
                                    <button className="btn btn_rainbow d-none d-sm-block">Try it now</button>
                                </div>
                                <button className="btn btn_rainbow d-block d-sm-none" style={{ width: "100%" }}>Try it now</button>
                            </div>
                            <p className="pt-4 pt-sm-0">Free 30-days trial, no credit card required</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
