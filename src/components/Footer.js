import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [facebookAddress, setFacebookAddress] = useState("");
  const [twitterAddress, setTwitterAddress] = useState("");
  const [linkedinAddress, setLinkedinAddress] = useState("");

  useEffect(() => {
    fetch("https://localhost:44383/api/Contacts")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // gelen verileri atama işlemi
  const setData = ({
    address,
    postalCode,
    phone,
    email,
    facebookAddress,
    twitterAddress,
    linkedinAddress,
  }) => {
    setAddress(address);
    setPostalCode(postalCode);
    setPhone(phone);
    setEmail(email);
    setFacebookAddress("https://www.facebook.com/");
    setTwitterAddress("https://www.twitter.com/");
    setLinkedinAddress("https://www.linkedin.com/");
  };

  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>Hukuk Bürosu</h5>
            <p>
              {address}
              <br />
              {postalCode}
              <br />
              TURKEY
              <br />
              {phone}
              <br />
              {email}
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
            <a href={facebookAddress} className="text-white me-2">
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </a>
            <br />
            <br />
            <a href={twitterAddress} className="text-white me-2">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            <br />
            <br />
            <a href={linkedinAddress} className="text-white">
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
