const app = require('./backend/app');
const http = require('http');
const io=require('socket.io');

const port = process.env.PORT || "3000";

app.set('port', port);

const server = http.createServer(app);
server.listen(port
    // ,  () => {
    // console.log(`Server running at http://${hostname}:${port}/`);
// }
);
let chatIo=io.listen(server);
chatIo.on('connection',(socket)=>{
    console.log("a user connected");
});