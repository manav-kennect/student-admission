// module.exports.policies = [
//     "isLoggedIn",
//     "admin"
// ];

// module.exports.routes = {
//     "POST /one": async function (req, res) {
//         try {
//             let result = await Services.Cities.create(req.body);
//             res.json({ ok: !!result, ...result })
//         } catch (err) {
//             res.status(400).json({ ok: false, ...err })
//         }
//     }, 
//     "PUT /one": async function (req, res) {
//         try {
//             let result = await Services.Cities.update(req.body._id, req.body);
//             res.json({ ok: !!result, ...result })
//         } catch (err) {
//             res.status(400).json({ ok: false, ...err })
//         }
//     },
// }