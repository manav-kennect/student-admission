module.exports = {
    /* mendatory fields */
    databaseConnections: 'dev',
    dbAuth: false,
    port: 3000, // defaults to 1337
    usageAnalytics: {
        collect: false,
    },
    logs: {
        /* To enable logs from your app */
        app: true,
        error: true,
        lighters: true,
    },
    auth: {
        pwHashSecret: "sample",
        jwtSigningParams: {
            expiresIn: 60 * 60 * 24,//24 hour 
            // If you wany asym crypto
            // algorithm: 'RS256'
        },
        superSecret: '123',
        /* How to generate keys 
            0. ssh-keygen
            1. ssh-keygen -f ./key.pub -e -m pem >> ./key-pub.pem

            uncomment following lines

            privateKey: require('fs').readFileSync('~/.keys/key1.pem'),
            publicKey: require('fs').readFileSync('~/.keys/key1.pub.pem'),
        */
    },
    /* custom fields */
    a: 33
}

