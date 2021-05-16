import React from "react";
import livingRoom from "../../assets/img/livingRoom2.jpeg";
import livingRoom2 from "../../assets/img/livingRoom.jpeg";
import kitchen from "../../assets/img/kitchen.jpeg";
import bedroom from "../../assets/img/bedroom.jpeg";

import { AiOutlinePlus } from "react-icons/ai";
import GallerySection from "../common/GallerySection";

function Gallery() {
  return (
    <section id="gallery" className="gallery py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h3 className="title-prop">renters realtors</h3>
            <h1 className="about text-capitalize">Our Gallery</h1>
            <div className="title-underline my-3 bg-secondary">
              <div className="title-underline-center"></div>
            </div>
            <p className="w-75 mx-auto desc text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              itaque.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-around mb-4 flex-wrap">
            <a href="###" className="book__btn px-4 py-1">
              All
            </a>
            <a href="###" className="book__btn px-4 py-1">
              living room
            </a>
            <a href="###" className="book__btn px-4 py-1">
              kitchen
            </a>
            <a href="###" className="book__btn px-4 py-1">
              bedroom
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-10 col-lg-6 mx-auto my-3">
            <div className="gallery-img-container">
              <img src={livingRoom} alt="" className="img-fluid gallery-img" />
              <a href="#room" className="gallery-info">
                Room
              </a>
              <span className="gallery-icon">
                <AiOutlinePlus />
              </span>
            </div>
          </div>
          <div className="col-10 col-lg-6 mx-auto my-3 ">
            <div className="row d-flex justify-content-between align-items-between">
              <GallerySection img={livingRoom2} />
              <GallerySection img={kitchen} />
              <GallerySection img={bedroom} />
              <GallerySection img={livingRoom2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
