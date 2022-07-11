//VERY EASY: Write a function named min that takes two arguments and returns their minimum.
function min(Num1, Num2) {
    if (Num1 > Num2) {
        return Num1;
    }
    else if (Num1 < Num2 ) {
        return Num2;
    }
    else {
        var invalid = "Invalid both are the same size";
        return invalid
    }
};

//EASY: Create an array of students holding their last name, first name, and age with 3 students. 
//To validate, please log a greeting with the first name, last name and age of the 2nd student. 
//The output should look like "Hello, my name is John Doe and I'm 19 years old."

var Students = {
    Names: ["Marvin", "Angel", "Paula"],
    LastNames: ["Mejia", "Rocha", "Violoria"],
    Age: ["19", "17", "18"]
};

function printOutput(val1, val2, val3) {
    var name = Students.Names[val1 - 1];
    var lastname = Students.LastNames[val2 - 1];
    var personAge = Students.Age[val3];
    returnval = "Hello, my name is " + name + " " + lastname + " and I'm " + personAge + " years old.";
    return returnval;
};

//MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. 
//For example: if the user enters the number 3, then it should return the month “March.”
//Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

var UserInput = window.prompt("Enter a numer (1-12): ");
var Months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "November", "December" ];

function WhatMonth(num) {
    if (num > 13) {
        console.log("Invalid Input, Please enter a number 1-12.")
    } 
    else if (num < 0) {
        console.log("Invalid Input, Please enter a number 1-12.")
    }
    else {
        return Months[num]
    }
};

WhatMonth(UserInput);

//Store Tom & Jerry’s mass and height as variables. 
//Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
//Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
var BMIPeople = {
    Names: ["Tom", "Jerry"],
    Heights: [9, 10],
    Masses: [8, 45]
};

function BMI(Height, Mass) {
    var BMIVal =  Mass / (Height * Height);
    return BMIVal;
};

function BMICompare() {
    var TomsBMI = BMI(BMIPeople.Heights[0], BMIPeople.Masses[0]);
    var JerryBMI = BMI(BMIPeople.Heights[1], BMIPeople.Masses[1]);

    if (TomsBMI > JerryBMI) {
        return true;
    }
    else if (TomsBMI < JerryBMI) {
        return false;
    }
    else {
        return "They are the same!"
    }
}



console.log("Is Tom's BMI higher than jerry? " + BMICompare());
