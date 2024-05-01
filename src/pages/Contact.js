import React, { useState, useEffect } from "react";
import contactImage from "../assets/images/contact-image.jpg";

function Contact() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // API'ya istek atma
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
    title,
    content,

    address,
    postalCode,
    phone,
    email,
  }) => {
    setTitle(title);
    setContent(content);
    //setImageUrl(imageUrl);
    setAddress(address);
    setPostalCode(postalCode);
    setPhone(phone);
    setEmail(email);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <img
            src={contactImage}
            alt="Bize Ulaşın"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="mb-4">{title}</h2>
          <p>{content}</p>
          <p className="mb-4">
            <strong>
              {address}
              <br />
              {postalCode}
              <br />
              {phone}
              <br />
              TÜRKİYE
              <br />
            </strong>
            <strong>Email:</strong> {email}
          </p>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Adınız
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Adınızı giriniz"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email adresinizi giriniz"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mesajınız
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Mesajınızı buraya yazınız"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
