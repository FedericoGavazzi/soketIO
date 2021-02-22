console.log("ok")
const btnPing = document.getElementById("btnPing")
const btnSend = document.getElementById("btnSend")
const message = document.getElementById("message")
const chat = document.getElementById("chat")

const clientSocket = io()
clientSocket.on("connect", (socket)=>{
    console.log("connesso")
    /*btnPing.onclick = () =>{
        clientSocket.emit("ping", {})
    }*/
    btnSend.onclick = () => {
        clientSocket.emit("send", {"messaggio": message.value})
        console.log(message.value)
        message.value = ""
    }
})


clientSocket.on("received", (params) =>{
chat.innerHTML += params + "<br/>"
})
clientSocket.on("message", (params)=>{
    console.log("messaggio del server", JSON.stringify(params, 2, 1))
})

clientSocket.on("pong", () =>{
    console.log("pong from server")
})