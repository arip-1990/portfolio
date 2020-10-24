import React from "react";

import education from "../images/education-img.jpg";

const Education = () => {
    return (
        <section className="education-section" id="education">
            <h4>Education</h4>
            <div className="education">
                <div className="education_logo">
                    <img src={education} alt="" />
                </div>
                <div className="education_description">
                    <h6>University of Computer Science</h6>
                    <span className="primary-color">
                        Faculty of Computer Science, Information System, 2011 -
                        present
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium magnam consectetur vel in deserunt
                        aspernatur est reprehenderit sunt hic. Nulla tempora
                        soluta ea et odio, unde doloremque repellendus iure,
                        iste!
                    </p>
                </div>
            </div>
            <div className="education">
                <div className="education_logo">
                    <img src={education} alt="" />
                </div>
                <div className="education_description">
                    <h6>University of Fine Arts</h6>
                    <span className="primary-color">
                        Faculty of Fine Arts, 2008-2010
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium magnam consectetur vel in deserunt
                        aspernatur est reprehenderit sunt hic. Nulla tempora
                        soluta ea et odio, unde doloremque repellendus iure,
                        iste!
                    </p>
                </div>
            </div>
            <div className="education">
                <div className="education_logo">
                    <img src={education} alt="" />
                </div>
                <div className="education_description">
                    <h6>School of Graphic Design</h6>
                    <span className="primary-color">
                        Envato School of Design , 2002 - 2008
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium magnam consectetur vel in deserunt
                        aspernatur est reprehenderit sunt hic. Nulla tempora
                        soluta ea et odio, unde doloremque repellendus iure,
                        iste!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;
