/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
const playButton = document.getElementById("play");
const checkButton = document.getElementById("check");

const boxNumbers = document.getElementById("numbers");
const input = document.getElementById("insert-numbers");

const boxCorrectNumbers = document.getElementById("correct-numbers");
const infoNumbers = document.getElementById("info-numbers");
const guessSection = document.getElementById("guess-section");



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


function playGame() {
  infoNumbers.innerHTML = ""
  input.classList.remove("d-none");

  boxCorrectNumbers.innerHTML = "";
  guessSection.classList.add("d-none");
  NUMBERS = 5;
  guessNumbers = generateNumbers(NUMBERS);
  boxNumbers.classList.remove("d-none");
  boxNumbers.innerHTML = "";
  for (let i = 0; i < NUMBERS; i++)
    boxNumbers.innerHTML += `<button type="button" class="btn btn-dark">${guessNumbers[i]}</button>`
  setTimeout(hideNumbers, 5000);
  const userNumbers = document.querySelectorAll(".form-control");
  checkButton.addEventListener("click", checkNumbers);


  function checkNumbers() {
    input.classList.add("d-none");
    let howManyGuessed = 0;

    for (let i = 0; i < NUMBERS; i++) {
      if (guessNumbers.includes(parseInt(userNumbers[i].value))) {
        boxCorrectNumbers.innerHTML += `<button type="button" class="btn btn-dark me-1">${userNumbers[i].value}</button>`;
        howManyGuessed++;
      }
      userNumbers[i].value = "";


    }
    if (howManyGuessed == 1) {
      infoNumbers.innerHTML = `Hai indovinato: ${howManyGuessed} numero`
    }
    else {
      infoNumbers.innerHTML = `Hai indovinato: ${howManyGuessed} numeri`

    }
  }

}


function hideNumbers() {
  boxNumbers.classList.add("d-none");
  guessSection.classList.remove("d-none");
}