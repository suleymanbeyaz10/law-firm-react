import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [title, setTitle] = useState("");

  // API'ye istek atma
  useEffect(() => {
    fetch("https://localhost:44383/api/Headers")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  const setData = ({ title }) => {
    setTitle(title);
  };

  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>
              <FontAwesomeIcon icon={faBalanceScale} /> {title}
            </h1>
          </div>
          <div className="col-md-6 text-right">
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white">
                    Ana Sayfa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-white">
                    Hakkımızda
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link text-white">
                    Hizmetler
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link text-white">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-white">
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
