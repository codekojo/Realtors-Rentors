import React from "react";
import Logo from "../../assets/img/logo.png";
import { AiOutlineArrowRight } from "react-icons/ai";

function Footer() {
  return (
    <footer id="footer" className="footer py-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 px-3 text-center my-3">
            <img src={Logo} alt="" className="img-fluid" />
            <p className="text-secondary desc my-5 text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam quod quos deleniti, in ullam dolorem sequi nemo rem,
              recusandae, iure ratione. Maxime libero soluta, vitae nisi alias
              assumenda temporibus molestiae.
            </p>
            <a href="#read" className="book__btn p-2 text-white">
              read more
              <span>
                <AiOutlineArrowRight />
              </span>
            </a>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-5 mx-auto px-3 text-center my-3">
            <div className="row">
              <div className="col-12 text-center mb-3">
                <h1 className="about text-capitalize ">Contact Us</h1>
                <div className="title-underline my-3 bg-secondary">
                  <div className="title-underline-center"></div>
                </div>

                <NearBy name="123 Mian Street Venice, CA 9002" />
                <NearBy name="+1 230 25000" />
                <NearBy name="email@goole.com" />
                <NearBy name="Mon-Sat 8:00 AM - 9:00PM" />
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
