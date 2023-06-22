import React from "react";
import Slider from "react-slick";
function Review_slider(props) {

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

  return (
    <div id="user_review">
      <Slider {...settings}>
        {props.arr.map((ele , i) =>
          
            <div className="rev" key = {i}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${ele.author_details.avatar_path}`}
                alt="."
              />
              <h4>{ele.author}</h4>
              <p>{ele.content.slice(0,100)}...</p>
              <button>View More</button>
            </div>
          
        )}
      </Slider>
    </div>
  );
}

export default Review_slider;
