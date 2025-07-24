// Problem 1
// let age = prompt("Enter Your Age: ");
const prompt = require('prompt-sync')();

let age = prompt("Enter Your Age: ");
console.log(`Your age is: ${age}`);

if(age<18){
    console.log("You get a 20% discount");
}
else if(age>=18 && age<=65){
    console.log("Normal ticket price applies");
}
else{
    console.log("You get a 30% senoir discount");
}


// Problem 2

var length = prompt("Enter the length of the rectangle: ");
const width = prompt("Enter the width of the rectangle: ");

const area = length*width;

console.log("Area of the rectangle is:", area);


// Problem 3

let product1 = {
    name:"Adapter",
    price:300,
    inStock: true,

}

let product2 = {
    name:"Keyboard",
    price:999,
    inStock: true,

}

let product3 = {
    name:"Mouse",
    price:500,
    inStock: false,

}

console.log(product1);
console.log(product2);
console.log(product3);



// Problem 4

 let guestList = ['john', 'alex', 'kevin', 'arron', 'michael'];

 function checkGuest(name) {
    if (guestList.includes(name)) {
        console.log('Welcome to the party!');
    } else {
        console.log('Sorry, you are not in the guest list.');
    }
}

checkGuest('john');
checkGuest('Bob');
