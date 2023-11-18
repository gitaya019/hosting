// backend/routes/registro.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

router.post('/', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      // Error de clave duplicada (correo electrónico duplicado)
      return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
    }
    console.error('Error al registrar usuario', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
