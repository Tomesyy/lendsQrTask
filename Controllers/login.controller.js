const database = require('../utils/dummyData');

const loginUser = (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({
            message: "Incorrect paramters"
        });
    }
    let userIni = false;
    database.users.map(user => {
        if(user.email === email && user.password === password){
            userIni = true;
            const safeUser = {
                id: user.id,
                name: user.name,
                email: user.email,
                phoneNumber: user.phoneNumber,
                address: user.address
            }
            return res.status(200).json({
                message: 'sucessfully logged in',
                data: safeUser
            })
        }
    });
    
    if(!userIni){
        res.status(400).json({
            message: 'cannot authenticate user'
        });
    }
}

module.exports = { loginUser };