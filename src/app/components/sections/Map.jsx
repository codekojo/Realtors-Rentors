import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Map() {
  return (
    <section id="place" className="places py-5">
      <div className="container">
        <div className="row">
          <div className="col text-center mb-3">
            <h3 className="title-prop">Renters Realtors</h3>
            <h1 className="about text-uppercase ">Nearby Places</h1>
            <div className="title-underline my-3 bg-secondary">
              <div className="title-underline-center"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-8 my-3 ">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798973623!2d-74.25987008509001!3d40.69767006660362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1621183979245!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-3 d-flex flex-column justify-content-center">
            <NearBy name="School" miles="2.3 miles" />
            <NearBy name="Shopping Mall" miles="2.3 miles" />
            <NearBy name="Bars" miles="2.3 miles" />
            <NearBy name="Restaurants" miles="2.3 miles" />
            <NearBy name="Hospitals" miles="2.3 miles" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;

function NearBy({ name, miles }) {
  return (
    <div className="div d-flex justify-content-between align-items-center mb-3 book__btn p-2 ">
      <h6>
        <span className="mr-2">
          <AiOutlineArrowRight size={25} />
        </span>
        {name}
      </h6>
      <h6>{miles}</h6>
    </div>
  );
}
