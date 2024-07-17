import React from "react";
import Logo from "../../assets/img/logo.png";
import { AiOutlineArrowRight } from "react-icons/ai";

function Footer() {
  return (
    <footer id="footer" className="footer py-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 px-3 text-center my-3">
            <img src={Logo} alt="Logo" className="img-fluid" />
            <p className="text-secondary desc my-5">
              Welcome to Renters Realtors, your trusted partner in finding the
              perfect place to call home. Whether you're renting or selling,
              we're here to help you every step of the way.
            </p>
            <a href="#read" className="book__btn p-2 text-white">
              Read More
              <span>
                <AiOutlineArrowRight />
              </span>
            </a>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-5 mx-auto px-3 text-center my-3">
            <div className="row">
              <div className="col-12 text-center mb-3">
                <h1 className="about text-capitalize">Contact Us</h1>
                <div className="title-underline my-3 bg-secondary">
                  <div className="title-underline-center"></div>
                </div>

                <NearBy name="123 Main Street, Venice, CA 90029" />
                <NearBy name="+1 230 25000" />
                <NearBy name="email@example.com" />
                <NearBy name="Mon-Sat 8:00 AM - 9:00 PM" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function NearBy({ name, miles }) {
  return (
    <div className="div d-flex justify-content-between align-items-center mb-3 book__btn p-2 text-white ">
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
