const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000;

const database = {
    users: [
        {
            id: 1,
            fullName: 'Adesanya Adetomiwa',
            email: 'adetomiwaadesanya@yahoo.com',
            password: 'cookies',
            phoneNumber: '08178628499',
            address: '32, Love All Street, Yaba, Lagos',
            loans: [

            ]
        },
        {
            id: 2,
            fullName: 'Ren Money',
            email: 'renmoney@yahoo.com',
            password: 'bananas',
            phoneNumber: '09012345599',
            address: '32, Praise Street, Agege, Lagos',
            loans: [

            ]
        },
        {
            id: 3,
            fullName: 'Kia Kia',
            email: 'kiakia@yahoo.com',
            password: 'mangoes',
            phoneNumber: '08133455433',
            address: '32, Paul Street, Yaba, Lagos',
            loans: [

            ]
        }
    ],
    loans: [
        {
            id: 1,
            description: "Salary earners discounted loan",
            interestRate: "3%",
            amount: "50,000",
            tenure: "1.5 yrs",
        },
        {
            
            id: 2,
            description: "Easy small loan",
            interestRate: "5%",
            amount: "5,000",
            tenure: "3 months",
        }
    ]
}

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






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})