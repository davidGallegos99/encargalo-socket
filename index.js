require('dotenv').config();

const cors = require('cors');

// SOCKET CONFIGURATION

// Server Model: Contiene todo el servidor de express + socket.io configurado
const Server = require('./socket/server.js');

// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server
server.execute();

