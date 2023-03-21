/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
const playButton = document.getElementById("play")
const boxNumbers = document.getElementById("numbers");


//Funzione per generare TOT numeri casuali da 1 a 100
function generateNumbers(howManyNumbers) {
  const numbers = [];
  while (numbers.length < howManyNumbers) {
      const number = getRandomInt(1, 100);
      if (!numbers.includes(number)) {
          numbers.push(number);
      }
  }
  return numbers;
}

playButton.addEventListener("click", playGame)

function playGame () {
  NUMBERS = 5;
  guessNumbers = generateNumbers(NUMBERS);
  boxNumbers.classList.remove("d-none");
  boxNumbers.innerHTML = "";
  for(let i = 0; i < NUMBERS; i++)
  boxNumbers.innerHTML += `<button type="button" class="btn btn-dark">${guessNumbers[i]}</button>`
  setTimeout(hideNumbers, 5000);
}

function hideNumbers () {
  boxNumbers.classList.add("d-none");
}