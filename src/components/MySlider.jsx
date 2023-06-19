import React from "react";
import {  useNavigate } from "react-router-dom";
import Slider from "react-slick";

function MySlider(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: props.slidesToShow || 6,
    slidesToScroll: props.slidesToScroll || 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate= useNavigate()

  const lsadata = (data) => {
    console.log(data);

    localStorage.setItem("lsdat", JSON.stringify(data));
    // window.location.href = "/details"
    navigate("/details")
  };
  return (
    <Slider {...settings}>
      {props.data.map((movie, i) => (
        <div onClick={() => lsadata(movie)} className="slide-div" key={i}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie[props.imageType]}`}
            alt=""
          />
          <div className={props.class || "slide-cont1"}>
            <h4>{movie.title}</h4>
            <p>{movie.vote_average}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default MySlider;
