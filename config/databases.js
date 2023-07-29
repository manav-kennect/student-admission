let conf = {
    dev: {
        'example': {
            primary: true,
            dbms: 'mongodb',
            host: '127.0.0.1:27017',
            dbName: 'example',
            un: "admin",
            pw: false
        }
    },
    local: {
        'example': {
            primary: true,
            dbms: 'mongodb',
            host: '127.0.0.1:27017',
            dbName: 'admission',
            un: "admin",
            pw: false
        }
    },
}
module.exports = conf;