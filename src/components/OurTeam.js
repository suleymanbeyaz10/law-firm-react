import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";
function OurTeam() {
  const [data, setData] = useState([]);
  const imgSrc = [person1, person2, person3];

  useEffect(() => {
    fetch("https://localhost:44383/api/Employees")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h2>Ekibimiz</h2>
      <Slider {...settings}>
        {data.map((member) => (
          <div key={member.id} className="px-3">
            <div className="card h-100">
              <img
                src={imgSrc[member.id - 1]}
                alt={member.name}
                className="card-img-top  rounded-circle mx-auto d-block mt-3"
                style={{ width: "150px", height: "150px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurTeam;
