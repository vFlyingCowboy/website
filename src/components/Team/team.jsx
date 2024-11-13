import React, { useEffect } from "react";
import teamSkillsProgress from "common/teamSkillsProgress";
import tooltipEffect from "common/tooltipEffect";
import teamsDate from "data/sections/team.json";

const Team = () => {
  useEffect(() => {
    teamSkillsProgress();

    window.addEventListener('load', () => {
      setTimeout(() => {
        tooltipEffect()
      }, 0);
    })
  }, []);
  
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp md-mb30" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>My Children</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit mb-15">
                I have 2 Children!
              </h3>
              <p>
                Sophia, 10 is my stepdaughter and Terrance,3 is my son!
              </p>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    {teamsDate.teams.slice(0, 1).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(0, 1).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          {/*<img src={team.image} alt="" className="imago wow" />*/}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(1, 2).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(1, 2).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          {/*<img src={team.image} alt="" className="imago wow" />*/}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
