import React from 'react'

const ListsHeader = () => {
    return (
        <header className="pages-header circle-bg valign">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="cont mt-100 mb-50 text-center">
                            <h1 className="color-font fw-700">
                                Our Birthday / Christmas Lists!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="half sub-bg">
                <div className="circle-color">
                    <div className="gradient-circle"></div>
                    <div className="gradient-circle two"></div>
                </div>
            </div>
        </header>
    );
};

export default ListsHeader;