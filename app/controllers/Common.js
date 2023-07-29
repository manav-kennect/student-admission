// module.exports.routes = {
//     'POST /login': async (req, res) => {
//         let data = Services.ParamsMapValidate(req.body, [
//             'username',
//             'password'
//         ]);
//         if (!data.missing) {
//             //log.d("[Login attempt] ", data);
//             res.json(await Services.Auth.issueToken(data));
//         } else {
//             Services.Respond.missingParams(res, data.missing);
//         }
//     },
//     'GET /sample/:what': async (req, res) => {
//         res.json(config.constants)
//     },

//     "GET /cities": async function (req, res) {
//         try {
//             console.log("[find] ", req.query);
//             let options = {};
//             if (req.query.project == 'all') {

//             } else {
//                 options.projection = {
//                     _id: 1, title: 1, caption: 1, url_slug: 1, seo: 1, destinations_covered: 1, costing: 1, gallery: 1, highlights: 1, available_dates: 1, likes: 1, views: 1
//                 }
//             }
//             let basic = { active: true };
//             let q = (req.query && req.query.match) ? { ...JSON.parse(req.query.match), ...basic } : basic;
//             let cities = await Services.Cities.find(q, options)
//             res.json({ ok: !!cities, list: cities });
//         } catch (err) {
//             res.status(400).json({ ok: false, ...err })
//         }
//     },
//     "PUT /cities/one": async function (req, res) {
//         // the guy editing is hitting this req
//         let city = false;
//         try {
//             console.log("[find one] ", req.query)
//             city = await Services.Cities.findOne(req.query && req.query._id);
//             res.json({ ok: !!city, item: city })
//         } catch (err) {
//             log.e('err in cities/one', err)
//             res.status(400).json({ ok: false, ...err })
//         }
//     },

// };
