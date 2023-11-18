import React, { useState } from 'react';
import Logo from '../img/lista.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }; // funcion para abrir menu hamburguesa en vista movil

  const redirectToRegistro = () => {
    // Redirige al archivo HTML llamado "Registro.html"
    window.location.href = '/Registro.html';
  };

  
  const redirectToLogin =()=>{
    window.location.href='/login.html'
  }

  const redirectToIndex =()=>{
    window.location.href='/index.html'
  }

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo de la empresa" />
      </div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${menuOpen ? 'open-menu' : 'closed-menu'}`}>
        <ul>
          <li><a onClick={redirectToLogin}>Iniciar Sesión</a></li>
          <li><a onClick={redirectToRegistro}>Registrarse</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
