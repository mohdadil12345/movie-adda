import React, { useEffect, useState } from "react";
import img1 from "../assets/slimg1.png";
import img2 from "../assets/slim2.svg";
import MySlider from "./MySlider";

function HomeSection2() {

  let [topdata , setTopData] = useState([])
  let [populardata , setPopularData] = useState([])
  let [upcomingdata, setupcomingdata] = useState([])

  async function fetchTopRateddata(){
    try{
      let res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7cf9d10dc5f5bfa3b334562c2e852f18&page=1`)

      let data = await res.json()
      setTopData(data.results)

    }catch(err){
      console.log(err);
    }
  }
  async function fetchPopulardata(){
    try{
      let res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7cf9d10dc5f5bfa3b334562c2e852f18&page=1`)

      let data = await res.json()
      setPopularData(data.results)

    }catch(err){
      console.log(err);
    }
  }

  async function fetchupcomingdata(){
    try{
      let res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=7cf9d10dc5f5bfa3b334562c2e852f18&page=1`)

      let data = await res.json()
      setupcomingdata(data.results)

    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTopRateddata()
    fetchPopulardata()
    fetchupcomingdata()
  }, [])
  return (
    <div className="homeSection">
      <h2>Popular</h2>
      <div>
        <MySlider imageType={"backdrop_path"} slidesToShow={4} data = {populardata}/>
      </div>

       <h2>Upcomig</h2>
       <div>
        <MySlider imageType={"backdrop_path"} slidesToShow={4} data = {upcomingdata} />
       </div>

      <h2>Trending</h2>
      <div>
        <MySlider  imageType={"poster_path"} data = {topdata}/>
      </div>



    </div>
  );
}

export default HomeSection2;
