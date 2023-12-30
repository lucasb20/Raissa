import React, { useContext, useEffect, useRef, useState } from "react";
import { TokenContext } from "../contexts/AuthContext";

export function ChatForm(){
    const [message, setMessage] = useState('')
    
    const [conectado, setConectado] = useState(false)

    const [chatSocket, setChatSocket] = useState(null)

    const { username } = useContext(TokenContext)
    
    const messageContainer = useRef(null)
    
    const appendMessage = (message, options = 'left') => {
        const messageElement = document.createElement('li')
        messageElement.innerText = message
        messageElement.style.textAlign = options
        messageContainer.current.append(messageElement)
    }

    useEffect(()=>{
        if(conectado === false){
            setConectado(true)
            
            setChatSocket(new WebSocket(`ws://localhost:6379`))
            
            chatSocket.onmessage = e => {
                const data = JSON.parse(e.data)
                appendMessage(data.message)
            }
            
            chatSocket.onclose = e => {
                console.error('Chat socket closed unexpectedly');
            }
            
            chatSocket.onopen = e => {
                console.log('Chat socket connected');
            }

        }
        
    }, [])
    
    const handleSubmit = e => {
        e.preventDefault()

        if(message !== ''){
            chatSocket.send(JSON.stringify({'message': message}))
            setMessage('')
        }

    }

    return(
        <div>
        <ul id="message-container" ref={messageContainer}>
        </ul>
            <form id="send-container" onSubmit={handleSubmit}>
                <input type="text" id="message-input" value={message} onChange={e => setMessage(e.target.value)}/>
                <button type="submit" id="send-button">Enviar</button>
            </form>
        </div>
    )
}