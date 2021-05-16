import React from "react";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="contact py-5">
      <div className="container border">
        <div className="row ft-mm">
          <div className="col-10 mx-auto col-md-6 my-3 text-center">
            <h3 className="text-capitalize">
              <span className="mx-2">
                <MdEmail />
              </span>
              Sign Up To Our Newsletter
            </h3>
          </div>
          <div className="col-10 mx-auto col-md-6 my-3 d-flex align-items-center">
            <form action="" className="form-inline">
              <input
                type="text"
                className="form-control text-capitalize mx-2 my-2"
                placeholder="email"
              />
              <button type="submit" className="book__btn mx-2 my-2">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
