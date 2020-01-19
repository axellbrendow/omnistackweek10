import socketio from 'socket.io-client';

const socket = socketio('http://192.168.100.19:3333', {
    autoConnect: false,
});

export function subscribeToNewDevs(subscribeFunction)
{
    socket.on('new-dev', subscribeFunction);
}

export function connect(latitude, longitude, techs)
{
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    };

    socket.connect();
}

export function disconnect()
{
    if (socket.connected) socket.disconnect();
}
