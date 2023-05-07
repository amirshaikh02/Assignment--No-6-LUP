// ## Questions → Multiple API Calls.

// 1. There should be five buttons in your project.
// 2. Each of them should call a different API and print data in the console.
// 3. APIs can be of your choice.

// ## Test case →

// 1. Every button click is calling a real API ( See network section of developer tools for reference )
// 2. Data Visible in Console


document.getElementById("button1").addEventListener("click", callAPI1);
document.getElementById("button2").addEventListener("click", callAPI2);
document.getElementById("button3").addEventListener("click", callAPI3);
document.getElementById("button4").addEventListener("click", callAPI4);
document.getElementById("button5").addEventListener("click", callAPI5);

function callAPI1() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data));
}

function callAPI2() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data));
}

function callAPI3() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => console.log(data));
}

function callAPI4() {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => console.log(data));
}

function callAPI5() {
    fetch("https://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => console.log(data));

}