import React, { useEffect, useState } from "react";
import lawFirmImage from "../assets/images/law-firm-main.jpg";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function MainContent() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // API'ye istek atma

  useEffect(() => {
    fetch("https://localhost:44383/api/MainContents")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // gelen verileri atama işlemi
  const setData = ({ title, content }) => {
    setTitle(title);
    setContent(content);
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-left">
          <h1 className="display-4">{title}</h1>
          <p className="lead mt-3">{content}</p>
          <Link to="/services">
            <Button color="primary" className="mt-4" size="lg">
              Hizmetlerimizi Keşfedin
            </Button>
          </Link>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <img
            src={lawFirmImage}
            alt="Hukuk Bürosu"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
