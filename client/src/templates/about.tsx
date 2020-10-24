import React from "react";

import profile from "../images/profile.jpg";
import signature from "../images/signature.png";

const About = () => {
    return (
        <section className="about-section">
            <div className="hero">
                <a className="hero_logo" href="/">
                    <img src={profile} alt="" />
                </a>
                <div className="hero_info">
                    <h1>I’m Arip</h1>
                    <p>Photographer, Web Designer, Speaker, Writer</p>
                </div>
                <div className="hero_social">
                    <a className="icon-twitter" href="/" />
                    <a className="icon-facebook" href="/" />
                    <a className="icon-instagram" href="/" />
                    <a className="icon-vk" href="/" />
                </div>
                <div className="hero_btn">
                    <a className="btn btn__lg" href="#contact">
                        Hire Me
                    </a>
                    <a className="btn btn__lg btn__primary" href="#">
                        Download CV
                    </a>
                </div>
            </div>
            <div className="about" id="about">
                <div>
                    <h4>About</h4>
                    <section className="about_content">
                        <span className="primary-color">
                            Hello, I am Arip, Photographer, Web Designer,
                            Speaker and Writer
                        </span>
                        <p>
                            Aenean nonummy hendrerit mauris. Donec sit Phasellus
                            portFusce suscipit varius mium sociis natoque
                            penatibus et magnis dis parturent montes, nascetur
                            ridiculus mus. Nulla dui.Fusce feugiat malesuada
                            odiMorbi nunc odio, gravida at, cursus nec, luctus.
                        </p>
                        <div className="border-dashed" />
                        <img src={signature} alt="" />
                    </section>
                </div>
                <div>
                    <h4>Basic Information</h4>
                    <section className="info-list">
                        <h6>Address:</h6>
                        <p>43/R/13 Creative Town, Bangladesh</p>
                        <h6>Date of Birth:</h6>
                        <p>1 January, 1992</p>
                        <h6>Place of Birth:</h6>
                        <p>Dhaka, Bangladesh</p>
                        <h6>Language:</h6>
                        <p>Bangla, English, German, French</p>
                        <h6>Gender:</h6>
                        <p>Male</p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default About;
