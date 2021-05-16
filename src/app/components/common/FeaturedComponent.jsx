import React from "react";
import Slider from "react-slick";
import CardComponent from "./CardComponent";
import featured1 from "../../assets/img/featured-1.jpeg";
import featured2 from "../../assets/img/featured-2.jpeg";
import featured3 from "../../assets/img/featured-3.jpeg";
import livingRoom from "../../assets/img/livingRoom.jpeg";
import livingRoom2 from "../../assets/img/livingRoom.jpeg";

function FeaturedComponentss() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return images.map((housing) => {
    return (
      <div key={housing.id} className="col-10 col-md-6 col-lg-4 mx-auto my-3">
        <Slider {...settings}>
          {housing.listing.map((property) => {
            return (
              <CardComponent
                key={property.id}
                img={property.img}
                loc={property.location}
                desc={property.desc}
              />
            );
          })}
        </Slider>
      </div>
    );
  });
}

export default FeaturedComponentss;

const images = [
  {
    id: 1,
    listing: [
      {
        id: 2,
        img: featured2,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 4,
        img: "https://www.investopedia.com/thmb/uHALEt9gEAgk-NUmfoEjqgRSjGA=/1186x667/smart/filters:no_upscale()/GettyImages-155158800_2200px-e1268cf815634da497283af874bb2eab.png",
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
    ],
  },
  {
    id: 2,
    listing: [
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
        desc: "New York Estate",
        location: "B street, NY",
      },
      {
        id: 2,
        img: "https://www.investopedia.com/thmb/uHALEt9gEAgk-NUmfoEjqgRSjGA=/1186x667/smart/filters:no_upscale()/GettyImages-155158800_2200px-e1268cf815634da497283af874bb2eab.png",
        desc: "New York Estate",
        location: "B street, NY",
      },
      {
        id: 4,
        img: featured3,
        desc: "New York Estate",
        location: "B street, NY",
      },
    ],
  },
  {
    id: 3,
    listing: [
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1605106646611-009a0bf61293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80",
        desc: "Philly Nice Apartments",
        location: "Ann Avenue , PA",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1605106646611-009a0bf61293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80",
        desc: "Philly Nice Apartments",
        location: "Ann Avenue , PA",
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1605106646611-009a0bf61293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80",
        desc: "Philly Nice Apartments",
        location: "Ann Avenue , PA",
      },
    ],
  },
  {
    id: 4,
    listing: [
      {
        id: 1,
        img: featured1,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 2,
        img: featured3,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 3,
        img: featured2,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
    ],
  },
  {
    id: 5,
    listing: [
      {
        id: 1,
        img: featured2,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 2,
        img: featured1,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 3,
        img: featured3,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
    ],
  },
  {
    id: 6,
    listing: [
      {
        id: 1,
        img: livingRoom,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 2,
        img: livingRoom2,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 3,
        img: featured2,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
    ],
  },
  {
    id: 7,
    listing: [
      {
        id: 1,
        img: featured3,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 2,
        img: livingRoom2,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 3,
        img: featured2,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
    ],
  },
  {
    id: 8,
    listing: [
      {
        id: 1,
        img: "https://www.investopedia.com/thmb/uHALEt9gEAgk-NUmfoEjqgRSjGA=/1186x667/smart/filters:no_upscale()/GettyImages-155158800_2200px-e1268cf815634da497283af874bb2eab.png",
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 2,
        img: "https://www.investopedia.com/thmb/uHALEt9gEAgk-NUmfoEjqgRSjGA=/1186x667/smart/filters:no_upscale()/GettyImages-155158800_2200px-e1268cf815634da497283af874bb2eab.png",
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 3,
        img: "https://www.investopedia.com/thmb/uHALEt9gEAgk-NUmfoEjqgRSjGA=/1186x667/smart/filters:no_upscale()/GettyImages-155158800_2200px-e1268cf815634da497283af874bb2eab.png",
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
    ],
  },
  {
    id: 9,
    listing: [
      {
        id: 1,
        img: livingRoom2,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 2,
        img: featured1,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
      {
        id: 3,
        img: featured2,
        desc: "Excellent Property in santa monica",
        location: "1500 santa monia , CA",
      },
    ],
  },
];
