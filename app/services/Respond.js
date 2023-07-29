/* Services.Respond */
module.exports = {
    unAuthorized: (res, message) => {
        res.status(401);
        res.json({ ok: false, message: message || 'Unauthorized Request, Please check the request.' })
    },
    missingParams: (res, params) => {
        res.status(400);
        res.json({ ok: false, missing: params, message: 'Missing parameters' })
    },
    bad: (res, message) => {
        res.status(400);
        res.json({ ok: false, message: message || 'Bad Request' })
    }
}