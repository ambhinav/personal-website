import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div style={{backgroundColor: "#272c34", borderRadius: "25px" }}>
        <Slider {...settings}>
        <div>
            <h3>Bengkala 2019</h3>
            <li>Created a website using ReactJS and MySQL to promote experiential tourism at Balinese Village</li>
        </div>
        <div>
            <h3>CPF Hackathon 2020</h3>
            <li>Used Microsoft Azure Personaliser API service to optimise CPF webiste based on Reinforcement Learning</li>
        </div>
        <div>
            <h3>CareYourPets 2020</h3>
            <li>Created website to help pet owners find care takers using ReactJS, NodeJS and PostgreSQL</li>
        </div>
        </Slider>
    </div>
  );
}

export default Projects;