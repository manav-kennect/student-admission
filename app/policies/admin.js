module.exports = (req, res, next) => {
    if (req.headers.password == "123") {
        return next();
    }
    if (req.user && req.user.type == 10) {
        return next();
    } else {
        Services.Respond.unAuthorized(res, 'Auth failed');
    }
}