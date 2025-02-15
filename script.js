function greet(name) {
    return ("Hello there, " + name);
    
}
console.log(greet ("Dor"));

function addNumbers(num1, num2) {
    return num1 + num2
}
console.log(34 + 13);

let x = 10;  // Global variable

console.log(x);

function changeValue() {
    let x = 47;
    console.log(x);
}

changeValue();

console.log(x);

function outerFunction() {
    let count = 0;
    
    return function() {
        count++;
        console.log(count);
    };
   
}

let increment = outerFunction();

increment();
increment();
increment();
increment();
increment();