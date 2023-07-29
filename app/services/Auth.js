/**
 * Services.Auth
 * */

const jwt = require('../../../lighters/node_modules/jsonwebtoken');
// const crypto = require('../../../lighters/node_modules/crypto')

const ObjectID = require('../../../lighters/node_modules/mongodb').ObjectID;

let constants = config.auth;

const private = {
    encode: (data, jwtSigningParams) => {
        return jwt.sign(data, constants.superSecret, jwtSigningParams || constants.jwtSigningParams);
    },
    decode: token => {
        return new Promise(function (resolve, reject) {
            if (typeof token == 'string') {
                jwt.verify(token, constants.superSecret, function (err, decoded) {
                    log.d('error=', err)
                    if (!!err) {
                        if (err.name) {
                            if (err.name == 'TokenExpiredError') {
                                reject({ ok: false, message: 'TokenExpiredError' });
                            }
                        }
                        reject({ ok: false, message: 'Failed to authenticate token.' });
                    } else {
                        // if everything is good, save to request for use in other routes
                        resolve({ ok: true, decoded: decoded });
                    }
                });
            }
            else {
                reject({ ok: false, message: 'issue' });
            }
        });
    },
    verify: token => {
        return new Promise(function (resolve, reject) {
            jwt.verify(token, constants.superSecret, (err, decoded) => {
                if (err) {
                    reject({ ok: false, message: 'Failed to authenticate token.' });
                } else {
                    resolve(decoded);
                }
            });
        });
    },

}

module.exports = {
    issueToken: async data => {
        let query = {
            username: data.username.toLowerCase(),
            password: data.password,
            // 'record.active': true
        };
        let projection = {
            _id: 1,
            type: 1,
            username: 1,
            userData: 1
        };
        let cResult = await db.auth_credentials.findOne(query, { 'projection': { _id: 1 } });
        let user = null;
        if (cResult) {
            user = await db.users.findOne({ _id: new ObjectID(cResult._id) }, { 'projection': projection })
        } else {
            return { ok: false, message: 'No such user or maybe wrong password' };
        }
        return {
            // watch for long tokens
            ok: true, user, token: private.encode(user)
        };
    },

    authenticate: (token) => {
        return private.verify(token);
    },

}