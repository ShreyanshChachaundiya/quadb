import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Summary.css";
import { Link } from "react-router-dom";

const Summary = (props) => {
  const [movieSummary, setMovieSummary] = useState();
  const { movieItem } = props;

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${movieItem}`)
      .then((response) => setMovieSummary(response.data));
  }, [movieItem]);

  return (
    <div className="summary">
      <Card
        imgSrc={movieSummary?.image.original}
        constentHead={movieSummary?.name}
        constentPara={movieSummary?.summary}
        ratings={movieSummary?.rating.average}
        genre={movieSummary?.genres}
        language={movieSummary?.language}
      />
      <Link to={"/book"}>
        <button className="button">Book Now</button>
      </Link>
    </div>
  );
};

export default Summary;
