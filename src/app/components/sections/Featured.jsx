import React from "react";
import "./Featured.css";
import FeaturedComponentss from "../common/FeaturedComponent";

function Featured() {
  return (
    <section id="featured" className="py-5 ft-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h3 className="title-prop">renters realtors</h3>
            <h1 className="about text-capitalize">Featured properties</h1>
            <div className="title-underline my-3 bg-secondary">
              <div className="title-underline-center"></div>
            </div>
            <p className="w-75 mx-auto desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              itaque.
            </p>
          </div>
          <FeaturedComponentss />
        </div>
      </div>
    </section>
  );
}

export default Featured;
