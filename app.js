// let input = document.getElementById("name");
// let submit = document.getElementById("button");
// let result = document.querySelector("h2");

// submit.addEventListener("click", function () {
//   let value = input.textContent;
//   result.innerText = "Result: " + value;
//   console.log(input.value);
// });

let input = document.getElementById("name");
let submit = document.getElementById("button");
let result = document.querySelector("h2");

submit.addEventListener("click", function () {
  let value = input.value; // Get the value from the input
  result.innerText = "Result: " + value; // Display the value in the h2 element
  console.log(input.value); // Log the input value to the console
});
