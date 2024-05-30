// const name = "Chris";
// const greeting = `Hello, ${name}`;
// console.log(greeting);
// window.alert(greeting);

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

// let ant = true;
// let boy = 7;
// let cat = 5;
// let dog = boy >7 ? ant : cat == 5;

// alert(dog);

// let a = 5;
// let b = a >4 ? 'sign-in successful' : 'sign-in failed';
// let my_name = document.getElementById('num').innerHTML = b
// // alert(b);

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

function Person(first, last, age, phone){
    this.firstName = first;
    this.lastName = first;
    this.age = age;
    this.phoneNo = phone;
};
const myFather = new Person("john", "mary", "50", "09012");