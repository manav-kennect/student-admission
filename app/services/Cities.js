const crudBuilder = require('../../../lighters/module/builders/crud.js');
// co/nsole.log(db)
// // \let crudBuilder = require('../../../../module/builders/crud');
// module.exports = crudBuilder(
//     {
//         collectionName: 'cities'
//     }, {
//     creation: (data) => {
//         // hook for transforming data before creation of a document in this collection
//         return Services.ParamsMapValidate(data, [
//             "url_slug",
//             "active",
//             "title",
//             "hasOcean",
//             "hasRivers"
//         ], ['rivers', 'oceans']);
//     }
// });