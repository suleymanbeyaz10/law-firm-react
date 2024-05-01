import React, { useEffect, useState } from "react";
import aboutPng from "../assets/images/about-page.jpg";
import OurTeam from "../components/OurTeam";
function About() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //const [imageUrl, setImageUrl] = useState("");

  // API'ye istek atma
  useEffect(() => {
    fetch("https://localhost:44383/api/Abouts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0]);
        setData(data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // gelen verileri atama işlemi

  const setData = ({ title, content, imageUrl }) => {
    setTitle(title);
    setContent(content);
    //setImageUrl(imageUrl);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="col-md-4">
          <img src={aboutPng} alt="Office" className="img-fluid" />
        </div>
        <div className="column col-md-9">
          <OurTeam />
        </div>
      </div>
    </div>
  );
}

export default About;
