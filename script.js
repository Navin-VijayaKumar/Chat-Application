const socket=io('http://localhost:7777')
const messageForm =document.getElementById('send-container')
const messageInput=document.getElementById('message-input')
const messageContainer =document.getElementById('message-container')
const name=prompt('what is your name ?')
appendMessage('You joined')
socket.emit('new-user',name)
socket.on('chat-message', data=>{
    appendMessage(`${data.name}: ${data.message}`)
})
socket.on('user-connected', name=>{
    appendMessage(`${name} connected`)
})

messageForm.addEventListener('submit',e =>{
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`You: ${message}`)

    socket.emit('send-chat-message',message)
    messageInput.value=''

 })
 function appendMessage(message)
 {
    const messageElement=document.createElement('div')
    messageElement.innerText=message
    messageContainer.append(messageElement)
 }