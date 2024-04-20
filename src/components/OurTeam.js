import React from "react";
import Slider from "react-slick";
import person1 from "../assets/images/person_1.jpg";
import person2 from "../assets/images/person_2.jpg";
import person3 from "../assets/images/person_3.jpg";
function OurTeam() {
  const memberData = [
    {
      id: 1,
      name: "Av. Mehmet Yılmaz",
      role: "Ceza Hukuku Uzmanı",
      description:
        "20 yılı aşkın süredir ceza hukuku alanında derin tecrübelere sahip olan Mehmet Yılmaz, karmaşık davalarda müvekkillerine başarıyla liderlik etmektedir.",
      imageUrl: person1,
    },
    {
      id: 2,
      name: "Av. Murat Korkmaz",
      role: "Ticaret Hukuku Uzmanı",
      description:
        "Ticaret hukuku ve şirketler hukuku konularında uzmanlaşmış Murat Korkmaz, yerli ve yabancı şirketlere hukuki danışmanlık yapmaktadır.",
      imageUrl: person2,
    },
    {
      id: 3,
      name: "Av. İsmail Çetin",
      role: "Aile Hukuku Uzmanı",
      description:
        "Aile hukukundaki zengin deneyimleri ile bilinen İsmail Çetin, boşanma ve velayet davalarında müvekkillerini titizlikle temsil etmektedir.",
      imageUrl: person3,
    },
  ];

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
        {memberData.map((member) => (
          <div key={member.id} className="px-3">
            <div className="card h-100">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="card-img-top img-fluid rounded-circle mx-auto d-block mt-3"
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
