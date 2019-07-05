const express = require('express');
const bodyParser = require('body-parser');
const database = require('./utils/dummyData');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000;


// INDEX ROUTE
app.get('/', (req, res) => {
    res.status(200).json(database.users);
});


// REGISTER ROUTE
app.post('/register', (req, res) => {
    const { fullName, email, password, phoneNumber, address } = req.body;
    const id = database.users.length + 1;
    let userIni = false;
    const newUser = {
        id,
        fullName,
        email,
        password,
        phoneNumber,
        address,
        loans: []
    }
    const safeUser = {
        id,
        fullName,
        email,
        phoneNumber,
        address,
        loans: []
    }
    database.users.map(user => {
        if(user.email === email){
            userIni = true;
        }
    });
    if(userIni){
        return res.status(400).json('cannot create user');
    } else {
        database.users.push(newUser);
        res.status(200).json({
            message: 'success',
            data: safeUser
        });
    }
});

// LOGIN ROUTE
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    database.users.map(user => {
        if(user.email === email && user.password === password){
            const safeUser = {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                address: user.address,
                loans: user.loans
            }
            return res.status(200).json({
                message: 'sucessfully logged in',
                data: safeUser
            })
        }
    });
    
    res.status(400).json('cannot authenticate user');
});

// GET LOANS ROUTE
app.get('/loans', (req, res) => {
    return res.status(200).json(database.loans);
});

// APPLY FOR LOAN ROUTE
app.post('/loans/:id', (req, res) => {
    let loanIni = false;
    database.loans.map(loan => {
        if(loan.id == req.params.id){
            loanIni = true;
            const { fullName } = req.body;
            const newLoanData = {
                id: database.loanData.length + 1,
                name: fullName,
                description: loan.description,
                interestRate: loan.interestRate,
                amount: loan.amount,
                tenure: loan.tenure
            }
            database.loanData.push(newLoanData);
            return res.status(200).json({
                message: 'loan application successful',
                data: newLoanData
            });
        }
    });
    if(!loanIni){
        res.status(400).json('cannot complete loan application');
    }
});






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})