import "./Portfolio.css";
import Logo from "../assets/images/logo.png"; // logo para o hover

import Mani1 from "../assets/images/manicure1.jpeg";
import Mani2 from "../assets/images/manicure2.jpeg";
import Mani3 from "../assets/images/manicure3.jpeg";
import Mani4 from "../assets/images/manicure4.jpeg";
import Plasti from "../assets/images/plastica1.jpeg";
import Mani5 from "../assets/images/manicure5.jpg";
import Mani6 from "../assets/images/manicure6.jpg";
import Mani7 from "../assets/images/manicure7.jpg";
import Mani8 from "../assets/images/manicure8.jpg";
import Mani9 from "../assets/images/manicure9.jpg";
import Mani10 from "../assets/images/manicure10.jpg";
import Mani11 from "../assets/images/manicure11.jpeg";

function Portfolio() {
  const photos = [
    { src: Mani1, alt: "Manicure 1" },
    { src: Mani2, alt: "Manicure 2" },
    { src: Mani3, alt: "Manicure 3" },
    { src: Mani4, alt: "Manicure 4" },
    { src: Plasti, alt: "Plástica dos pés" },
    { src: Mani5, alt: "Manicure 5" },
    { src: Mani6, alt: "Manicure 6" },
    { src: Mani7, alt: "Manicure 7" },
    { src: Mani8, alt: "Manicure 8" },
    { src: Mani9, alt: "Manicure 9" },
    { src: Mani10, alt: "Manicure 10" },
    { src: Mani11, alt: "Manicure 11" },
  ];

   return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfólio</h2>
      <p className="portfolio-intro">
  Confira alguns dos nossos trabalhos recentes de manicure, pedicure e plástica dos pés,
  cada detalhe é feito com muito cuidado, priorizando a saúde das unhas e o bem-estar de nossas clientes.! 
  <br></br>
  Inspire-se com as nossas criações e agende o seu atendimento!
</p>
      <div className="portfolio-grid">
        {photos.map((photo, i) => (
          <div key={i} className="portfolio-card">
            <img src={photo.src} alt={photo.alt} className="main-img" />
            <img src={Logo} alt="Logo" className="logo-img" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
