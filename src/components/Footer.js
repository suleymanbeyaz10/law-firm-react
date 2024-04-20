import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>Hukuk Bürosu</h5>
            <p>
              Zeytinburnu / İSTANBUL
              <br />
              34025
              <br />
              TURKEY
            </p>
          </div>
          <div className="col-md-4">
            <h5>Hızlıca Ulaşın</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/services" className="text-white">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Bizi Takip Edin</h5>
            <a href="https://www.facebook.com" className="text-white me-2">
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </a>
            <br />
            <br />
            <a href="https://www.twitter.com" className="text-white me-2">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            <br />
            <br />
            <a href="https://www.linkedin.com" className="text-white">
              <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-3" style={{ backgroundColor: "#222" }}>
        © 2024 Hukuk Bürosu - Tüm Hakları Mahfuzdur.
      </div>
    </footer>
  );
}

export default Footer;
