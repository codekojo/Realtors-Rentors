import React from "react";

function RightAboutComponent() {
  return (
    <div className="col-10 col-md-6 mx-auto my-3">
      <div className="row">
        <div className="col text-center mb-3">
          <h3 className="title-prop">Renters Realtors</h3>
          <h1 className="about text-capitalize">About Us</h1>
          <div className="title-underline my-3 bg-secondary">
            <div className="title-underline-center"></div>
          </div>
          <p className="w-75 mx-auto desc">
            At Renters Realtors, we believe in making your rental experience
            seamless and enjoyable. With a wide range of properties and a
            dedicated team, we help you find the perfect place to call home.
          </p>
        </div>
      </div>

      <h3 className="text-uppercase mb-3 text-left book-now">
        Book Your Dream Home Today!
      </h3>
      <blockquote className="blockquote text-right mb-3">
        <p className="mb-0 block-title">
          "Finding a place to live should be easy and stress-free. Renters
          Realtors made that possible for me."
        </p>
        <footer className="blockquote-footer">Jack Deon</footer>
      </blockquote>

      <p className="lead text-muted text-left ld-text">
        We are committed to providing exceptional service and support to our
        clients. Whether you are looking for a cozy apartment or a spacious
        house, we have options to suit all your needs. Our team is here to guide
        you through every step of the rental process.
      </p>
      <a href="####" className="book__btn p-2">
        Book Now
      </a>
    </div>
  );
}

export default RightAboutComponent;
