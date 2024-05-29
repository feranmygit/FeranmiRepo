const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);// "Hello, Chris"
// window.alert(greeting);

let num = 15;
num += 5;
// window.alert(num);


let xr = prompt('what is your name');
const my_name = document.getElementById('num').innerHTML = xr

let first_num = 20;
let second_num = '20';
// alert(first_num==second_num);

let first_num1 = 15;
let second_num2 = 15;
// alert(first_num1===second_num2);

let ant = true;
let boy = 7;
let cat = 5;
let dog = boy >7 ? ant : cat == 5;

// alert(dog);

let a = 5;
let b = a >4 ? 'sign-in successful' : 'sign-in failed';
// let my_name = document.getElementById('num').innerHTML = b
// alert(b);

let x =100;
x &= 5;

// shorthand for `x = x << 5;`. This statement shifts the bits of `x` to the left by 5 positions.
let y =300;
y <<= 6;

let z =10;
z ^= 5;

let c =10;
c |= 5;

// shorthand for `x = x ^ 5;`.
let d =10;
d **= 5;

// shorthand for `x = x / 5;`.
let e =25;
e /= 5;

// is shorthand for `x = x % 5;` the value of x is the remainder.
let f =19;
f %= 5;

let g =-100;
g >>>= 5;

let people 
// let my_nam = document.getElementById('num').innerHTML = g


 const fruits = {
    color: "green",
    name: "apple",
    shape: "circle",
    type: "berry",
    weight: "100g",
    describe: function(){
    document.getElementById('num').innerHTML = "The" + " " + this.color + " " + this.name + " " + this.shape + " " + "weighs" + " " + this.weight;
},
};
fruits.describe();

prompt(fruits.describe());
// alert(fruits.name);