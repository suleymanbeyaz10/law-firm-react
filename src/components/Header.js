import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>
              <FontAwesomeIcon icon={faBalanceScale} /> Hukuk Bürosu
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
