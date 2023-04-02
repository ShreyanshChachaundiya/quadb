import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowsList from "./components/ShowsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Summary from "./components/Summary";
import BookForm from "./components/BookForm";
import Header from "./components/Header";

function App() {
  const [shows, setShows] = useState([]);
  const [movieItem, setMovieItem] = useState();

  useEffect(() => {
    const fetchShows = async () => {
      const result = await axios(`https://api.tvmaze.com/search/shows?q=all`);
      setShows(result.data);
    };
    fetchShows();
  }, []);

  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route
            path="/"
            element={shows&&<ShowsList shows={shows} setMovieItem={setMovieItem} />}
          />
          <Route
            path="/summary"
            element={movieItem && <Summary movieItem={movieItem} />}
          />
          <Route
            path="/book"
            element={movieItem && <BookForm movieItem={movieItem} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
