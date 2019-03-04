const app = require('./backend/app');
const http = require('http');
const io = require('socket.io');
const eventManager=require('./backend/eventManager');

const port = process.env.PORT || "3000";

app.set('port', port);

const server = http.createServer(app);
server.listen(port
  // ,  () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
// }
);
let chatIo = io.listen(server);

chatIo.on('connection', (socket) => {
  let username = socket.handshake.query.username;
  eventManager.saveEvent('connect',username,'user connected');
  eventManager.userSokcets.push({username:username,socketId:socket.id});
  console.log(socket.id);
  // console.log(socket);
  socket.on('disconnect', () => {
    console.log("socket disconnected");
    console.log(socket.id);
    console.log(eventManager.userSokcets.filter(a=>a.socketId==socket.id));
  });
  socket.on('send-message', data => {
    console.log("send message");
    console.log(data);
  });
  socket.on('join', data => {
    console.log("join");
    console.log(data)
  });
  socket.on('leave', data => {
    console.log("leave");
    console.log(data);
  })
});
