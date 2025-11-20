document.getElementById("jokeBtn").addEventListener("click", getJoke);
document.getElementById("triviaBtn").addEventListener("click", getTrivia);

async function getJoke() {
  try {
    const response = await fetch("php/jokes.php"); // call jokes.php
    const data = await response.json();
    document.getElementById(
      "displayArea"
    ).textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    document.getElementById("displayArea").textContent =
      "Oops! Couldn't fetch a joke.";
    console.error(error);
  }
}

async function getTrivia() {
  try {
    const response = await fetch("php/trivia.php"); // call trivia.php
    const data = await response.json();
    document.getElementById("displayArea").innerHTML = `
      <strong>Question:</strong> ${data.question}<br>
      <strong>Answer:</strong> ${data.answer}
    `;
  } catch (error) {
    document.getElementById("displayArea").textContent =
      "Oops! Couldn't fetch trivia.";
    console.error(error);
  }
}
