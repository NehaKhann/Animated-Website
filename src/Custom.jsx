import React from "react";
import { NavLink } from "react-router-dom";

const Custom = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2>
                    {props.text}
                    <strong className="brand-name"> Khan's Creatives</strong>
                  </h2>
                  <h3 className="my-3">
                    We are the team of talented developers making websites
                  </h3>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.image}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Custom;
