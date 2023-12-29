import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import { useNavigate } from "react-router-dom";
function Navbar(props) {
  let [searcmovi, setsearcmovi] = useState("");
  let [searcmovidata, setsearcmovidata] = useState([]);
  let [showmovieDiv, setshowmovieDiv] = useState(false);

  const handlogout = () => {
    //  alert("logout")

    localStorage.removeItem("userlogin");
    props.setLoggedIn(false);
  };
  const navigate = useNavigate();

  // https://api.themoviedb.org/3/search/movie?api_key=7cf9d10dc5f5bfa3b334562c2e852f18&query=tiger

  async function searchmovies(movieTitle) {
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7cf9d10dc5f5bfa3b334562c2e852f18&query=${movieTitle}`
      );

      let data = await res.json();
      console.log(data.results);
      let filtered_data = data.results.filter((e) => e.poster_path);
      setsearcmovidata(filtered_data);
    } catch (err) {
      console.log(err);
    }
  }

  const lsadata = (data) => {
    console.log(data);

    localStorage.setItem("lsdat", JSON.stringify(data.id));
    // window.location.href = "/details"
    navigate("/details");
    setshowmovieDiv(false);
  };

  const moviesChange = (e) => {
    // console.log(e.target.value);
    setsearcmovi(e.target.value);
  };
  const searhbtn = () => {
    searchmovies(searcmovi);
    setshowmovieDiv(true);
  };
  const closeBtn = () => {
    setshowmovieDiv(false);
  };

  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Series</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Original</Link>
          </li>
        </ul>
      </div>
      <div className="searcbar">
        <input
          onChange={(e) => moviesChange(e)}
          type="text"
          placeholder="Enter Movie Name"
        />
        <button onClick={() => searhbtn()}>Search</button>
        {props.LoggedIn ? (
          <p onClick={() => handlogout()}>Logout</p>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <p>My List</p>
        <img src={avatar} alt="" />
        {props.LoggedIn ? props.LoggedIn.username : ""}
      </div>
      {showmovieDiv ? (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "0",
            minHeight: "100vh",
            width: "100%",
            zIndex: "500",
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(20px)",
            display: "grid",
            flexWrap: "wrap",
            justifyContent: "center",
            gridTemplateColumns: "repeat( auto-fit ,350px)",
            gap: "30px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              alignItems: " center",
              gridColumnStart: "1",
              gridColumnEnd: "5",
              marginTop: "20px",
            }}
          >
            <h1>Search Results</h1>
            <button
              style={{
                padding: "10px 20px",
                fontWeight: "600",
                background: "rgba(0,0,0,0.5)",
                color: "white",
              }}
              onClick={closeBtn}
            >
              CLose
            </button>
          </div>
          {searcmovidata.map((movie, i) => (
            <div onClick={() => lsadata(movie)} className="slide-div" key={i}>
              <img
                style={{ width: "100%" }}
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt=""
              />
              <div className="slide-cont1">
                <h4>{movie.title}</h4>
                <p>{movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
