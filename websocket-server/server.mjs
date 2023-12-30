import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({
    port: 6379
}, () => {
    console.log('Servidor iniciado e escutando na porta 6379.')
})

wss.on("connection", ws =>{
    console.log('client conectado.')

    ws.on('error', console.error)

    ws.on('message', data => {
        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN){
                client.send(JSON.stringify({"message":data}))
            }
        })
    })

    ws.on('close', () => {
        console.log('client desconectado.')
    })
})