import React from "react";

import skills from "../images/skill-img.jpg";

let interval: NodeJS.Timeout | undefined;

const Skill = () => {
    const [skill1, setSkill1] = React.useState<number>(0);

    React.useEffect(() => {
        interval = setInterval(() => setSkill1(skill1 + 1), 500);
    }, []);

    React.useEffect(() => {
        if (interval && skill1 >= 40) clearInterval(interval);
    }, [skill1]);

    return (
        <section className="skills-section" id="skills">
            <div className="skills">
                <h4>Skills</h4>
                <h6>WordPress</h6>
                <div className="skillbar">
                    <div
                        className="skillbar-bar"
                        style={{ width: `${skill1}%` }}
                    ></div>
                    <div className="skillbar-percent">{skill1}%</div>
                </div>
                <h6>Adobe Illustrator</h6>
                <div className="skillbar">
                    <div
                        className="skillbar-bar"
                        style={{ width: "70%" }}
                    ></div>
                    <div className="skillbar-percent">70%</div>
                </div>
                <h6>Adobe Photoshop</h6>
                <div className="skillbar">
                    <div
                        className="skillbar-bar"
                        style={{ width: "80%" }}
                    ></div>
                    <div className="skillbar-percent">80%</div>
                </div>
                <h6>Photography</h6>
                <div className="skillbar">
                    <div
                        className="skillbar-bar"
                        style={{ width: "50%" }}
                    ></div>
                    <div className="skillbar-percent">50%</div>
                </div>
                <h6>Media</h6>
                <div className="skillbar">
                    <div
                        className="skillbar-bar"
                        style={{ width: "70%" }}
                    ></div>
                    <div className="skillbar-percent">70%</div>
                </div>
            </div>
            <img src={skills} alt="" />
        </section>
    );
};

export default Skill;
