import React from "react";
import contactImage from "../assets/images/contact-image.jpg";

function Contact() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* İletişim resmi */}
        <div className="col-lg-6 mb-4">
          <img
            src={contactImage}
            alt="Bize Ulaşın"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* İletişim bilgileri ve form */}
        <div className="col-lg-6">
          <h2 className="mb-4">Bizimle İletişime Geçin</h2>
          <p>
            Herhangi bir sorunuz varsa veya daha fazla bilgiye ihtiyacınız varsa
            lütfen bizimle iletişime geçmekten çekinmeyin.
          </p>
          <p className="mb-4">
            <strong>
              Zeytinburnu / İSTANBUL
              <br />
              34025
              <br />
              TÜRKİYE
              <br />
            </strong>
            <strong>Email:</strong> info@hukukburosu.com
          </p>

          {/* İletişim Formu */}
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
