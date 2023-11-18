import { useState } from 'react';
import axios from 'axios';
import Logo from '../img/lista.png';

const FormularioRegistro = () => {
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const redirectToIndex = () => {
    window.location.href = '/index.html';
  };

  const redirectToLogin =()=>{
    window.location.href='/login.html'
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (
      formData.nombre.trim() === '' ||
      formData.email.trim() === '' ||
      formData.password.trim() === '' ||
      formData.confirmPassword.trim() === ''
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    try {
      // Enviar datos al servidor
      const response = await axios.post('http://localhost:3001/registro', formData);
      console.log(response.data.message);
      alert('Bienvenido, su usuario se ha registrado con éxito');
      redirectToLogin();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Error de correo electrónico duplicado
        setError('El correo electrónico ya está registrado. Por favor, utilice otro correo electrónico.');
      } else {
        console.error('Error al registrar usuario', error);
        setError('Error al registrarse, el correo que intentas registrar ya esta en uso.');
      }
    }
  };
  
  const [emailValid, setEmailValid] = useState(true);
  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
  
    if (!validateEmail(email)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
      setError(null);
    }
  };

  const [passwordValid, setPasswordValid] = useState(true);
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormData({ ...formData, password });
  
    if (password.length < 8) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };


return (
<div>
    <h1 className='titulo'>Registro</h1>
    <img  className='logo' src={Logo} alt="FreeTask" />
    <form className="form-container" onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
        name="nombre"
        id="nombre"
        className="input-field"
        value={formData.nombre}
        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
    </div>

    <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
            name="email"
            id="email"
            className={`input-field ${emailValid ? '' : 'invalid'}`}
            value={formData.email}
            onChange={handleEmailChange}
        />
        {!emailValid && <p className="error-message">Correo electrónico no válido</p>}
    </div>


    <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
            name="password"
            id="password"
            type="password"
            className={`input-field ${passwordValid ? '' : 'invalid'}`}
            value={formData.password}
            onChange={handlePasswordChange}
        />
        {!passwordValid && (
            <p className="error-message">La contraseña debe tener al menos 8 caracteres</p>
        )}
    </div>


    <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            className="input-field"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
    </div>
    <div className="button-container">
      <button
        type="submit"
        className="submit-button"
        disabled={!emailValid || !passwordValid}
      >
        Registrarse
      </button>
      <div className="submit-button" onClick={redirectToIndex}>
        Cancelar
      </div>
    </div>
    {error && <p className="error-message-corro-dup">{error}</p>}
    <div className="login-text">
      <p>¿Ya tienes cuenta? <a href="/login.html">Iniciar Sesión</a></p>
    </div>
  </form>
</div>  
  )
}

export default FormularioRegistro