const database = require('../utils/dummyData');

const getAllLoans = (req, res) => {
    return res.status(200).json(database.loans);
}

const applyLoan = (req, res) => {
    let loanIni = false;
    database.loans.map(loan => {
        if(loan.id == req.params.id){
            loanIni = true;
            const { name } = req.body;
            const newLoanData = {
                id: database.loansData.length + 1,
                name: name,
                description: loan.description,
                interestRate: loan.interestRate,
                amount: loan.amount,
                tenure: loan.tenure
            }
            database.loansData.push(newLoanData);
            return res.status(200).json({
                message: 'loan application successful',
                data: newLoanData
            });
        }
    });
    if(!loanIni){
        res.status(400).json('cannot complete loan application');
    }
}


module.exports = {
    getAllLoans,
    applyLoan
}