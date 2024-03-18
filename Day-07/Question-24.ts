// Equality with strings
let fruit = "Apple";
console.log("Testing with equality and inequality");
console.log(fruit == "Apple"); //true
console.log(fruit == "apple"); //false

// LowerCase function
console.log("Testing lower case function");
console.log(fruit.toLowerCase() == "apple"); //true
console.log(fruit.toLowerCase() == "Apple"); //false

//Numerical test
let num = 28;
console.log("Testing numerical functions");
console.log(num > 25); //true
console.log(num < 20); //false
console.log(num != 28); //false
console.log(num == 28); //ture

//and & Or operator 
let x = 10;
let y = 5;
console.log("Testing and & or operator");
console.log(x > 8 && y < 3); //flase
console.log(x < 15 || y > 7); //true

//Test whether an item is in array
let flowers = ["Rose", "Lily", "Marigold", "Cherry blossoms"];
console.log("Is 'cherry blossom' in flowers");
console.log(flowers.includes("Cherry blossoms")); //true

//Test whether an item is not in array
let vegetables = ["Potato", "Tomato", "Onion", "Cucumber"];
console.log("Is 'carrot' in vegetables?");
console.log(vegetables.includes("carrot")); //false
export{}