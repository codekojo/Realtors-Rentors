import React from "react";

function RightAboutComponent() {
  return (
    <div className="col-10 col-md-6 mx-auto my-3">
      <div className="row">
        <div className="col text-center mb-3">
          <h3 className="title-prop">renters realtors</h3>
          <h1 className="about text-capitalize">about us</h1>
          <div className="title-underline my-3 bg-secondary">
            <div className="title-underline-center"></div>
          </div>
          <p className="w-75 mx-auto desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            itaque.
          </p>
        </div>
      </div>

      <h3 className="text-uppercase mb-3 text-left book-now">
        Book now today!!!
      </h3>
      <blockquote className="blockquote text-right mb-3">
        <p className="mb-0 block-title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, quos.
        </p>
        <footer className="blockquote-footer">Jack Deon</footer>
      </blockquote>

      <p className="lead text-muted text-left ld-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
        ducimus ab corporis doloribus eius. Laboriosam?
      </p>
      <a href="####" className="book__btn p-2">
        book now
      </a>
    </div>
  );
}

export default RightAboutComponent;
