const query = require('../Database/DB-specified-doctors');
const selecteddoctor = async(req,res,next) => {
    console.log(req.params.id);
    
    const result = await query.getdoctorsbyid(req.params.id);
    res.render('DoctorDetails',{
        name:result.rows
    })
}

module.exports = selecteddoctor;