import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shows.css";

const Shows = (props) => {
  const { shows, setMovieItem } = props;
  const [image, setImage]=useState();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${shows.id}`)
      .then((response) => setImage(response.data.image.original));
  }, []);

  return (
    <div className="card">
      <div className="card1">
        <div className="card2">
          <img src={image} alt="" />
          <h4 className="card-title mt-2">{shows.name}</h4>
          <p className="card-text">
            <span className="bold-fonts">Rating: </span>
            {shows.rating.average} <br />
            <span className="bold-fonts">Genres: </span>
            {shows.genres.join(", ")} <br />
            <span className="bold-fonts">Language: </span>
            {shows.language}
          </p>
        </div>
        <Link to={"/summary"} className="book1">
          <div
            className="book"
            onClick={() => {
              setMovieItem(shows.id);
            }}
          >
            <h5>Book</h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Shows;
