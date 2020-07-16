import React from "react";
import "./Opinions.scss";
import Slider from "infinite-react-carousel";
import aboutPic from "../../assets/images/abt2.jpg";

const Opinions = (props) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    duration: 500,
  };
  return (
    <section className="opinions">
      <img src={aboutPic} alt="aboutPic" className="opinions--picture" />
      <h2 className="opinions--heading">Co o mnie mowia</h2>
      <Slider className="opinions--ctn" {...settings}>
        <div className="opinions--ctn__box">
          <h3 className="names">Adam & Maria</h3>
          <p className="paragraph-opinions">
            Dzięki Tobie nasze zdjęcia są historią do której możemy powracać w
            każdym momencie i przeżywać wszystko na nowo z równie wielkimi
            emocjami. Poprzez swoją niezwykłość dostarczają nam mnóstwo radości
            i wzruszeń z każdego szczegółu, jesteśmy nimi zachwyceni! Skromnie
            bardzo bardzo dziękujemy.
          </p>
        </div>
        <div className="opinions--ctn__box">
          <h3 className="names">Kacper & Daria</h3>
          <p className="paragraph-opinions">
            Za każdym razem jak otworzę prezentację i obejrzę to płaczę ze
            wzruszenia, przepiękna pamiątka, jedyna w swoim rodzaju, złapane są
            momenty o których się nawet nie pamiętało, a teraz zostaną z Nami na
            długie długie lata. Wszyscy są zachwyceni zdjęciami. Polecę Cię
            każdemu.
          </p>
        </div>
      </Slider>
    </section>
  );
};
export default React.memo(Opinions);
