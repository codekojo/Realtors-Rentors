import React from "react";

import { AiOutlinePlus } from "react-icons/ai";
function GallerySection({ img }) {
  return (
    <div className="col-lg-6 mx-auto mb-4">
      <div className="gallery-img-container ">
        <img src={img} alt="" className="img-fluid gallery-img" />
        <a href="#room" className="gallery-info">
          Room
        </a>
        <div className="gallery-icon">
          <AiOutlinePlus size={30} color="white" />
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
