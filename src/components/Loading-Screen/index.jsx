import React from "react";
import loadingPace from "common/loadingPace";
import appData from "data/app.json";

const LoadingScreen = () => {

  React.useEffect(() => {
    let bodyEl = document.querySelector("body");

    if (appData.showLoading) {
      loadingPace();
      if (bodyEl.classList.contains("hideX")) bodyEl.classList.remove("hideX");
    } else {
      bodyEl.classList.add("hideX");
    }
  }, []);

  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div className="loading">
          <span>E</span>
          <span>r</span>
          <span>i</span>
          <span>c</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>t</span>
          <span>e</span>
          <span>i</span>
          <span>n</span>
          <span>e</span>
          <span>r</span>
        </div>
        <div id="preloader"></div>
      </div>
    </>
  );
};

export default LoadingScreen;
