import "./Footer.css"; // IMPORT SEMPRE NO TOPO

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
       <p className="instagram-link">
  Siga nossa rede social:{" "}
  <a
    href="https://www.instagram.com/kasiaunhas?utm_source=qr&igsh=N2k2eXByZnUwNHNs"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37a4 4 0 1 1-4.74-4.74 4 4 0 0 1 4.74 4.74z"/>
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
    </svg>
    Instagram
  </a>
</p>
        <p className="copyright">
          © 2025 Núbia Cássia. Todos os direitos reservados.
        </p>
        <p className="producer">
          Produzido por{" "}
          <a
            href="https://portfolioseilanif.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>S. Fontes</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
