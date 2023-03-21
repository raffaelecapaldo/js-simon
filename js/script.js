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
  const userNumbers = document.querySelectorAll(".form-control");
  let howManyGuessed = 0;//Contatore numeri indovinati
  infoNumbers.innerHTML = ""
  input.classList.remove("d-none");

  boxCorrectNumbers.innerHTML = "";
  guessSection.classList.add("d-none");
  NUMBERS = 5;//Numeri da indovinare
  guessNumbers = generateNumbers(NUMBERS);//Genera 5 numeri casuali
  boxNumbers.classList.remove("d-none");
  boxNumbers.innerHTML = "";
  for (let i = 0; i < NUMBERS; i++)//Per ogni numero 
    boxNumbers.innerHTML += `<button type="button" class="btn btn-dark">${guessNumbers[i]}</button>`//Inserisci un box col relativo numero
  setTimeout(hideNumbers, 1000);//Dopo 30 secondi chiama la funzione per nascondere il box coi numeri

  checkButton.addEventListener("click", checkNumbers, { once: true });


  function checkNumbers() {
    input.classList.add("d-none");

    for (let i = 0; i < NUMBERS; i++) {
      if (guessNumbers.includes(parseInt(userNumbers[i].value))) {//Se uno dei numeri inseriti dall'utente corrisponde ai numeri generati precedentemente
        boxCorrectNumbers.innerHTML += `<button type="button" class="btn btn-dark me-1">${userNumbers[i].value}</button>`;//Inseriscilo nel box dei numeri indovinati
        howManyGuessed++;// Ed incrementa il contatore dei numeri indovinati
      }
      userNumbers[i].value = "";//Svuota i campi per la prossima giocata


    }
    console.log(howManyGuessed);
    if (howManyGuessed == 1) {//Se hai indovinato 1 numero soltanto scrivi NUMERO dopo il contatore stampato
      infoNumbers.innerHTML = `Hai indovinato: ${howManyGuessed} numero`
    }
    else if (howManyGuessed == NUMBERS) {//Se hai indovinato tutti i numeri, hai vinto
      infoNumbers.innerHTML = `<span class="text-success">Hai indovinato: tutti i numeri!!</span>`

    }

    else {//Altrimenti scrivi NUMERI dopo il contatore stampato
      infoNumbers.innerHTML = `Hai indovinato: ${howManyGuessed} numeri`
    }
  }

}


function hideNumbers() {//Funzione per nascondere i numeri
  boxNumbers.classList.add("d-none");
  guessSection.classList.remove("d-none");
}