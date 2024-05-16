import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-block">
          <p>LA TIENDITA DEL ABUELO</p>
          <p>© 2010 – 2020</p>
          <p>Privacy – Terms</p>
        </div>
        <div className="footer-block">
          <h4>Cuenta</h4>
          <ul>
            <li><a href="#!">Login</a></li>
            <li><a href="#!">Registro</a></li>
            <li><a href="#!">Carrito</a></li>
          </ul>
        </div>
        <div className="footer-block">
          <h4>Productos</h4>
          <ul>
            <li><a href="#!">Más Vendidos</a></li>
            <li><a href="#!">Nuevos</a></li>
            <li><a href="#!">Ofertas</a></li>
          </ul>
        </div>
        <div className="footer-block">
          <h4>Ayuda</h4>
          <ul>
            <li><a href="#!">Acerca de Nosotros</a></li>
            <li><a href="#!">Política de Envío</a></li>
            <li><a href="#!">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-block">
          <a href="#!" className="social-icon"><img src="facebook.png" alt="Facebook" /></a>
          <a href="#!" className="social-icon"><img src="instagram.png" alt="Instagram" /></a>
          <a href="#!" className="social-icon"><img src="twitter.png" alt="Twitter" /></a>
          <a href="#!" className="social-icon"><img src="youtube.png" alt="YouTube" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
