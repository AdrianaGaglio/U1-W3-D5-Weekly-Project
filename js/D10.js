/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

console.log("--- JS Basics ---");

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;

console.log("Esercizio A - Somma tra due valori =>", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21);
("");

console.log("Esercizio B - Numero random =>", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = { name: "Adriana", surname: "Gaglio", age: "32" };
console.log("Esercizio C - Creo l'oggetto =>", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log("Esercizio D - Rimuovo la proprietà age =>", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS", "Javascript", "Angular.js", "PHP"];

console.log("Esercizio E - Aggiungo proprietà skills (array) =>", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Python");

console.log("Esercizio F - Aggiungo un nuovo elemento =>", me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log("Esercizio G - L'elemento rimosso è =>", me.skills.pop()); // il metodo .pop() ritorna il valore rimosso, ma ha effetto sull'array che verrà svuotato del suo ultimo elemento

// Funzioni

console.log("--- Funzioni ---");

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.ceil(Math.random() * 6); // l'esecuzione della funzione ritorna come valore il risultato del calcolo

console.log("Esercizio 1 - Numero random =>", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (num1, num2) => Math.max(num1, num2);

console.log("Esercizio 2 - Maggiore tra 2 numeri =>", whoIsBigger(10, 3));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (string) => {
  const wordsArray = string.split(" ");
  console.log(wordsArray);
  for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
  }
  return wordsArray;
};

console.log("Esercizio 3 - Array a partire da una stringa, con la prima lettera in maiuscolo =>", splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (string, isTrue) => {
  let newString = "";
  if (isTrue) {
    newString = string.substring(1);
  } else {
    newString = string.substring(0, string.length - 1);
  }
  return newString;
};

console.log("Esercizio 4 - Rimuovo un carattere all'inizio o alla fine =>");
console.log(deleteOne("Ciao", true));
console.log(deleteOne("Ciao", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (string) => {
  const charsArray = string.split("");
  for (let i = 0; i < charsArray.length; i++) {
    if (!(parseInt(charsArray[i]).toString() === "NaN")) {
      charsArray.splice(i, 1);
    }
  }
  return charsArray.join("");
};

console.log("Esercizio 5 - Rimuovo i numeri =>", onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(string);
};

console.log(isThisAnEmail("Ciao@mail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  const weekDay = new Date().getDay();
  const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
  return days[weekDay - 1];
};

console.log("Esercizio 7 - Oggi è =>", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (num) => {
  const sumObj = { sum: 0, values: [] };
  for (let i = 1; i <= num; i++) {
    const randomNum = dice();
    sumObj.sum += randomNum;
    sumObj.values.push(randomNum);
  }
  return sumObj;
};

console.log("Esercizio 8 =>", rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (date) => {
  date = new Date(date);
  const today = new Date();
  const dateDiff = today - date;
  return Math.floor(dateDiff / (1000 * 60 * 60 * 24));
};

console.log("Esercizio 9 - Quanti giorni sono passati dal 15/08/2024? =>", howManyDays("2024-08-15"));
console.log("Esercizio 9 - Quanti giorni sono passati dal 01/08/2024? =>", howManyDays("2024-08-01"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

// la funzione accetta come parametri giorno (sia in formato stringa che numerico) e mese e verifica se oggi è il giorno del compleanno comparando la data attuale con i parametri inseriti
const isTodayMyBirthday = (birthday, month) => {
  const today = new Date();
  if (today.getDate() === parseInt(birthday) && months[today.getMonth()] === month) {
    return true;
  } else {
    return false;
  }
};

console.log("Esercizio 10 - Oggi è il mio compleanno?", isTodayMyBirthday(21, "Marzo"));

// Arrays & Oggetti

console.log("--- ARRAY & OGGETTI ---");

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const testObj = { name: "Adriana", surname: "Gaglio", age: 34, height: "1.68cm" };
console.log("Esercizio 11 - Oggetto prima della modifica =>", testObj);

const deleteProp = (obj, prop) => {
  delete obj[prop];
  return obj;
};

console.log("Esercizio 11 - Oggetto dopo la modifica", deleteProp(testObj, "height"));

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (arrayOfMovies) => {
  let recent = arrayOfMovies[0];
  arrayOfMovies.forEach((movie) => {
    if (parseInt(movie.Year) > parseInt(recent.Year)) {
      recent = movie;
    }
  });
  return recent;
};

console.log("Esercizio 12 - Il film più recente della collezione è =>", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (arrayOfMovies) => arrayOfMovies.length;

console.log("Esercizio 13 - Il numero di film nella collezione è di =>", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (arrayOfMovies) => {
  const onlyYearsArray = arrayOfMovies.map((movie) => movie.Year);
  return onlyYearsArray;
};

console.log("Esercizio 14 - Genero array contenente i soli anni di uscita dei film =>", onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (arrayOfMovies) => {
  return arrayOfMovies.filter((movie) => parseInt(movie.Year) > 1999);
};

console.log("Esercizio 15 - I film usciti nell'ultimo millennio =>", onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (arrayOfMovies) => {
  return arrayOfMovies.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.Year), 0);
};

console.log("Esercizio 16 - Somma degli anni di uscita dei film =>", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (string, arrayOfMovies) => {
  const matchedMovies = [];
  for (let i = 0; i < arrayOfMovies.length; i++) {
    if (arrayOfMovies[i].Title.includes(string)) {
      matchedMovies.push(arrayOfMovies[i]);
    }
  }
  return matchedMovies;
};

console.log("Esercizio 17 - Ricerco nel titolo stringa 'Lord' =>", searchByTitle("Lord", movies));
console.log("Esercizio 17 - Ricerco nel titolo stringa 'ring' =>", searchByTitle("Ring", movies));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (titleSearch, arrayOfMovies) => {
  const moviesObj = { match: [], unmatch: [] };
  for (let i = 0; i < arrayOfMovies.length; i++) {
    if (arrayOfMovies[i].Title.includes(titleSearch) || arrayOfMovies[i].Title.toLowerCase().includes(titleSearch)) {
      moviesObj.match.push(arrayOfMovies[i]);
    } else {
      moviesObj.unmatch.push(arrayOfMovies[i]);
    }
  }
  return moviesObj;
};

console.log("Esercizio 18 - Divido in 2 array in base al risultato (stringa 'Ring') =>");
console.log(searchAndDivide("Ring", movies));

console.log("Esercizio 18 - Divido in 2 array in base al risultato (stringa 'lord') =>");
console.log(searchAndDivide("lord", movies));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (index, arrayOfMovies) => {
  console.log(arrayOfMovies); // solo per mostrare in console che la length varia tra prima e dopo, per come funziona la console del browser il contenuto viene comunque mostrato aggiornato
  arrayOfMovies.splice(index, 1);
  return arrayOfMovies;
};

console.log(removeIndex(1, movies));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

console.log("--- DOM ---");

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log("Esercizio 20 - Seleziono elemento con id container =>", document.getElementById("container"));

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log("Esercizio 21 - Seleziono ogni tag td nella pagina (genera un HTML collection)", document.getElementsByTagName("td"));
console.log("Esercizio 21 - Seleziono ogni tag td nella pagina (genera un Node list)", document.querySelectorAll("td")); // permette di usare metodi moderni come ad es. .forEach()

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printAllTD = () => {
  const allTDs = document.querySelectorAll("td"); // uso il query selector per poter ciclare con .forEach()
  console.log("Esercizio 22 - Stampo in console il contenuto di ogni elemento td =>");
  allTDs.forEach((td) => console.log(td.innerHTML));
};

printAllTD();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const redBackground = () => {
  let allLinks = document.getElementsByTagName("a"); // uso .getElementsByTagName() per mostrare la funzione di generazione di un array a partire da una HTML collection
  allLinks = Array.from(allLinks);
  allLinks.forEach((link) => (link.style.backgroundColor = "red"));
};

redBackground(); // faccio console log solo x tenere traccia dell'esercizio in console, il risultato una volta invocata la funzione appare nel corpo della pagina

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addLI = (text) => {
  const newLI = document.createElement("li");
  newLI.innerHTML = text;
  document.getElementById("myList").appendChild(newLI);
};

addLI("added Element 1");
addLI("added Element 2");
addLI("added Element 3");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyList = () => {
  document.getElementById("myList").innerHTML = "";
};

emptyList(); // se invocata, svuota la lista nel DOM

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClass = () => {
  const allTR = document.getElementsByTagName("tr");
  for (let i = 0; i < allTR.length; i++) {
    allTR[i].classList.add("test");
  }
};

addClass(); // esecuzione della funzione che aggiunge una classe

// [EXTRA] JS Avanzato

console.log("--- JS Avanzato ---");

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (num) => {
  let text = "";
  for (let i = 0; i < num; i++) {
    text += "*";
    console.log(text);
  }
};

console.log("Esercizio 27 - Numero inserito 3");
halfTree(3);
console.log("Esercizio 27 - Numero inserito 5");
halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = (num) => {
  if (parseInt(num) % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

console.log("Esercizio 29 - Il numero 7 è un numero primo?", isItPrime(7));
console.log("Esercizio 29 - Il numero 12 è un numero primo?", isItPrime(12));

/* Questo array viene usato per gli esercizi. Non modificarlo. */ // => spostato in alto
