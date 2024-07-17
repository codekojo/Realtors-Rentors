import React from "react";
import { FaPhoneAlt, FaBed, FaWarehouse } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { MdPets } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import "./Banner.css";
import IconComponent from "../common/IconComponent";

function Banner() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 banner-info py-5 px-5">
          <h3 className="property-name">Santa Monica Bay Property</h3>
          <h1 className="property-type">Modern Apartment</h1>
          <p className="py-2 location">
            <span className="px-1">
              <FaPhoneAlt color="#61e786" size={19} />
            </span>
            1500 Santa Drive, Santa Monica, CA 90401
          </p>
          <p className="py-2 description">
            Experience the epitome of modern living in this stunning apartment
            located in the heart of Santa Monica. Featuring contemporary design,
            spacious rooms, and high-end amenities, this property offers
            everything you need for a comfortable and luxurious lifestyle.
          </p>
          <a href="#read" className="book__btn p-2">
            Read more
          </a>

          <div className="banner-info__footer d-flex justify-content-around">
            <IconComponent icon={<FaBed />} name="Bedrooms" description="3" />
            <IconComponent
              icon={<GiBathtub />}
              name="Bathrooms"
              description="2"
            />
            <IconComponent
              icon={<FaWarehouse />}
              name="Square Feet"
              description="4000"
            />
            <IconComponent
              icon={<MdPets />}
              name="Pets"
              description="Allowed"
            />
            <IconComponent
              icon={<FcMoneyTransfer />}
              name="Deposit"
              description="$3000"
            />
          </div>
        </div>

        <div className="col-lg-7 banner-img">
          <div className="banner-img__footer px-3">
            <div className="center-div">
              <p className="rent">Rent Price</p>
              <h4 className="amt">$1,535/mo</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
