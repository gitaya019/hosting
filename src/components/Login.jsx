import React, { useState } from 'react';
import Login from '../img/lista.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Inicio de sesión exitoso:', data);
        redirectToAPP();
      } else {
        setErrorMessage('El correo o la contraseña no son correctos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      setErrorMessage('Error interno del servidor');
    }
  };

  const redirectToIndex = () => {
    window.location.href = '/index.html';
  };

  const redirectToAPP = () => {
    window.location.href = '/FreeTask.html';
  };

  return (
    <div className='body-container'>
      <div className="login-container">
        <div className="form-container">
          <div className="logo-container">
            <img className='logo' src={Login} alt="FreeTask" />
            <h2>Iniciar Sesión</h2>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={handleChangeEmail}
                required
                className="login-input"
              />
            </label>
            <label className="password-label">
              Contraseña:
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handleChangePassword}
                  required
                  className="login-input password-input"
                />
                <span
                  className="password-toggle-icon"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </label>
            <div className="login-buttons">
              <button type="submit" className="login-button">
                Iniciar sesión
              </button>
              <button onClick={redirectToIndex} className="login-button">
                Cancelar
              </button>
            </div>
            {errorMessage && (
              <div className="error-message">
                <p>{errorMessage}</p>
              </div>
            )}
            <div className="login-text">
              <p>¿No tienes cuenta? <a href="/Registro.html">Quiero registrarme</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
