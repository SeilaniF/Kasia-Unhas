import "./Services.css";
import SpaImg from "../assets/images/spa.jpg"; 
import ManiImg from "../assets/images/spa1.jpg";
import PlastiImg from "../assets/images/plastica2.jpg";

function Services() {
  const services = [
    {
      name: "Spa dos Pés",
      desc: "Tratamento completo de relaxamento e revitalização para pés cansados. Inclui esfoliação, massagem e hidratação profunda.",
      img: SpaImg
    },
    {
      name: "Manicure & Pedicure",
      desc: "Cuidados essenciais para unhas impecáveis. Inclui limpeza, corte, modelagem, hidratação e esmaltação.",
      img: ManiImg
    },
    {
      name: "Plástica dos Pés",
      desc: "Hidratação intensa e renovação da pele dos pés, combatendo ressecamento, calos e asperezas.",
      img: PlastiImg
    },
  ];

  return (
    <section id="services" className="services-section">
      <h2>Nossos Serviços</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="services-card">
            <img src={s.img} alt={s.name} />
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
