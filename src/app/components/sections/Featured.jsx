import React from "react";
import "./Featured.css";
import FeaturedComponent from "../common/FeaturedComponent";

function Featured() {
  return (
    <section id="featured" className="py-5 ft-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h3 className="title-prop">Renters Realtors</h3>
            <h1 className="about text-capitalize">Featured Properties</h1>
            <div className="title-underline my-3 bg-secondary">
              <div className="title-underline-center"></div>
            </div>
            <p className="w-75 mx-auto desc">
              Explore our selection of featured properties that offer the best
              in modern living and convenience.
            </p>
          </div>
          <FeaturedComponent />
        </div>
      </div>
    </section>
  );
}

export default Featured;
