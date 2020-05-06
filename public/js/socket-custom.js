var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar (ON)
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});

// Emits enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Santiago',
    mensaje: 'Hola Mundo!!'
}, function(resp) {
    console.log('Respuesta server:', resp);
});