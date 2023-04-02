import React from "react";
import "./Card.css";

export default function Card({
  imgSrc,
  constentHead,
  constentPara,
  ratings,
  genre,
  language,
  color
}) 
{
  return (
    <div className="card">
      <div className="card__header">
        <img src={imgSrc} alt="sample1" />
      </div>
      <div className="card__body">
         <h1 className="card__body__head">{constentHead}</h1>
        <p className="card__body__content">{constentPara}</p> 
      </div>
      <div style={{ backgroundColor: color }} className="card__footer">
        <div className="card__Footer__first">
          <div>
            <p>{ratings}</p>
          </div>
          <label>Ratings</label>
        </div>
        <div className="card__Footer__second">
          <div>
            <p>{genre}</p>
          </div>
          <label> Genres</label>
        </div>
        <div className="card__Footer__third">
          <div>
            <p>{language}</p>
          </div>
          <label>Language</label>
        </div>
      </div>
    </div>
  );
}
