import React from "react";
import lawFirmImage from "../assets/images/law-firm-main.jpg";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function MainContent() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-left">
          <h1 className="display-4">Önde Gelen Hukuk Büromuza Hoş Geldiniz</h1>
          <p className="lead mt-3">
            İhtiyacınıza özel olarak hazırlanmış benzersiz profesyonel hukuki
            hizmetlerimizi deneyimleyin. Uzman kadromuz, her türlü hukuki
            ihtiyacınızda yanınızda olmak için burada.
          </p>
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
