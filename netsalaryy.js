const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateSalary() 
    rl.question(`Enter basic salary (ksh): `, (basicSalary) => 
        rl.question("Enter benefits (ksh): ", (benefits) => 
            basicSalary = parseFloat(basicSalary);
            benefits = parseFloat(benefits);

            let grossSalary = basicSalary + benefits;
            let tax = 0;

            if (grossSalary <= 24000) {
                tax = grossSalary * 0.10;
            } else if (grossSalary <= 30000) {
                tax = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
            } else if (grossSalary <= 40000) {
                tax = 24000 * 0.10 + (6000) * 0.25 + (grossSalary - 30000) * 0.30;
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
            let totalDeductions