import React from 'react';
import "../Styles.css"
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Pie = () => {
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
        <div className="footer-block-icon">
            <a href="https://www.facebook.com/" target="_blank" className='social-icon'><AiOutlineFacebook /></a>
            <a href="https://www.instagram.com/" target="_blank" className='social-icon'><FaInstagram /></a>
            <a href="https://twitter.com/" target="_blank" className='social-icon'><FiTwitter /></a>
            <a href="https://www.youtube.com/" target="_blank" className='social-icon'><AiOutlineYoutube /></a>
        </div>
      </div>
    </footer>
  );
}

export default Pie;