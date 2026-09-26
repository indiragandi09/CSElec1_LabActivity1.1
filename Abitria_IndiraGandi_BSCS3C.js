// 1. VARIABLES
let studentName = "Indira";
let age = 21;
let grade = 85;


// 2. CONDITIONALS
if (age >= 21) {
    console.log("You are an adult.");
}

if (grade >= 75) {
    console.log("You passed.");
}

if (studentName == "Indira") {
    console.log("Hello Indira!");
}


// 3. LOOPS
for (let i = 1; i <= 3; i++) {
    console.log("For loop: " + i);
}

let x = 1;
while (x <= 3) {
    console.log("While loop: " + x);
    x++;
}

let y = 1;
do {
    console.log("Do while loop: " + y);
    y++;
} while (y <= 3);


// 4. ARRAYS
let subjects = ["CS301", "CS302", "CS303"];
let scores = [85, 90, 88];
let hobbies = ["Reading", "Gaming", "Sports"];

console.log(subjects);
console.log(scores);
console.log(hobbies);