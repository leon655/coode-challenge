function calculatesalary() {
    let basic salary =parsefloat(prompt("enter basic salary(ksh):"));
    let benefits = parsefloat(prompt("enter benefits (ksh):"));

    let grossSalary = basicsalary + benefits;
    let tax = 0;

    if (grossSalary<=24000) {
        tax = grosSSalary * 0.10;
    }else if (grossSalary <= 30000) {
        tax = 24000 *0.10 +(grossSalary-24000) *0.25;
    }else if (grosssalary <=40000) {
        tax = 24000 *0.10 +(16000)*0.25+(grossSalary-30000)*0.30;
}
let nhif=0;

if(grossSalary<=5999) {
    nhif= 150;
}else if (grossSalary<=7999) {
    nhif =300;
}else if (grossSalary<=11999) {
    nhif = 400;
}else {
    nhif =500;

}
let nssf =400;
let totaldeductions=tax+nhif+nssf;
let netSalary= grossSalary-totaldeductions;

console.log('basic salary:ksh ${basicsalary}');
console.log("benefits: ksh${benefits}");
console.log("gross salary: ksh${grossSalary}");
console.log("PAYE (tax):ksh &{tax}");
console.log("nhif deduction:ksh ${nhif}");
console.log("nssf deduction:ksh${nssf}");
console.log("total deductions:ksh${totaldeductions}");
console.log("net salary;ksh ${netsalary}");
}

calculatesalary();


}
}
}
    }

}
