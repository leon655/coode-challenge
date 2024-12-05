const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculatesalary() {
    rl.question("Enter basic salary (ksh): ", (basicSalaryInput) => {
        let basicsalary = parseFloat(basicSalaryInput);
        
        rl.question("Enter benefits (ksh): ", (benefitsInput) => {
            let benefits = parseFloat(benefitsInput);

            let grossSalary = basicsalary + benefits;
            let tax = 0;

            if (grossSalary <= 24000) {
                tax = grossSalary * 0.10;
            } else if (grossSalary <= 30000) {
                tax = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
            } else if (grossSalary <= 40000) {
                tax = 24000 * 0.10 + (16000) * 0.25 + (grossSalary - 30000) * 0.30;
            }

            let nhif = 0;

            if (grossSalary <= 5999) {
                nhif = 150;
            } else if (grossSalary <= 7999) {
                nhif = 300;
            } else if (grossSalary <= 11999) {
                nhif = 400;
            } else {
                nhif = 500;
            }

            let nssf = 400;
            let totaldeductions = tax + nhif + nssf;
            let netSalary = grossSalary - totaldeductions;

            console.log(`Basic salary: ksh ${basicsalary}`);
            console.log(`Benefits: ksh ${benefits}`);
            console.log(`Gross salary: ksh ${grossSalary}`);
            console.log(`PAYE (tax): ksh ${tax}`);
            console.log(`NHIF deduction: ksh ${nhif}`);
            console.log(`NSSF deduction: ksh ${nssf}`);
            console.log(`Total deductions: ksh ${totaldeductions}`);
            console.log(`Net salary: ksh ${netSalary}`);

            rl.close();
        });
    });
}

calculatesalary();