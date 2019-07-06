const express = require('express');
const bodyParser = require('body-parser');
const registerController = require('./Controllers/register.controller');
const loginController = require('./Controllers/login.controller');
const loanController = require('./Controllers/loan.controller');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000;


// INDEX ROUTE
app.get('/', (req, res) => {
    res.status(200).json('API is working!!!!!');
});


// REGISTER ROUTE
app.post('/register', registerController.registerUser);
// LOGIN ROUTE
app.post('/login', loginController.loginUser);
// GET LOANS ROUTE
app.get('/loans', loanController.getAllLoans);
// APPLY FOR LOAN ROUTE
app.post('/loans/:id', loanController.applyLoan);






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})