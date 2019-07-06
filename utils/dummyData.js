module.exports = database = {
    users: [
        {
            id: 1,
            name: 'Adesanya Adetomiwa',
            email: 'adetomiwaadesanya@yahoo.com',
            password: 'cookies',
            phoneNumber: '08178628499',
            address: '32, Love All Street, Yaba, Lagos'
        },
        {
            id: 2,
            name: 'Ren Money',
            email: 'renmoney@yahoo.com',
            password: 'bananas',
            phoneNumber: '09012345599',
            address: '32, Praise Street, Agege, Lagos'
        },
        {
            id: 3,
            name: 'Kia Kia',
            email: 'kiakia@yahoo.com',
            password: 'mangoes',
            phoneNumber: '08133455433',
            address: '32, Paul Street, Yaba, Lagos'
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
    loansData: [
        {
            id: 1,
            name: "Ren Money",
            email: "renmoney@yahoo.com",
            description: "Salary earners discounted loan",
            interestRate: "3%",
            amount: "50,000",
            tenure: "1.5 yrs",

        }, 
        { 
            id: 2,
            name: "Kia Kia",
            email: "kiakia@yahoo.com",
            description: "Easy small loan",
            interestRate: "5%",
            amount: "5,000",
            tenure: "3 months",

        }
    ]
}