import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function ServicesComponent({ title, icon }) {
  return (
    <div className="col-10 mx-auto col-sm-6 d-flex justify-content-around my-3">
      <div className="services-icon align-self-center">{icon}</div>
      <div className="services-info text-capitalise">
        <h6 className="text-white about-title">{title}</h6>
        <p className="text-secondary desc">
          Discover more about our {title.toLowerCase()} services and how we can
          help you achieve your goals.
        </p>
        <a href="#read" className="book__btn p-2 text-white">
          Read More
          <span className="ml-2">
            <AiOutlineArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}

export default ServicesComponent;
