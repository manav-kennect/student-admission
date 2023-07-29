module.exports = {
    origins: [
        'http://localhost:4000',
        '*'],
    middleware: Services => [
        async function (socket, next) {
            return next();
        },
        async function (socket, next) {
            // Socket 
            if (socket.request._query) {
                let query = socket.request._query;
                socket.context = { query };
            } else {
                return next(new Error('No query present'));
            }
        }
    ]
}