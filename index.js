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