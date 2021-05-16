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
        <div className="col-lg-5 banner-info py-5 px-5 ">
          <h3 className="property-name">Santa Monica Bay Property</h3>
          <h1 className="property-type">Modern Apartment</h1>
          <p className="py-2 location">
            <span className="px-1">
              <FaPhoneAlt color="#61e786" size={19} />
            </span>
            1500 santa drive santa monica, ca 90
          </p>
          <p className="py-2 description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            doloremque, dolore cupiditate hic iure dolorum?
          </p>
          <a href="#read" className="book__btn p-2">
            read more
          </a>

          <div className="banner-info__footer d-flex justify-content-around">
            <IconComponent icon={<FaBed />} name="Bed" description="3" />
            <IconComponent icon={<GiBathtub />} name="Bath" description="2" />
            <IconComponent
              icon={<FaWarehouse />}
              name="SQ.FT"
              description="4000"
            />
            <IconComponent
              icon={<MdPets />}
              name="Allowed"
              description="PETS"
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
              <p className="rent">rent price</p>
              <h4 className="amt">$1,535/mo</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
