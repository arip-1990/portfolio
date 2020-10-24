import React from "react";

let offsetY = 0;

interface Style {
    marginTop: number;
}

const Navigate = () => {
    const [fixedNav, setFixedNav] = React.useState<boolean>(false);
    const [styles, setStyles] = React.useState<Style>({ marginTop: 0 });

    const scrollListener = React.useCallback(() => {
        if (window.pageYOffset >= 96) setFixedNav(true);
        else setFixedNav(false);

        if (window.pageYOffset > 128 && window.pageYOffset > offsetY)
            setStyles({ marginTop: -60 });
        else setStyles({ marginTop: 0 });

        offsetY = window.pageYOffset;
    }, []);

    React.useEffect(() => {
        window.addEventListener("scroll", scrollListener);

        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    let classList = ["navigation"];
    if (fixedNav) classList.push("sticky");

    return (
        <nav className={classList.join(" ")} style={styles}>
            <ul className="menu">
                <li className="menu_item">
                    <a href="./#about">About</a>
                </li>
                <li className="menu_item">
                    <a href="./#skills">Skills</a>
                </li>
                <li className="menu_item">
                    <a href="./#experience">Experience</a>
                </li>
                <li className="menu_item">
                    <a href="./#education">Education</a>
                </li>
                <li className="menu_item">
                    <a href="./#work">Work</a>
                </li>
                <li className="menu_item">
                    <a href="./#reference">Reference</a>
                </li>
                <li className="menu_item dropdown icon">
                    <a href="./#blog">Blog</a>
                    <ul className="dropdown_menu">
                        <li className="menu_item">
                            <a href="./#">Blog Layout</a>
                        </li>
                        <li className="menu_item">
                            <a href="./#">Single Post</a>
                        </li>
                    </ul>
                </li>
                <li className="menu_item">
                    <a href="./#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigate;
