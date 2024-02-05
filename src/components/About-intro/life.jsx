import React from "react";
import Split from "../Split";
import AboutInfo1Data from "data/sections/my-life.json";

const MyLife = () => {
    return (
        <section className="intro-section section-padding pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="htit sm-mb30">
                            <h4>{AboutInfo1Data.title}</h4>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1 col-md-8">
                        <div className="text">
                            <Split>
                                <h6 className="wow txt mb-25 words chars splitting" data-splitting>
                                    {AboutInfo1Data.paragraph1}
                                </h6>
                                <h6 className="wow txt mb-25 words chars splitting" data-splitting>
                                    {AboutInfo1Data.paragraph2}
                                </h6>
                                <h6 className="wow txt words mb-25 chars splitting" data-splitting>
                                    {AboutInfo1Data.paragraph3}
                                </h6>
                                <h6 className="wow txt words chars splitting" data-splitting>
                                    {AboutInfo1Data.paragraph4}
                                </h6>
                            </Split>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyLife;
