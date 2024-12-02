function getgrade() {
    let marks = prompt("enter the student's marks (0-100):");

    marks = number(marks);
    if (marks < 0|| marks >100|| isNaN(marks)) {
        console.log("invalid input.please enter a number between 0 nad 100.");
        return;

    }


    
    }
if (marks >79) {
    console.log("grade:A");
}else if (marks >= 60){
    console.log("grade:B");
}else if (marks >= 50) {
    console.log("grade:c");
}else if (marks>= 40) {
    console.log("grade:D");
}else {
    console.log("grade: E");
}


getgrade();

}
}
}

}
    
}


}