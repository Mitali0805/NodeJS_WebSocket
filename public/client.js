//Make connection
var socket = io();

const handle = document.getElementById('handle'),
    message = document.getElementById('message'),
    btn = document.getElementById('btn'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value)
})

//listen for event
socket.on('chat', (data) => {
    feedback.innerHTML = ''
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>'
})

socket.on('typing', (data) => {
  feedback.innerHTML = '<p><em>' + data + ' is typing...</em></p>'
})