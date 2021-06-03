/* Rest and spread operators */

/* Rest Operators */
// The following function multiplies numbers passed in the parameter
function multiply(...args) { // Rest operator
    //body
    console.log(args);
    let product = 1;
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
        product *= args[i]; 
        // let test = "";
        // var test = "";
    }
    console.log(product);
}

multiply(2,4);
multiply(1,2,3,4,5);

/* Spread Operators */

function sum (x, y, z){ 
    return x + y + z;
}

const numbers =[10,20,30];

console.log(sum(...numbers)); // Spread operator



/* DOM MANIPULATION */

// let t = document.getElementById("myDog");
// console.log(t);
// let t1 = document.getElementsByClassName("dogs");
// console.log(Array.isArray(t1));

// let t2 = document.getElementsByTagName("h1");
// console.log(t2);

/* We can also be able to use querySelector, querySelectorAll

Searching CSS selectors
1. Class selector
2. id selector
3. element selector

*/

//The querySelector will return the first element that matches the CSS selector
let t3 = document.querySelector(".dogs"); // 1: ".className" 2: "#myDogs" 3: ""

// This only returns ONE element (first)
console.log(t3);

// This will return all elements that match a specified css selector
let t4 = document.querySelectorAll(".dogs");
console.log(t4);

// If you use Array.isArray(t4) it will say false, however if you do a console.log(t4[0]) it will return first element as
// the list is still 0 indexed
// If you would like an array from it you can use: Array.from(t4)

/* The Array.from(object) returns an array of objects from given object
*/
let arrayT4 = Array.from(t4);

console.log(Array.isArray(arrayT4));
console.log(arrayT4);

// Accessing nodes 
let x = document.getElementById("mainBody").previousElementSibling;
console.log(x);

// Syntax for JS vs CSS: remove hyphens and make next word uppercase: line-style-type -> lineStyleType
let x1 = document.getElementById("mainBody");
x1.style.backgroundColor = "yellow";
x.style.backgroundColor ="green";

/* This is equivalent to the following code for CSS:

#mainBody {
    background-color: yellow;
}

h1 {
    backgound-color: green;
}

*/
// Creates element but no content...
document.createElement("p");

// You can do the following instead

let newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is our new paragraph";

let newParagraph2 = document.createElement("p");
newParagraph2.innerHTML = "This is our 2nd new paragraph appended to mainBody";

document.body.appendChild(newParagraph);
document.getElementById("mainBody").appendChild(newParagraph2);

/* js events 

    Syntax for adding addEventListener (not available in internet explorer 8)
    document.addEventListener(event, function, useCapture);

    event: This specifies the name of the event

    function: this specifies the function that should run when the event occurs.
    The first and second parameters are required. You must provide the event and the function

    UseCapture: boolean value that specifies whether the event should be executed in the capturing 
    and the bubbling phase.
*/

document.addEventListener("click", function(){
    alert("today");
});