import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEye,
  faShoppingCart,
  faUmbrella,
  faHeart,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // API'ye istek atma

  useEffect(() => {
    fetch("https://localhost:44383/api/Services")
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

  const setData = ({ title, content }) => {
    setTitle(title);
    setContent(content);
  };

  return (
    <div id="fh5co-practice" className="fh5co-bg-section">
      <div className="container">
        <div className="row animate-box fadeInUp animated-fast">
          <div className="col-md-offset-2 text-center fh5co-heading">
            <h2>{title}</h2>
            <p style={styles.text}>
              <strong>{content}</strong>
            </p>
          </div>
        </div>
        <div className="row">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="col-md-4 text-center animate-box fadeInUp animated-fast"
            >
              <div className="service-box">
                <span className="icon">
                  <FontAwesomeIcon icon={service.icon} />
                </span>
                <div className="desc">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-12 text-center animate-box fadeInUp animated-fast"></div>
        </div>
      </div>
    </div>
  );
}

//database ayarı yapılmadığı için statik veri kullanıldı

const serviceData = [
  {
    id: 1,
    icon: faHome,
    title: "Emlak Hukuku",
    desc: "Emlak alım satımı, kiralama ve gayrimenkul geliştirme projeleri hakkında hukuki destek sağlıyoruz.",
  },
  {
    id: 2,
    icon: faEye,
    title: "Sigorta Hukuku",
    desc: "Sigorta sözleşmeleri, tazminat davaları ve sigorta şirketleri ile yaşanan uyuşmazlıklarda danışmanlık hizmeti veriyoruz.",
  },
  {
    id: 3,
    icon: faShoppingCart,
    title: "Ticaret Hukuku",
    desc: "Şirketler hukuku, ticari sözleşmeler, fikri mülkiyet hakları ve rekabet hukuku alanında hizmetler sunmaktayız.",
  },
  {
    id: 4,
    icon: faUmbrella,
    title: "Kişisel Yaralanma",
    desc: "Trafik kazaları, iş kazaları ve malpraktis gibi kişisel yaralanma davalarında hukuki temsil ve danışmanlık yapmaktayız.",
  },
  {
    id: 5,
    icon: faHeart,
    title: "Tıbbi Ihmal",
    desc: "Sağlık hizmeti veren kişi veya kurumların hatalı uygulamaları sonucu zarar gören müvekkillerimizin haklarını savunuyoruz.",
  },
  {
    id: 6,
    icon: faQuestionCircle,
    title: "Ceza Savunması",
    desc: "Ceza hukuku kapsamında her türlü suç isnadı ile mücadele ederek müvekkillerimizin haklarını korumaktayız.",
  },
];

export default Services;

const styles = {
  text: {
    fontSize: 23,
  },
};
