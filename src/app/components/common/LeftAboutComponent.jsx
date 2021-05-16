import React from "react";
import Slider from "react-slick";
import CardComponent from "../common/CardComponent";

function LeftAboutComponent() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <div className="col-10 col-md-6 mx-auto my-3">
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <CardComponent
              img={image.img}
              loc={image.location}
              desc={image.desc}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default LeftAboutComponent;

const images = [
  {
    id: 1,
    img: "https://www.investopedia.com/thmb/uHALEt9gEAgk-NUmfoEjqgRSjGA=/1186x667/smart/filters:no_upscale()/GettyImages-155158800_2200px-e1268cf815634da497283af874bb2eab.png",
    desc: "Excellent Property in santa monica",
    location: "1500 santa monia , CA",
  },
  {
    id: 2,
    img: "https://www.maximarealtyga.com/files/flashbanner/133299/(2160x1400)%20Houses%20-%2046.jpg",
    desc: "Excellent Property in Philly ",
    location: "1500 Philly Station , PA",
  },
  {
    id: 3,
    img: "https://www.mashvisor.com/blog/wp-content/uploads/2018/04/bigstock-Row-Of-New-Suburban-Homes-55511546.jpg",
    desc: "Family House In Washington Suburbs",
    location: "100 Suburbs monia , WA",
  },
  {
    id: 4,
    img: "https://www.ecorealestate.com.au/wp-content/uploads/2020/12/5b97ab84-d198-4aab-83ac-53650b8ba153.jpg",
    desc: "Superb Housing",
    location: "Beverly Hills , CA",
  },
];
