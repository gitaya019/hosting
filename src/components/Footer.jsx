// Footer.jsx
import React from 'react';
import icono1 from '../img/gmail.png'; // Reemplaza con la ruta de tu primera imagen
import icono2 from '../img/whatsapp.png'; // Reemplaza con la ruta de tu segunda imagen

function Footer() {
  return (
    <footer>
      <div className='content'>
        <p className='Copy'>&copy; 2023 FreeTask. <br></br> Todos los derechos reservados.</p>
        
        {/* Iconos de imagen con enlaces */}
        <div className="icon-container">
          <div className="icon">
            <a href="mailto:soporte.freetask@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={icono1} alt="Icono 1" />
            </a>
          </div>
          <div className="icon">
            <a href="https://wa.link/cezuma" target="_blank" rel="noopener noreferrer">
              <img src={icono2} alt="Icono 2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
