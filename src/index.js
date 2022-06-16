const http=require('http');
const path= require('path');
const express= require('express');
const socketio=require('socket.io');

const app= express();
const server= http.createServer(app);
const io=socketio(server);
app.set('port',process.env.PORT || 3000);
require('./sockets')(io);

//envia archivos estaticos es decir nombre de los archivos que no cambian
app.use(express.static(path.join(__dirname, 'public')));

//inicializando el servidor
server.listen(app.get('port'),()=>{
  console.log('conectado en el puerto', app.get('port'));
});
