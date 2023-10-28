import { piadas } from './jokes.js';


// get elements from html
const joeHere = document.getElementById("joke");
const jokeGenerator = document.getElementById("jokeBtn");

// Function to get a random joke from the imported array
const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * piadas.length);
  return piadas[randomIndex];
};

// Using async/await
const generateJoke = () => {
  const joke = getRandomJoke();
  joeHere.innerHTML = joke;
};

jokeGenerator.addEventListener("click", generateJoke);
generateJoke();
