// <!-- 01 - ways to print in JavaScript -->

// document.write("this is document write")
// alert("hello world")

// <!--  02 - javascript console API -->

// console.log("hello world");
// console.warn("allah tu maalik hai");
// console.error("this is an error");

// <!--  02 - JavaScript Variables  -->
// What is Variables ? ans - Containers to store data values

var number1 = 54;
var number2 = 46;
// console.log(number1 + number2);

// <!-- 04 - Detatype in JavaScript -->
// Numbers
var num1 = 455;
var num2 = 34.33;
// console.log(num1)
// String
var str1 = "This is string";
var str2 = "this is also string";
// console.log(str2);
// Object
var marks = {
	ahte: 89,
	aman: 80,
	suchi: 78,
	nikeeta: 75,
	radhey: 85,
	jiggu: 90,
};

// console.log(marks);

// Booleans

var a = true;
var b = false;

// console.log(a, b);

var und = undefined;
// console.log(und)

var n = null;
// console.log(n)

/* 
At a very high level, there are two type of data types in JavaScript
1. primitive data type : Undefined, Null, number, string, boolean, symbol
2. Refrence data type : Arrays and Objects
*/

// Arrays

var arr = [1, 2, "jiggi", 4.56454, 5, 6, 7, 8, 9, 0];
// console.log(arr)

// Operators in JavaScript
// Arithmetics Operators
var a = 100;
var b = 10;

// console.log("The value of a + b = ", a + b);
// console.log("The value of a - b = ", a - b);
// console.log("The value of a * b = ", a * b);
// console.log("The value of a / b = ", a / b);

// Assignment Operators
var c = b;

// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparision operators
var x = 60;
var y = 61;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operator

// Logical and
// console.log(true && true);
// console.log(false && false);
// console.log(false && true);
// console.log(true && false);

// Logical or
// console.log(true || true);
// console.log(false || false);
// console.log(false || true);
// console.log(true || false);

// Logical not
// console.log(!true)
// console.log(!false)

// Function
function avg(a, b) {
	av = (a + b) / 2;
	return av;
}
c1 = avg(5, 10);
c2 = avg(60, 40);

// console.log(c1, c2);

// Conditionals JavaScript
// var age = 18;
// if (age >= 18) {
// 	console.log("You can ride vichele");
// } else {
// 	console.log("Sorry boy you are not legaly elegible to drive vichehe");
// }

// for loop
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// for (var i = 0; i <= arr.length; i++) {
// 	console.log(arr[i]);
// }

// forEach loop
// arr.forEach(function(element){
// 	console.log(element)
// })

// while loop
let j = 0;
// while (j < arr.length) {
// 	console.log(arr[j]);
// 	j++;
// }

// do-while loop
// do {
// 	console.log(arr[j]);
// 	j++;
// } while (j < arr.length);

// Date
let date_time = new Date();
// console.log(date_time)
// console.log(date_time.getHours())
// console.log(date_time.getMinutes())

// DOM Manipulation
let elem = document.getElementById("click");
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "grey";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elemClass[0].innerText);
// console.log(elemClass[0].innerHTML);

// tagn = document.getElementsByTagName("div");
// console.log(tagn);
// createdElement = document.createElement("p");
// createdElement.innerText = "This is a created para";
// tagn[0].appendChild(createdElement);

// createdElement1 = document.createElement("b");
// createdElement1.innerText = "This is a created bold tag";
// tagn[0].replaceChild(createdElement1, createdElement);

// // Selecting using query
// sel = document.querySelector(".container");
// console.log(sel);
// sel = document.querySelectorAll(".container");
// console.log(sel);

// function clicked() {
// 	console.log("button got clicked");
// }

// window.onload = function () {
// 	console.log("the document was loaded.");
// };

// // Events in JavaScript

// firstContainer.addEventListener("click", function () {
// 	console.log("button got clicked");
// });

// SetTimeOut and setinterval
// arrow function

function summ(a, b) {
	return a + b;
}
subb = (a, b) => {
	return a - b;
};

logKaro = () => {
	console.log("i am your log");
};
// setTimeout(logKaro, 2000)
// clr =  setInterval(logKaro, 2000)

// JavaSctipt LocalSorage
localStorage.setItem("name", "ahte");
localStorage;
localStorage.getItem("name");
localStorage.clear()

// Json
obj = {
	name: "ahte",
	length: 1,
	a: { this: "that" },
};
jso = JSON.stringify(obj);
console.log(typeof jso);
