import React from "react";

import map from "../images/map.jpg";

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <h4>Contact Information</h4>
            <div className="contact-address">
                <div className="contact-address_map">
                    <img src={map} alt="" />
                </div>
                <div className="contact-address_info">
                    <ul>
                        <li>
                            <h6>Address</h6>
                            <p>R/13 Creative Town, Bangladesh</p>
                        </li>
                        <li>
                            <h6>Phone</h6>
                            <a href="tel:+79886463659">+7 (988) 646 36 59</a>
                        </li>
                        <li>
                            <h6>Email</h6>
                            <a href="mailto:dev@arip.info">dev@arip.info</a>
                        </li>
                    </ul>
                </div>
            </div>

            <h4>Feel Free To Contact Me</h4>
            <form className="contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <textarea placeholder="Message" />
            </form>
            <div className="contact-btn">
                <button className="btn btn__lg btn__dark">Cancel</button>
                <button className="btn btn__lg btn__primary">Send</button>
            </div>
        </section>
    );
};

export default Contact;
