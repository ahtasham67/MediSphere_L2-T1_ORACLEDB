const userauthenticate = require('../Database/auth')

const auth = async(req,res) =>{
    const { username, password } = req.body;
  
    const result = await userauthenticate(username);
    if (result.rows.length === 1) {
        const user = {
            username: result.rows[0].FIRSTNAME,
        };
        if (user) {
            console.log('Authenticated user:', user);
            req.session.user = user;
            // Redirect to the landing page after successful login
            res.redirect('/landing');
        } else {
            res.send('Invalid username or password');
        }
        
    } else {
        console.log('return null');
    }

}
module.exports = auth;