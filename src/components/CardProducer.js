import React, { useState, useEffect } from "react";
import axios from "axios";

const CardProducer = () => {
  const [nasaPhoto, setNasaPhoto] = useState("0");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=cWO32LQE8xUfz43JjPX7lbiVMBsnl7Ah2sP12LzK")
      .then(response => {
        const Nasa = response.data;

        setNasaPhoto(Nasa);
      });
  }, []);

  return (
    <div className="card-containment">
      <h2>{nasaPhoto.title}</h2>
        <img src={nasaPhoto.hdurl} alt="title" />
      <p className="desc">{nasaPhoto.explanation}</p>
    </div>
  );
};

export default CardProducer;
