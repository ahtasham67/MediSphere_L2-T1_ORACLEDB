const query = require('../Database/DB-specified-doctors');
const specificdoctorhandler = async(req,res,next) => {
    console.log(req.params.id);
    
    const result = await query.getdoctorsbyspecialiy(req.params.id);
    //console.log("result goes here");
   // console.log(result.rows)
    res.render('index',{
        name:result.rows
       })
}
module.exports = specificdoctorhandler;