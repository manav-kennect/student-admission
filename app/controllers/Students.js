module.exports.routes = {
    "POST /add/student": async function (req, res) {
        console.log("INSEdIE REQ",req.body)
        // const findStudent = await db.students.findOne({email: req.body.email})
        // console.log(findStudent,"FIND")
        const resp = await Services.Students.addStudentDetails(req.body)
        console.log(resp)
    }
}