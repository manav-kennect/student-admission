module.exports = {
    addStudentDetails: async (data) => {
        try{
            console.log(data.email)
          
        //    if(Object.keys(findStudent).length != 0) {
            const resp = await db['students'].insertOne(data)
            return {ok:true,res: resp}
        //    }
        //    else {
        //     return {ok:false,res:"Student is already registered"}
        //    }
        }
        catch(err) {
            // add some good response status here
            console.log(err)
            return {ok:false, res: "Failed"}
        }
    }
}