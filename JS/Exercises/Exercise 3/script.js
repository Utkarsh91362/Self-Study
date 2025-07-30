const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the programmer quit his job? Because he didn't get arrays.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "Parallel lines have so much in common... it’s a shame they’ll never meet.",
  "How does a computer get drunk? It takes screenshots.",
  "What’s a computer’s least favorite food? Spam.",
  "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings."
];
function generateJokes(){
    const jokeText=document.getElementsByClassName("jokes")[0]
    const RJ=Math.floor(Math.random()*jokes.length);
    jokeText.textContent=jokes[RJ]
}