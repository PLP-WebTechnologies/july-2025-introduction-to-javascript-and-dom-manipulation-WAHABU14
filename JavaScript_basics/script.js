// Part 1: Variables, Conditionals, and Output
let userName = prompt("What is your name?");
let age = parseInt(prompt("How old are you?"));

if (age >= 18) {
    console.log(`Hello, ${userName}! You're an adult.`);
} else {
    console.log(`Hello, ${userName}! You're a minor.`);
}

document.getElementById("header").innerHTML = `Hello, ${userName}!`;

// Part 2: Functions
function greet(name) {
    return `Hello, ${name}!`;
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(greet("Ahmad"));
console.log(calculateTotal(34, 18));

// Part 3: Loops
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(`Sum: ${sum}`);

numbers.forEach((num) => {
    console.log(num);
});

let countdown = 5;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

// Part 4: DOM Interactions
document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("output").innerHTML = "Button clicked!";
});

let list = document.getElementById("list");
for (let i = 1; i <= 5; i++) {
    let item = document.createElement("li");
    item.textContent = `Item ${i}`;
    list.appendChild(item);
}

document.getElementById("header").addEventListener("mouseover", () => {
    document.getElementById("header").style.color = "red";
});

document.getElementById("header").addEventListener("mouseout", () => {
    document.getElementById("header").style.color = "black";
});
