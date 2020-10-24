import React from "react";

import work from "../images/work-img.jpg";
import work1 from "../images/work-img1.jpg";

const Work = () => {
    return (
        <section className="work-section" id="work">
            <h4>Work</h4>
            <nav className="work-menu">
                <button className="btn btn__default active">All</button>
                <button className="btn btn__default">Branding</button>
                <button className="btn btn__default">Photography</button>
                <button className="btn btn__default">Illutration</button>
            </nav>
            <figure className="featured-portfolio">
                <img src={work} alt="" />
                <div className="featured-portfolio_description">
                    <h6>Recent Project</h6>
                    <span className="primary-color">Branding, Photography</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempora itaque cum quaerat facere est commodi
                        delectus dicta impedit ipsum vero quod quo eligendi,
                        blanditiis quia alias tenetur neque nesciunt, totam?
                    </p>
                    <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men wh are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire.
                    </p>
                </div>
            </figure>

            <figure className="portfolio-item">
                <div className="portfolio-item_image">
                    <img src={work1} alt="" />
                </div>
                <figcaption className="portfolio-item_description">
                    <div className="title">
                        <h6>Recent Project</h6>
                        <span>Branding, Photography</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempora itaque cum quaerat facere est commodi
                        delectus dicta impedit ipsum vero quod quo eligendi,
                        blanditiis quia alias tenetur neque nesciunt, totam?
                    </p>
                </figcaption>
            </figure>
            <figure className="portfolio-item">
                <div className="portfolio-item_image">
                    <img src={work1} alt="" />
                </div>
                <figcaption className="portfolio-item_description">
                    <div className="title">
                        <h6>Recent Project</h6>
                        <span>Branding, Photography</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempora itaque cum quaerat facere est commodi
                        delectus dicta impedit ipsum vero quod quo eligendi,
                        blanditiis quia alias tenetur neque nesciunt, totam?
                    </p>
                </figcaption>
            </figure>
            <figure className="portfolio-item">
                <div className="portfolio-item_image">
                    <img src={work1} alt="" />
                </div>
                <figcaption className="portfolio-item_description">
                    <div className="title">
                        <h6>Recent Project</h6>
                        <span>Branding, Photography</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempora itaque cum quaerat facere est commodi
                        delectus dicta impedit ipsum vero quod quo eligendi,
                        blanditiis quia alias tenetur neque nesciunt, totam?
                    </p>
                </figcaption>
            </figure>
            <figure className="portfolio-item">
                <div className="portfolio-item_image">
                    <img src={work1} alt="" />
                </div>
                <figcaption className="portfolio-item_description">
                    <div className="title">
                        <h6>Recent Project</h6>
                        <span>Branding, Photography</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempora itaque cum quaerat facere est commodi
                        delectus dicta impedit ipsum vero quod quo eligendi,
                        blanditiis quia alias tenetur neque nesciunt, totam?
                    </p>
                </figcaption>
            </figure>
            <figure className="portfolio-item">
                <div className="portfolio-item_image">
                    <img src={work1} alt="" />
                </div>
                <figcaption className="portfolio-item_description">
                    <div className="title">
                        <h6>Recent Project</h6>
                        <span>Branding, Photography</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempora itaque cum quaerat facere est commodi
                        delectus dicta impedit ipsum vero quod quo eligendi,
                        blanditiis quia alias tenetur neque nesciunt, totam?
                    </p>
                </figcaption>
            </figure>
            <figure className="portfolio-item">
                <div className="portfolio-item_image">
                    <img src={work1} alt="" />
                </div>
                <figcaption className="portfolio-item_description">
                    <div className="title">
                        <h6>Recent Project</h6>
                        <span>Branding, Photography</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempora itaque cum quaerat facere est commodi
                        delectus dicta impedit ipsum vero quod quo eligendi,
                        blanditiis quia alias tenetur neque nesciunt, totam?
                    </p>
                </figcaption>
            </figure>
        </section>
    );
};

export default Work;
