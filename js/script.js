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
let x = 0;
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
 ;
  playButton.classList.add("disabled");
  showTimer(30);//Mostro timer di 30 sec
  const userNumbers = document.querySelectorAll(".form-control");
  infoNumbers.innerHTML = ""
  input.classList.remove("d-none");
  boxCorrectNumbers.innerHTML = "";
  guessSection.classList.add("d-none");
  NUMBERS = 5;//Numeri da indovinare
  guessNumbers = generateNumbers(NUMBERS);//Genera 5 numeri casuali
  boxNumbers.classList.remove("d-none");
  boxNumbers.innerHTML = "";
  for (let i = 0; i < NUMBERS; i++) {//Per ogni numero 
    boxNumbers.innerHTML += `<button type="button" class="btn btn-dark">${guessNumbers[i]}</button>`//Inserisci un box col relativo numero
  }
  hidetimer = setTimeout(hideNumbers, 30000);//Dopo 30 secondi chiama la funzione per nascondere il box coi numeri
 if (x === 0) {
  checkButton.addEventListener("click", checkNumbers)
  x++;
 }
  function checkNumbers() {
    playButton.classList.remove("disabled");
    input.classList.add("d-none");
    let howManyGuessed = 0;//Contatore numeri indovinati
    for (let i = 0; i < NUMBERS; i++) {
      if (guessNumbers.includes(parseInt(userNumbers[i].value))) {//Se uno dei numeri inseriti dall'utente corrisponde ai numeri generati precedentemente
        boxCorrectNumbers.innerHTML += `<button type="button" class="btn btn-dark me-1">${userNumbers[i].value}</button>`;//Inseriscilo nel box dei numeri indovinati
        howManyGuessed++;// Ed incrementa il contatore dei numeri indovinati
        const indexToRemove = guessNumbers.indexOf(parseInt(userNumbers[i].value));//Trova index nell'array dei numeri corretti del numero indovinato
        guessNumbers.splice(indexToRemove, 1);//Rimuovi il numero indovinato (altrimenti sarebbe possibile concludere il gioco inserendo un solo numero esatto in tutti e 5 i campi)
      }
      userNumbers[i].value = "";//Svuota i campi per la prossima giocata

    }
    if (howManyGuessed == NUMBERS) {//Se hai indovinato tutti i numeri, hai vinto
      infoNumbers.innerHTML = `<span class="text-success fw-bold fs-5">Hai indovinato: tutti i numeri!!</span>`
    }

    else if (howManyGuessed == 1) {//Se hai indovinato 1 numero soltanto scrivi NUMERO dopo il contatore stampato
      infoNumbers.innerHTML = `<span class="text-warning fw-bold fs-5">Hai indovinato: ${howManyGuessed} numero</span>`
    }

    else if (howManyGuessed == 0) {
      infoNumbers.innerHTML = `<span class="text-danger fw-bold fs-5">Hai indovinato: ${howManyGuessed} numeri</span>`
    }

    else {//Altrimenti scrivi NUMERI dopo il contatore stampato
      infoNumbers.innerHTML = `<span class="text-warning fw-bold fs-5">Hai indovinato: ${howManyGuessed} numeri</span>`
    }
  }
}

function hideNumbers() {//Funzione per nascondere i numeri
  boxNumbers.classList.add("d-none");
  guessSection.classList.remove("d-none");
}
function showTimer(num) {//Funzione che passato un determinato numero lo decrementa e stampa nell'HTML
  let time = num;//Numero
  const timerBox = document.getElementById("timer");
  timerBox.innerText = time;//Stampo inizio timer
  let timer = setInterval(() => {//
    if (time == 1) {//Arrivati a 1 cancello il contenuto del box timer e uccido setInterval
      clearInterval(timer);
      timerBox.innerHTML = "";
    }
    else {//Ogni secondo decremento e ristampo
      time--;
      timerBox.innerText = time;
    }
  }, 1000);
}