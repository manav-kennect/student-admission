module.exports = async (req, res, next) => {
    if (!!req.headers.password) {
        return next();
    }
    if (req.headers.Authorization) {
        req.headers.authorization = req.headers.Authorization;
    }
    if (req.headers.authorization) {
        try {
            req.user = await Services.Auth.authenticate(req.headers.authorization);
            next();
        } catch (invalidToken) {
            log.e("[invalidToken]: ", invalidToken)
            Services.Respond.unAuthorized(res, "Invalid Auth");
        }
    } else {
        Services.Respond.unAuthorized(res, "Missing Authorization header");
    }
}