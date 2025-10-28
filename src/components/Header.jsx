import { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";

import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#banner">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
