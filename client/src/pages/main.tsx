import React from "react";

import Header from "../templates/header";
import Navigate from "../templates/navigate";
import About from "../templates/about";
import Skill from "../templates/skill";
import Experience from "../templates/experience";
import Education from "../templates/education";
import Work from "../templates/work";
import Reference from "../templates/reference";
import Blog from "../templates/blog";
import Contact from "../templates/contact";
import Footer from "../templates/footer";

interface Style {
    display: string;
}

const Main = () => {
    const [styles, setStyles] = React.useState<Style>({ display: "none" });

    const scrollListener = React.useCallback(() => {
        if (window.pageYOffset >= 320) setStyles({ display: "block" });
        else setStyles({ display: "none" });
    }, []);

    React.useEffect(() => {
        window.addEventListener("scroll", scrollListener);

        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    return (
        <>
            <Header />
            <Navigate />
            <span className="header-bg" />
            <main className="main">
                <About />
                <Skill />
                <Experience />
                <Education />
                <Work />
                <Reference />
                <Blog />
                <Contact />
            </main>
            <Footer />
            <a id="scroll-up" href="#top" style={styles} />
        </>
    );
};

export default Main;
