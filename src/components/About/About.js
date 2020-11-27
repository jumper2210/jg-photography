import React from "react"
import "./About.scss"
import "../../sass/_typography.scss"
import me from "../../assets/images/selfImage.jpg"
import AOS from "aos"
import "aos/dist/aos.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
const About = (props) => {
  AOS.init()

  return (
    <section className="about">
      <div className="about__wrapper">
        <div
          data-aos-offset="20"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="about__wrapper--heading-box"
        >
          <h3 className="heading-aboutSection">coś ciekawego o mnie</h3>
        </div>
        <span
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <LazyLoadImage src={me} className="about__wrapper--photo" />
        </span>

        <span
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <p className="paragraph-about">
            Cześć, mam na imię Justyna. Romantyczka twardo stąpająca po ziemi-
            tak właśnie opisałabym siebie w kilku słowach. Urodziłam się w
            sierpniu, może właśnie dlatego uwielbiam ciepłe letnie wieczory.
            Fotografia to moja, pasja, coś co kocham najbardziej. Od wielu lat
            towarzyszy mi ona wszędzie, gdzie tylko jestem. Uwielbiam obserwować
            ludzi i świat , potrafię słuchać, współodczuwać i pozwalać na to, by
            emocje były stale obecne w moim życiu. Zdjęcia pozwalają mi
            zatrzymać najpiękniejsze chwile w czasie, zamknąć je w kadrze i
            wracać do nich wspomnieniami za każdym razem gdy na nie spojrzę.
            Kocham też i muzykę, szczególnie akustyczną, ale i innymi gatunkami
            muzycznymi nie pogardzę. Śpiewanie też sprawia mi dużą przyjemność.
            Trochę żałuję, że nie chodziłam do szkoły muzycznej. Lubię ludzi z
            pasją, szczególnie tych uzdolnionych muzycznie i artystycznie.
            Jestem wrażliwa, nie tylko na piękno, ale też i na sytuacje
            stresujące i te radosne. Zachwycają mnie rzeczy małe, drobne, kwiaty
            kwitnące wiosną, zachody słońca, jak też światełka pod każdą
            postacią. Zapraszam Was do mojego świata.
          </p>
        </span>
      </div>
    </section>
  )
}
export default About
