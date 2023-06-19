import React from "react";

function ViewDetails() {
  let lsdata = JSON.parse(localStorage.getItem("lsdat"));
  console.log(lsdata);

  return (
    <div id="details">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${lsdata.poster_path}`}
          alt=""
        />
        <button>Trailer</button>
      </div>
      <div className="info">
        <h1>{lsdata.title}</h1>
        <h2>Storyline</h2>
        <p>{lsdata.overview}</p>
        <div className="intro">
          <h4>Rating</h4>
          <p>{lsdata.vote_average}⭐</p>
          <h4>Release Date</h4>
          <p>{lsdata.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
