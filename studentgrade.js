function getmarks(marks) {


if (marks >79) {
    console.log(`${marks} -grade A`);
}else if (marks >=60) {
    console.log(`${marks} -grade B`);
}else if (marks >=50) {
    console.log(`${marks} -grade C`);
    }else if (marks >=40) {
        console.log(`${marks} -grade D`);
        }else {
            grade ="E";
            console.log(`${marks} -grade ${grade}`);
        }
    }
    getmarks(90);
    getmarks(70);
    getmarks(40);
    getmarks(30);
    getmarks(10);




