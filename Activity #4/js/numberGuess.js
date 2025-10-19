// Step 1: Define the array

function guessNumber() {
  let guess = parseInt(prompt("Enter your guess:"));
  let found = false;
  let result = document.getElementById("result");

  numbers.forEach((value, index) => {
    if (value === guess) {
      result.textContent = `Data located at: index ${index}`;
      console.log(`Data located at: index ${index}`);
      found = true;
    }
  });

  if (!found) {
    result.textContent = "Data is not in your array.";
    console.log("Data is not in your array.");
  }
}
