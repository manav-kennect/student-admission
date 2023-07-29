const l = {
    Config: 'config',
    Method: 'rm',
    Random: 'random'
};
module.exports = function (socket) {
    i++;
    const io = this;
    const id = socket.id;
    log.d('One Socket connected to /events: ', id);
    log.d('Total i = ', i);
    log.d('Users info: ', socket.user);

    /* 
        socket.user :
        { 
            email: 'om1@bottle.com',
            name: 'Om1',
            iat: 1501925958,
            exp: 1506245958 
        }
    */

    io.to(id).emit(e.Config, {
        'startListening': e,
        'startEmitting': l
    });

    socket.on('disconnect', socket => {
        i -= 1;
        log.d('One Gone: ', id, '\n,Total i = ' + (i));
    });

    socket.on(l.Random, data => {
        log.d(l.Random, "-> ", data)
    });

    socket.on(l.Method, async (name, data, respond) => {

    });
}

