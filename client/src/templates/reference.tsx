import React from "react";

import reference from "../images/reference-img.png";

const Reference = () => {
    return (
        <section className="reference-section" id="reference">
            <h4>Reference</h4>
            <div className="reference-list">
                <div className="reference">
                    <div className="reference_title">
                        <img src={reference} alt="" />
                        <div>
                            <h6>Atihse Ime</h6>
                            <span>CEO / Wall-E inc.</span>
                        </div>
                    </div>
                    <div className="reference_description">
                        <p>
                            Thirure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident. eprehen erit
                            in voluptate velit esse cillum dolore eu giat nulla
                            pariatur. Excepte sint occaecat cupidatat non
                            proident.
                        </p>
                    </div>
                </div>
                <div className="reference">
                    <div className="reference_title">
                        <img src={reference} alt="" />
                        <div>
                            <h6>Atihse Ime</h6>
                            <span>CEO / Wall-E inc.</span>
                        </div>
                    </div>
                    <div className="reference_description">
                        <p>
                            Thirure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident. eprehen erit
                            in voluptate velit esse cillum dolore eu giat nulla
                            pariatur. Excepte sint occaecat cupidatat non
                            proident.
                        </p>
                    </div>
                </div>
            </div>
            <div className="reference-control">
                <span className="reference-control_item active" />
                <span className="reference-control_item" />
                <span className="reference-control_item" />
            </div>
        </section>
    );
};

export default Reference;
