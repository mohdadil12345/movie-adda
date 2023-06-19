import React from "react";
import cover from "../assets/cover.svg";
import disnep from "../assets/brand1.png"
import marvel from "../assets/marvel.png"
import national from "../assets/national.png"
import pixar from "../assets/pixar.png"
import star_wars from "../assets/star_wars.png"

function HomeSection1() {
  return (
    <div className="home">
      <div className="cover">
        <img src={cover} alt="" />
      </div>
      <div className="details">
        <div className="info">
          <p>Disnep PIXAR</p>
          <h1>LUCA</h1>
          <p>
            La película de Disney y Pixar “Luca” está ambientada en un pueblo de
            la costa italiana y cuenta la historia de un adolescente que pasa un
            verano inolvidable lleno de aventuras junto con su nuevo amigo
            Alberto.
          </p>

          <div>
            <button className="btn1">VER AHORA</button>
            <button className="btn2">MÁS INFORMACIÓN</button>
          </div>
        </div>
        <div className="brand">
          <img src={disnep} alt="" />
          <img src={marvel} alt="" />
          <img src={national} alt="" />
          <img src={star_wars} alt="" />
          <img src={pixar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
