const express = require('express')
const app = express()
app.use(express.static(__dirname + "/public"))
app.unsubscribe(express)
const server = require('http').createServer(app)
const io = require('socket.io')(server)
io.on('connection', (socketClient) => {
    console.log("client connesso")
    socketClient.emit("message", {"saluto": "ciao"})
    socketClient.on("ping", ()=>{
        console.log("ping from client")
        socketClient.emit("pong", {})
    })
})

setInterval(() => {
    io.emit("pong", {})    
}, 1000);
server.listen(3000)
