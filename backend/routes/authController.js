// backend/routes/authController.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.authenticate(email, password);

    if (usuario) {
      res.status(200).json({ message: 'Inicio de sesión exitoso', usuario });
    } else {
      res.status(401).json({ error: 'Error al iniciar Sesión' });
    }
  } catch (error) {
    console.error('Error al autenticar usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
