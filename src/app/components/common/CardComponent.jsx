import React from "react";
import { GoLocation } from "react-icons/go";

function CardComponent({ img, desc, loc }) {
  return (
    <div className="card">
      <div className="img-container ">
        <img src={img} alt="" className="card-img-top" />
        <div className="card-body">
          <div className="card-title text-capitalize">
            <h5 className="mb-2 p-name">{desc}</h5>
            <p className="p-street">
              <span>
                <GoLocation />
              </span>
              {loc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
