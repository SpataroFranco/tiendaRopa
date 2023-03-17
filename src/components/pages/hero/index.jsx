import men1 from "../../assets/men1.jpg";
import men2 from "../../assets/men2.jpg";
import men3 from "../../assets/men3.jpg";
import "./s.css";

const Hero = () => {
  return (
    <section className="hero-contain">
      <div className="hero-img">
        <div>
          <img src={men1} alt="men1" />
        </div>
        <div>
          <img src={men3} alt="men3" />
        </div>
        <div>
          <img src={men2} alt="men2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
