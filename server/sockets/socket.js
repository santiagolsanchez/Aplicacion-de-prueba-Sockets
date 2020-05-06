const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la Aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*         if (mensaje.usuario) {
                    callback({
                        resp: 'TODO SALIO BIEN!!'
                    });
                } else {
                    callback({
                        resp: 'TODO SALIO MAL!!'
                    });
                } */
    });
});