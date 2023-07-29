module.exports = function (params, keys, extraKeys) {
    let missing = [];
    let obj = {};
    keys.forEach((e) => {
        if (!params.hasOwnProperty(e)) {
            missing.push(e);
        } else {
            obj[e] = params[e];
        }
    });
    if (extraKeys)
        extraKeys.forEach((e) => {
            if (params.hasOwnProperty(e)) {
                obj[e] = params[e];
            }
        });
    if (missing.length == 0) {
        return obj;
    } else {
        return {
            missing: missing, cry: (res) => { Service.Respond.missingParams(res, missing) }
        };
    }
}