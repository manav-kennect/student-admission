let bodyParser = require('../../lighters/node_modules/body-parser').json({ extended: true, limit: '50mb' });
let compression = require('../../lighters/node_modules/compression');
let cors = require('../../lighters/node_modules/cors');

/* This whitelist can only filter requests from the browser clients, not headless clients not sockets */
var whitelist = [
    'http://localhost:1337',
];
var corsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            // console.log('origin undefined');
            callback(null, true)
        } else if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            log.d("[Resource access is Not allowed by CORS] ", origin);
            callback('This resource access from your Origin(' + origin + ') is Not allowed by CORS', false);
        }
        return;
    }
}
let corsMiddle = cors(corsOptions);

module.exports = {
    middleware: [
        bodyParser,
        compression(),
        function (req, res, next) {
            //example custom express middleware
            next();
        },
        corsMiddle,
    ],
    static: {
        // example statically served directory for web-app
        '/': '/public',
    }
}