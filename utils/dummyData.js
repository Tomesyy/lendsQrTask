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
    ],
    loanData: [
        {
            id: 1,
            name: "Ren Money",
            description: "Salary earners discounted loan",
            interestRate: "3%",
            amount: "50,000",
            tenure: "1.5 yrs",

        }, 
        { 
            id: 2,
            name: "Kia Kia",
            description: "Easy small loan",
            interestRate: "5%",
            amount: "5,000",
            tenure: "3 months",

        }
    ]
}

module.exports = database;