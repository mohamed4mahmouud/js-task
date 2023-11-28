//Q1
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = confirm(`Your Name Is ${firstName} ${lastName}`);
var birthYear = Number(prompt("Enter your birth year"));
var age = new Date().getFullYear() - birthYear;

alert(`Welcome ${firstName} ${lastName} you are ${age} years old`);

//Q2
alert("first release of a calculator that only has a summation feature ");
var firstNum = Number(prompt("Enter First Number"));
var secondNum = Number(prompt("Enter Second Number"));

alert(firstNum + secondNum);
