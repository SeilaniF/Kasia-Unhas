import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contato</h2>
      <p className="contact-message">
        Quer agendar um horário ou tirar dúvidas sobre nossos serviços? <br />
        Envie uma mensagem para falar diretamente conosco. <br />
        Estamos prontos para atender você com atenção e cuidado!
      </p>
      <a
        href="https://wa.me/551181150271?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio."
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        <span className="whatsapp-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48a11.83 11.83 0 0 0-16.7 0 11.82 11.82 0 0 0-3.46 8.37c0 2.05.53 4.06 1.53 5.85L0 24l6.49-2.28a11.84 11.84 0 0 0 5.85 1.53 11.83 11.83 0 0 0 8.37-3.46 11.83 11.83 0 0 0 0-16.7zm-8.48 17.02a9.91 9.91 0 0 1-5.31-1.56l-.38-.23-3.85 1.36 1.36-3.85-.24-.38a9.91 9.91 0 1 1 8.42 4.66zm5.29-7.22c-.29-.14-1.72-.85-1.98-.95-.26-.11-.45-.14-.64.14-.19.29-.73.95-.89 1.15-.16.19-.32.21-.61.07-.29-.14-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.32.43-.48.14-.16.19-.26.29-.43.09-.16.05-.32-.02-.46-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.32-.26.26-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3.01.14.19 2.03 3.09 4.92 4.33.69.3 1.23.48 1.65.61.69.21 1.31.18 1.8.11.55-.08 1.72-.7 1.97-1.38.26-.69.26-1.28.18-1.39-.07-.11-.26-.18-.55-.32z"/>
          </svg>
        </span>
        WhatsApp
      </a>
    </section>
  );
}

export default Contact;
