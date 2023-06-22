import React, { useEffect, useState } from "react";
import star from "../assets/start.svg";
import bookmark from "../assets/bookmark.png";
import eye from "../assets/eye.png";
import MySlider from "./MySlider";
import Review_slider from "./Review_slider";

function ViewDetails() {
  let [lsdata, setlsdata] = useState({});
  let [relateddata, setrelateddata] = useState([]);
  let [arr, setarr] = useState([]);
  let [trailer, setTrailer] = useState(["tg52up16eq0"]);

  let [showtrailer, setshowTrailer] = useState(false);

  async function fetchrelateddata(movie_id) {
    try {
      let resp = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=7cf9d10dc5f5bfa3b334562c2e852f18`
      );

      let data = await resp.json();
      //  console.log(data.results);
      setrelateddata(data.results);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchdetaildata(movie_id) {
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=7cf9d10dc5f5bfa3b334562c2e852f18`
      );

      let data = await res.json();
      setlsdata(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  // https://api.themoviedb.org/3/movie/324857/reviews?api_key=7cf9d10dc5f5bfa3b334562c2e852f18

  async function fetchreviews(movie_id) {
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=7cf9d10dc5f5bfa3b334562c2e852f18`
      );
      let data = await res.json();
      console.log(data.results);
      setarr(data.results);
      console.log(data.results.length);
    } catch (err) {
      console.log(err);
    }
  }
  async function fetchTrailer(movie_id) {
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=7cf9d10dc5f5bfa3b334562c2e852f18`
      );
      let data = await res.json();
      let trailer = data.results.find((e) => e.type == "Trailer");
      console.log(trailer);
      setTrailer(trailer.key);
    } catch (err) {
      console.log(err);
    }
  }
  let [id, setid] = useState(JSON.parse(localStorage.getItem("lsdat")));

  useEffect(() => {
    // setlsdata(data);
    fetchrelateddata(id);
    fetchdetaildata(id);
    fetchreviews(id);
    fetchTrailer(id);
  }, [id]);


const trailerClick = ()=> {
   setshowTrailer(!showtrailer)
}


  return (
    <div id="details">
      <div className="section1">
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w780/${lsdata.poster_path}`}
            alt=""
          />
          <button onClick={()=> trailerClick()}>Trailer</button>
        </div>
        <div className="info">
          <div className="text">
            <h1>{lsdata.title}</h1>
            <div className="btndiv">
              <button className="button2">
                <img src={star} alt="" />
              </button>
              <button className="button2">
                <img src={bookmark} alt="" />
              </button>
              <button className="button2">
                <img src={eye} alt="" />
              </button>
            </div>
          </div>
          <h2>Storyline</h2>

          <p className="overview">{lsdata.overview}</p>
          <div className="intro">
            <h4>Rating</h4>
            <p>{lsdata.vote_average}⭐</p>
            <h4>Release Date</h4>
            <p>{lsdata.release_date}</p>
            <h4>Popularity</h4>
            <p>{lsdata.popularity}</p>
          </div>
        </div>
        <div className="recently-opened"></div>
      </div>

      {showtrailer ? (
        <div className="trailer">
          <h1 onClick={()=> trailerClick()}>
            CLOSE
          </h1>

          <iframe
            src={`https://www.youtube.com/embed/${trailer}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe>
        </div>
      ) : (
        ""
      )}

      {arr.length < 1 ? (
        ""
      ) : (
        <div className="review">
          <Review_slider
            slidesToShow={arr.length < 4 ? arr.length : 4}
            arr={arr}
          />
        </div>
      )}

      <div className="section2">
        <MySlider
          setid={setid}
          imageType={"poster_path"}
          data={relateddata}
          slidesToShow={relateddata.length < 6 ? relateddata.length : 6}
        />
      </div>
    </div>
  );
}

export default ViewDetails;
