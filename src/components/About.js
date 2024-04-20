import React from "react";
import aboutPng from "../assets/images/pexels-sora-shimazaki-5668772.jpg";
import OurTeam from "./OurTeam";

function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Hakkımızda</h2>
          <p>
            Hukuk büromuz, yılların birikimi ve tecrübesi ile donanmış olup,
            müvekkillerimize hukuki temsil ve danışmanlık hizmetleri sunma
            konusunda kendini adamıştır. Kuruluşumuzdan bu yana, her bir
            müvekkilin benzersiz ihtiyaçlarını derinlemesine anlamayı ve onlara
            özel çözümler geliştirmeyi öncelik haline getirdik. Adaletin
            sağlanmasını garantilemek amacıyla, alanında uzman avukatlarımızla
            geniş hizmet yelpazemizi sürekli genişleterek sizlere ve işletmenize
            gereken desteği sağlamak için buradayız. Büromuzun kökleri,
            müvekkillerimizin haklarını koruma ve en iyi hukuki desteği sağlama
            misyonu üzerine kurulmuştur. Bu değerler, faaliyetlerimizin her
            aşamasında bizi yönlendirmekte ve hukukun çeşitli alanlarında
            uzmanlık sunmamızı sağlamaktadır.
          </p>
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
