import axios from "axios";
import React, { useEffect, useState } from "react";
import "./BookForm.css";

const BookForm = ({ movieItem }) => {
  const [formData, setFormData] = useState({
    movieName: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${movieItem}`)
      .then((response) =>
        setFormData({ ...formData, movieName: response.data.name })
      );
  }, [movieItem]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    localStorage.setItem("data", JSON.stringify(formData));
  }

  return (
    <div className="form-container">
      <h4>Book Your Show</h4>
      <div className="form">
        <form onSubmit={submitHandler} className="register-form">
          <div className="divi">
            <label htmlFor="MovieName">Movie Title</label>
            <input
              type="text"
              className="form-field"
              onChange={handleChange}
              name="movieName"
              value={formData.movieName}
              disabled
            />
          </div>
          <div className="divi">
            <label htmlFor="Name">Your Name</label>
            <input
              type="text"
              className="form-field"
              onChange={handleChange}
              value={formData.name}
              name="name"
            />
          </div>
          <div className="divi">
            <label htmlFor="Email">Email address</label>
            <input
              type="email"
              className="form-field"
              onChange={handleChange}
              value={formData.email}
              name="email"
            />
          </div>
          <div className="divi">
            <label htmlFor="Phone">Phone No.</label>
            <input
              type="phone"
              className="form-field"
              onChange={handleChange}
              value={formData.phone}
              name="phone"
            />
          </div>
          <div className="divi">
            <label htmlFor="address">Address</label>

            <textarea
              className="form-field"
              onChange={handleChange}
              name="address"
              value={formData.address}
            />
          </div>

          <button type="submit" className="form-field btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
