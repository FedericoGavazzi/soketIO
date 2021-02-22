console.log("ok")
const btnPing = document.getElementById("btnPing")


const clientSocket = io()
clientSocket.on("connect", (socket)=>{
    console.log("connesso")
    btnPing.onclick = () =>{
        clientSocket.emit("ping", {})
    }
})

clientSocket.on("message", (params)=>{
    console.log("messaggio del server", JSON.stringify(params, 2, 1))
})

clientSocket.on("pong", () =>{
    console.log("pong from server")
})