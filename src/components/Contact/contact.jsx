import React from "react";
import "./contact.css"
const Contact = () => {
    return (
        <>
            <div className="contact_area">
                <div>
                    <div className="contact">
                        <h1 className="leave">Leave a Reply</h1>
                        <p className="paragraph">Your email address will not be published. Required fields are marked *</p>
                        <form>
                            <input type="text" placeholder="Name" className="name" />
                            <input type="text" placeholder="Email" className="email" />
                            <input type="text" placeholder="Write a Comment" className="comment" />
                        </form>
                        <button className="submit">SUBMIT MORE➡</button>
                    </div>
                </div>
                <div className="div">

                    <h2>Feel Free To Contact Me Anytime</h2>

                    <div className="info_box">
                        <p>Email</p>
                        <h2>Davidmatias333@Gmail.Com</h2>
                    </div>

                    <div className="info_box">
                        <p>Phone</p>
                        <h2>+(2) 871 382 023</h2>
                    </div>

                    <div className="info_box">
                        <p>Address</p>
                        <h2>Victoria Street London</h2>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Contact
