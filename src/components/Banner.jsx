import "./Banner.css";
import BannerImg from "../assets/images/banner.jpg";

function Banner() {
  return (
    <section id="banner" className="banner">
      <img src={BannerImg} alt="Banner" />
      <div className="banner-overlay">
        <h1>Transforme sua Beleza com Elegância</h1>
        <p>Cuidados exclusivos que realçam sua essência e fazem você se sentir única.</p>
        <a
          href="https://wa.me/551181150271?text=Olá,%20quero%20agendar%20um%20horário."
          target="_blank"
          rel="noopener noreferrer"
        >
          💖 Agende seu horário agora
        </a>
      </div>
    </section>
  );
}

export default Banner;
