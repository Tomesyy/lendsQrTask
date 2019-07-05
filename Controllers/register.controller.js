const database = require('../utils/dummyData');

const registerUser = (req, res) => {
    const { name, email, password, phoneNumber, address } = req.body;
    if(!name || !email || !password || !phoneNumber || !address){
        return res.status(400).json({
            message: 'Incorrect parameters'
        });
    }
    const id = database.users.length + 1;
    let userIni = false;
    const newUser = {
        id,
        name,
        email,
        password,
        phoneNumber,
        address
    }
    const safeUser = {
        id,
        name,
        email,
        phoneNumber,
        address
    }
    database.users.map(user => {
        if(user.email === email){
            userIni = true;
        }
    });
    if(userIni){
        return res.status(400).json({
            message: 'cannot create user because user already exists'
        });
    } else {
        database.users.push(newUser);
        res.status(200).json({
            message: 'success',
            data: safeUser
        });
    }
}

module.exports = { registerUser };