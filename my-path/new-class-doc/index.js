// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting);
// window.alert(greeting);

// #JavaScript Comparison and Logical Operators
// let num = 15;
// num += 5;
// window.alert(num);


// let xr = prompt('what is your name');
// const my_name = document.getElementById('num').innerHTML = xr

// let first_num = 20;
// let second_num = '20';
// alert(first_num==second_num);

// let first_num1 = 15;
// let second_num2 = 15;
// alert(first_num1===second_num2);



// #Conditional (Ternary) Operator
// let ant = true;
// let boy = 7;
// let cat = 5;
// let dog = boy >7 ? ant : cat == 5;

// alert(dog);

// let a = 5;
// let b = a >4 ? 'sign-in successful' : 'sign-in failed';
// let my_name = document.getElementById('num').innerHTML = b
// // alert(b);

// function myFunction() {
//     let voteable;
//     let age = Number(document.getElementById("age").value);
//     if (isNaN(age)) {
//       voteable = "Input is not a number";
//     } else {
//       voteable = (age < 18) ? "Too young" : "Old enough";
//     }
//     document.getElementById("num").innerHTML = voteable + " to vote";
   
//   }

// let x =100;
// x &= 5;

// shorthand for `x = x << 5;`. This statement shifts the bits of `x` to the left by 5 positions.
// let y =300;
// y <<= 6;

// let z =10;
// z ^= 5;

// let c =10;
// c |= 5;

// shorthand for `x = x ^ 5;`.
// let d =10;
// d **= 5;

// shorthand for `x = x / 5;`.
// let e =25;
// e /= 5;

// is shorthand for `x = x % 5;` the value of x is the remainder.
// let f =19;
// f %= 5;

// let g =-100;
// g >>>= 5;

// let people
// let my_nam = document.getElementById('num').innerHTML = g





// displaying javascript Objects by name

//  const fruits = {
//     color: "green",
//     name: "apple",
//     shape: "circle",
//     type: "berry",
//     weight: "100g",
   
//     describe: function(){
//     document.getElementById('num').innerHTML = "The" + " " + this.color + " " + this.name + " " + this.shape + " " + "weighs" + " " + this.weight;
// },
//     fruitingDiscovery: function(){
//     document.getElementById('num2').innerHTML = "The" + " " + this.color + " " + this.name + " " + this.shape + " " + "weighs" + " " + this.fruitsType.fruit2 + " " + "of" + " " + fruits.fruitsType.fruit4.gweight;
// },
// fruitsType: {
//     fruit1: "orange",
//     fruit2: "bannana",
//     fruit3: "sugarcane",
//     fruit4: {
//         gweight: "500g",
//     },
// },
// };
// fruits.describe();
// fruits.fruitingDiscovery();
// delete fruits["shape"];

// document.getElementById('num').innerHTML = "The" + " " + fruits.color + " " + fruits.name + " " + fruits.shape + " " + "weighs" + " " + fruits.weight;



// const _person_details = {
//     first_Name: "Gbenga", 
//     surname_Name: "Oladunjoye", 
//     middle_Name: "Oluwaferanmi", 
//     id_No: "17/30GA066",
//     full_Name: function() {
//         return this.first_Name + " " + this.surname_Name + " " + this.middle_Name;
//     },

//     full_Name2: function() {
//         return (this.first_Name + " " + this.surname_Name + " " + this.middle_Name).toUpperCase();
//     },
// };
// document.getElementById('num3').innerHTML = _person_details.full_Name2();



// displaying javascript Objects in a loop method

// const _person_details = {
//     first_Name: "Gbenga", 
//     surname_Name: "Oladunjoye", 
//     middle_Name: "Oluwaferanmi", 
//     id_No: "17/30GA066",
// };
// let text = " ";
// for (let y in _person_details){
//     text += _person_details[y] + " ";
// }
// document.getElementById('num3').innerHTML = text;



// const fruits = {
//     Bannana: "500g",
//     Orange: "300g",
//     Apple: "100g",
// };
// let text = " ";
// for (let [fruit, value] of Object.entries(fruits)){
//     text += fruit + ": " + " " + value + "<br>"; 
// };
// document.getElementById('num3').innerHTML = text;





// displaying javascript Objects using Object.values() method

// const _person_details = {
//     first_Name: "Gbenga", 
//     surname_Name: "Oladunjoye", 
//     middle_Name: "Oluwaferanmi", 
//     id_No: "17/30GA066",
// };

//  const myArray = Object.values(_person_details)
// document.getElementById('num3').innerHTML = myArray;



// displaying javascript Objects using JSON.Signify() method

// const fruits = {
//         Bannana: "200",
//         Apple: "400",
//         Cashew: "700",
//         Guava: "450",
// };

// const text = JSON.stringify(fruits);
// document.getElementById('num3').innerHTML = text;


// #Object Constructor Functions

// function Person(first, last, age, phone){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.phoneNo = phone;
// };
// const myFather = new Person("John", "Mary", "50", "09012346744");

// document.getElementById('num3').innerHTML = "My name is" + " " + myFather.firstName + " " + myFather.lastName + " " + "and my age is" + " " + myFather.age + " " + "and my phone number is" + " " + myFather.phoneNo + ".";


// ##javascript strings
// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// let letter = text.at(2);
// let letter2 = text[2];

// let text3 = "Apple, Banana, Kiwi";
// let part = text3.slice(7, 13);

// let text1 = "Hello World!";
// let text2 = text2.toUpperCase();
// let text4 = text4.toLowerCase();

// let text5 = "      Hello World!      ";
// let text6 = text5.trim();

// let text7 = "5";
// let padded = text7.padStart(4,"0");

// let text8 = "Hello world!";
// let result = text.repeat(2);

// let text9 = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");

// // 'g' means global flag
// let text10 = "Please visit Microsoft and Microsoft!";
// let newText1 = text.replace(/Microsoft/g, "W3Schools");

// let text11 = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate", 15);

// let text12 = "Please locate where 'locate' occurs!";
// text.search(/locate/);

// let text13 = "Hello world, welcome to the universe.";
// text.includes("world");

// let text14 = "Hello world, welcome to the universe.";
// text.startsWith("Hello");

// let text15 = "Hello world, welcome to the universe.";
// text.startsWith("world", 6)

// let text16 = "Hello world, welcome to the universe.";
// text.endsWith("world", 11);



// #JavaScript Arrays

// const car = [];
// car[0] = "Toyota";
// car[1] = "Bens";
// car[2] = "Range Rover";
// document.getElementById('num3').innerHTML = car;

// #Converting an Array to a String

// const cars_model = ["Volvo", "Lambo", "Jumpo"];
// document.getElementById('num3').innerHTML = cars_model.toString();


// #Array Elements Can Be Objects

// #The length Property

// const cars_model = ["Volvo", "Lambo", "Jumpo"];
// let car = cars_model.length;
// document.getElementById('num3').innerHTML = car;

// #Looping Array Elements
// const fruits = ["Mango", "Orange", "Cashew", "Guava", "Apple", "Berry", "Water Melon", "Carrot"];
// let flen = fruits.length;
// let text = "<ul>";
// for ( let x = 0; x<flen; x++) {
//  text += "<li>" + fruits[x] + "</li>";
// };
// text += "</ul>";
// document.getElementById('num3').innerHTML = text;

// #Looping Array Elements using forEach() method
// const fruits = ["Mango", "Orange", "Cashew", "Guava", "Apple", "Berry", "Water Melon", "Carrot"];
// let text = "<ul>";
// fruits.forEach(myFun);
// text += "</ul>";
// function myFun(values){
//     text += "<li>" + values + "</li>";
// };
// document.getElementById('num3').innerHTML = text;


// #Nested Arrays and Objects
// let x = "";
// const container = {
//     name: "John",
//     age: "59",
//     cars: [
//         {name: "Toyota", models: ["ferrari", "lambo", "Jumpo"]},
//         {name: "BMW", models: ["349", "260", "100"]},
//         {name: "Porshe", models: ["76", "1265", "786"]},
//     ],
// };

// for (let i in container.cars){
//     x +="<h2>" + container.cars[i].name + "</h2>";
//     for (let h in container.cars[i].models){
//         x += container.cars[i].models[h] + "<br>";
//     };
// };
// document.getElementById('num3').innerHTML = x;

// #Popping and Pushing

// #combining sort() and reverse() you can sort an array in descending order
// const names = ["John", "Wale", "Segun", "Diana", "Awele"];
//  names.sort();
//  names.reverse();
// document.getElementById('num3').innerHTML = names;


// #JavaScript Array filter() with the numerical sorting method
// const numb = [10, 15, 25, 67, 34, 90, 66, 27, 50];
// const num = numb.filter(myNumb);
// num.sort(function(a,b){return a-b});
// function myNumb(value, index, array){
//     return value > 49;
// };
// document.getElementById('num3').innerHTML = num;

// #The reduce() Method
// const numb = [10, 15, 25, 67, 34, 90, 66, 27, 50];
// const sum = numb.reduce(mySum);
// function mySum(sumUp, value, index, array){
//     return sumUp + value;
// }
// document.getElementById('num3').innerHTML = sum;

// #JavaScript Array keys()
// const numb = [10, 15, 25, 67, 34, 90, 66, 27, 50];
// const key = numb.keys();
// let text = "";
// for (let x of key){
//  text += x + "<br>";
// }
// document.getElementById('num3').innerHTML = text;


// #JavaScript Array entries()
// const numb = [10, 15, 25, 67, 34, 90, 66, 27, 50];
// const key = numb.entries();
// let text = "";
// for (let x of key){
//  text += x + "<br>";
// }
// document.getElementById('num3').innerHTML = text;

// #JavaScript Array Const
// An array declared with const has Block Scope.


// #JavaScript Get Date Methods
// const dateNew = new Date("2023-02-11");
// document.getElementById('num3').innerHTML = dateNew.getFullYear();

// #Compare Dates
// let message = "";
// const date = new Date();
// const toDate = new Date();
// toDate.setFullYear("2022, 11, 05");
// if (toDate > date){
//     message = "correct";
// } else{
//     message = "incorrect";
// };
// document.getElementById('num3').innerHTML = message;

// #JavaScript Math Object
// document.getElementById("num2").innerHTML = Math.round(4.1);
// document.getElementById("num3").innerHTML = Math.ceil(4.1);
// document.getElementById("num").innerHTML = Math.floor(4.1);


// #Boolean Values
// document.getElementById("num2").innerHTML = Boolean(4>1);
// document.getElementById("num").innerHTML = 4>5;

// #JavaScript Comparison and Logical Operators


// #JavaScript if, else, and else if
const age = 25;
if (age < 18){
    vote = "you are too young to vote";
}else if (age < 23) {
    vote = "you are okay to vote";
} else {
    vote = "old enough";
}
document.getElementById('num3').innerHTML =vote;
