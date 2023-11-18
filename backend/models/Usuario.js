// backend/models/Usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, unique: true },
  password: String,
});

// Método estático para la autenticación
usuarioSchema.statics.authenticate = async function (email, password) {
  const usuario = await this.findOne({ email, password });
  return usuario;
};

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;