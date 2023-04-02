import React from "react";
import Shows from "./Shows";
import "./ShowList.css";

const ShowsList = ({ shows, setMovieItem }) => {
  
  return (
    <div className="list">
      {shows.map((item) => (
        <Shows
          key={item.show.id}
          shows={item.show}
          setMovieItem={setMovieItem}
        />
      ))}
    </div>
  );
};

export default ShowsList;
