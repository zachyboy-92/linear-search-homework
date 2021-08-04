const prompt = require("prompt-sync")();
let input = prompt("Input number ");

const array = [12, 5, 32, 4, 9, 5, -1, 100, 5, -5];

const valuePosition = [];
var found = false;
for (var i = 0; i < array.length; i++) {
  if (Number(input) === array[i]) {
    valuePosition.push(i + 1);
    found = true;
  }
}

console.log(valuePosition.length);

console.log(valuePosition);

if (!found) {
  console.log("Number not found");
}
