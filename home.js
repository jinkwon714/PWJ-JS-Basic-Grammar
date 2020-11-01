console.log("hello");

// alert("hello this is hyukjin");

// how to write a comment inline

// variagles
var b = "smoothie";
console.log(b);

var someNumber = 45;
// console.log(someNumber);

// Manipulate DOM with Javascript
/*... It's just a Fancy way of saying 
change HTML with Javascript*/

// var age = prompt("What is your age?");

// document.getElementById("someText").innerHTML = age;

//Numbers in Javascript
var num1 = 10;

// ncerement num1 by 1
num1++;

// decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 6);

// Increment/decrement by any number you want
num1 += 10;
console.log(num1);

/* functions 
1. Create a function
2. Call the function
*/

//Create
function fun() {
  console.log("this is a function");
}

//Call
fun();

/* Let's create a function that take in a name 
and says hello followed by your name 

For example

Name: "Qazi"
Return: "Hello Qazi"
*/

function greeting(yourName) {
  var result = "Hello" + " " + yourName; // String Concatenation
  console.log(result);
}

// var name = prompt("what is your name?");
// greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers in a function?

function sumNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}

sumNumbers(10, 10);

/* While loops

var num = 0;

while (num < 100) {
  num += 1;
  console.log(num);
}

*/

// For loop
for (let num = 0; num <= 100; num++) {
  console.log(num);
}

// Data types
let yourAge = 18; // number
let yourName = "Bob"; // string
let name = { first: "Jane", last: "Doe" }; // object
let trutu = false; // boolean
let groceries = ["apple", "banana", "oranges"]; // array
let random; // undefined
let nothing = null; // value null

//String in JS (common methods)
let fruit = "banana,apple,orange,blackberry";
let moreFruits = "nana\napple"; // new line

console.log(moreFruits.length);
console.log(fruit.indexOf("nan"));
console.log(fruit.slice(2, 4));
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(",")); // split by a comma
console.log(fruit.split("")); // split by character

// Arrays
let fruits = ["banana", "apple", "oragne", "pineapples"];
fruits = new Array("banana", "apple", "oragne", "pineapples");

console.log(fruits[2]); // access value at index 2nd

fruits[0] = "pear";
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Array common methods
console.log("to string", fruits.toString());
console.log(fruits.join(" * "));
console.log(fruits.pop(), fruits); // remove the last item
console.log(fruits.push("blackberries"), fruits); // appends
console.log(fruits[4]);
fruits[fruits.length] = "new fruit"; // same as push
console.log(fruits);
fruits.shift(); // remove first element from an array
console.log(fruits);
fruits.unshift("kiwi"); // add first element to an array
console.log(fruits);

let vegetables = ["asparagus", "tomato", "broccoli"];
let allGroceries = fruits.concat(vegetables); // combine arrarys
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort()); // alphabetically sorted

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 31, 2];
console.log(
  someNumbers.sort(function (a, b) {
    return a - b;
  })
);
// sorted in ascending order

console.log(
  someNumbers.sort(function (a, b) {
    return b - a;
  })
);
// sorted in descending order

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);
