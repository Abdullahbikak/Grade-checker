var score = prompt("Enter the student`s score (0-100):");

score = Number(score);

var grade;

if(score >= 90){
    grade = "A";
} else if(score >= 80) {
    grade = "B";
} else if(score >= 70) {
    grade = "C";
} else if(score >= 60){
    grade = "D";
} else if(score >= 50){
    grade = "E";
} else if (score >= 33){
    grade = "F";
} else {
    grade = "Fail";
}

alert("Your Grade Is" + " " + grade);




