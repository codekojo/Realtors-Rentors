import React from "react";

function IconComponent({ icon, description, name }) {
  return (
    <div className="text-center ">
      {icon && icon}
      <p className="mb-0 text-white icon1">{description}</p>
      <p className="text-uppercase text-white icon2">{name}</p>
    </div>
  );
}

export default IconComponent;
