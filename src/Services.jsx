import React from "react";
import Card from "./Card";
import Data from "./Data";

const Services = () => {
  return (
    <div>
      <div className="my-5">
        <h2 className="text-center"> Our Services </h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row" style={{ rowGap: "15px" }}>
              {Data.map((value, index) => {
                return (
                  <Card
                    key={index}
                    heading={value.heading}
                    image={value.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
