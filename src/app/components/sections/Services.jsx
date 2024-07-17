import React from "react";
import featured2 from "../../assets/img/featured-2.jpeg";

import ServicesComponent from "../common/ServicesComponent";

import { FaLightbulb, FaGoodreads } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { IoIosTime } from "react-icons/io";

function Services() {
  return (
    <section id="services" className="services py-5">
      <div className="container">
        <div className="row flex-lg-row-reverse">
          <div className="col-lg-8 my-3">
            <div className="row">
              <div className="col-12 text-center mb-3">
                <h3 className="title-prop">renters realtors</h3>
                <h1 className="about text-capitalize text-white">
                  Our Services
                </h1>
                <div className="title-underline my-3 bg-secondary">
                  <div className="title-underline-center"></div>
                </div>
                <p className="w-75 mx-auto desc text-white">
                  At Santa Monica Bay Property, we offer a range of premium
                  services tailored to enhance your living experience. Whether
                  you're looking for a modern apartment, luxurious amenities, or
                  pet-friendly spaces, we ensure every detail meets your
                  expectations.
                </p>
              </div>
            </div>
            <div className="row">
              <ServicesComponent
                icon={<FaGoodreads />}
                title="Best Neighbourhood"
              />
              <ServicesComponent
                icon={<FaLightbulb />}
                title="Power And Energy"
              />
              <ServicesComponent
                icon={<AiTwotoneLike />}
                title="Awesome Amenities"
              />
              <ServicesComponent icon={<IoIosTime />} title="24 Hour Service" />
            </div>
          </div>

          <div className="col-10 mx-auto col-lg-4 align-self-center">
            <div className="img-container">
              <img src={featured2} alt="" className="img-fluid" />
              <a href="###d" className="text-capitalize services-info-text">
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
