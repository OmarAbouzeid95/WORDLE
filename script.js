import wordsArray from "./words.js";

// initializing vars
const lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let i = 1;
let word1 = []; let word2 = [];let word3 = [];let word4 = [];let word5 = []; let word6 = [];
let currentWord = "one";
let gamesPlayed, firstWordWin, secondWordWin, thirdWordWin, fourthWordWin, fifthWordWin, sixthWordWin, totalWins, winPercentage, lose; 
const newGameBtn = document.querySelector(".new_game");
const gameMsg = document.querySelector(".game_msg");
const rulesBtn = document.querySelector(".rules-btn");
const letters = document.querySelectorAll(".letter");
const cells = document.querySelectorAll(".cell");
const enterBtn = document.querySelector(".enter");
const backspaceBtn = document.querySelector(".backspace");
const resultContainer = document.querySelector(".result");
const statsBtn = document.getElementById("stats");
const statsData = document.querySelector(".stats-data");
const statsContainer = document.getElementById("stats-container");
const numberOfGames = document.getElementById("games-played");
const numberOfWins = document.getElementById("wins");
const numberOfLosses = document.getElementById("losses");
const wordOne = document.getElementById("word-one");
const wordTwo = document.getElementById("word-two");
const wordThree = document.getElementById("word-three");
const wordFour = document.getElementById("word-four");
const wordFive = document.getElementById("word-five");
const wordSix = document.getElementById("word-six");
const closeBtns = document.querySelectorAll(".close-btn");
const whiteBgBtn = document.getElementById("light-btn");
const darkBgBtn = document.getElementById("dark-btn");
let currentBg = "light";



function displayRules(){

    document.getElementById("rules").classList.remove("hide");

};

rulesBtn.addEventListener("click", displayRules);


function pickRandom(wordsArray){

    let randomNo = Math.floor((Math.random() * 5757) + 1);
    return wordsArray[randomNo];
};

let correctWord = pickRandom(wordsArray);
console.log(correctWord);


// check word is in the list

function checkWord(word){

    const wordString = word.join('')
    return wordsArray.includes(wordString) ? true : false

};

function notInList (){

    swal({
        icon: "error",
        text: "This word is not in the list",
        button: "Ok"
    });
};

//fetching data from local storage
function getStatsFromLocalStorage() {


if(localStorage.getItem("gamesPlayed")){
    gamesPlayed = localStorage.getItem("gamesPlayed");
}else {
    gamesPlayed = 0;
}

if(localStorage.getItem("firstWordWin")){
    firstWordWin = localStorage.getItem("firstWordWin");
}else {
    firstWordWin = 0;
}

if(localStorage.getItem("secondWordWin")){
    secondWordWin = localStorage.getItem("secondWordWin");
}else {
    secondWordWin = 0;
}

if(localStorage.getItem("thirdWordWin")){
    thirdWordWin = localStorage.getItem("thirdWordWin");
}else {
    thirdWordWin = 0;
}

if(localStorage.getItem("fourthWordWin")){
    fourthWordWin = localStorage.getItem("fourthWordWin");
}else {
    fourthWordWin = 0;
}

if(localStorage.getItem("fifthWordWin")){
    fifthWordWin = localStorage.getItem("fifthWordWin");
}else {
    fifthWordWin = 0;
}

if(localStorage.getItem("sixthWordWin")){
    sixthWordWin = localStorage.getItem("sixthWordWin");
}else {
    sixthWordWin = 0;
}

if(localStorage.getItem("lose")){
    lose = localStorage.getItem("lose");
}else {
    lose = 0;
}

if(localStorage.getItem("totalWins")){
    totalWins = localStorage.getItem("totalWins");
}else {
    totalWins = 0;
}

};

// updating data in local Storage
function updatesStats (result, wordNumber) {

    gamesPlayed++;
    localStorage.setItem("gamesPlayed", gamesPlayed);

    switch(wordNumber) {
        case (1): 
            firstWordWin++;
            localStorage.setItem("firstWordWin", firstWordWin);
            break;
        
        case (2): 
            secondWordWin++;
            localStorage.setItem("secondWordWin", secondWordWin);
            break;

        case (3): 
            thirdWordWin++;
            localStorage.setItem("thirdWordWin", thirdWordWin);
            break;

        case (4): 
            fourthWordWin++;
            localStorage.setItem("fourthWordWin", fourthWordWin);
            break;

        case (5): 
            fifthWordWin++;
            localStorage.setItem("fifthWordWin", fifthWordWin);
            break;

        case (6): 
            sixthWordWin++;
            localStorage.setItem("sixthWordWin", sixthWordWin);
            break;
    }

    if(result === "lose"){
        lose++;
        localStorage.setItem("lose", lose);
    }else {
        totalWins++;
        localStorage.setItem("totalWins", totalWins);
    }
};

statsBtn.addEventListener("click", displayStats);
closeBtns.forEach(button => {
    button.addEventListener("click", () => {
        statsContainer.classList.add("hide");
        document.getElementById("rules").classList.add("hide");
    });
});


function displayStats() {


    getStatsFromLocalStorage();
    statsData.innerHTML = ""
    statsContainer.classList.remove("hide");
    winPercentage = Math.floor((totalWins/gamesPlayed)*100);
    const div = document.createElement("div")
    div.innerHTML = `
                    <h2>statistics</h2>
                    <h4>games played: ${gamesPlayed}</h4>  
                    <h4>wins: ${totalWins} (${gamesPlayed > 0 ? winPercentage : 0}%)</h4>
                    <h4>losses: ${lose}</h4>
                    <div class="stats-line">
                        <h4>first word: ${firstWordWin}</h4>    
                        <span class="stats-bar" style="width:${(firstWordWin/totalWins)*100}%"></span>    
                    </div>
                    <div class="stats-line">
                        <h4>second word: ${secondWordWin}</h4>    
                        <span class="stats-bar" style="width:${(secondWordWin/totalWins)*100}%"></span>    
                    </div>
                    <div class="stats-line">
                        <h4>third word: ${thirdWordWin}</h4>    
                        <span class="stats-bar" style="width:${(thirdWordWin/totalWins)*100}%"></span>    
                    </div>
                    <div class="stats-line">
                        <h4>fourth word: ${fourthWordWin}</h4>    
                        <span class="stats-bar" style="width:${(fourthWordWin/totalWins)*100}%"></span>    
                    </div>
                    <div class="stats-line">
                        <h4>fifth word: ${fifthWordWin}</h4>    
                        <span class="stats-bar" style="width:${(fifthWordWin/totalWins)*100}%"></span>    
                    </div>
                    <div class="stats-line">
                        <h4>sixth word: ${sixthWordWin}</h4>    
                        <span class="stats-bar" style="width:${(sixthWordWin/totalWins)*100}%"></span>    
                    </div>
                    `
    statsData.append(div);
}

/* function that displays the current targeted cell
    the prefix var is for adding a fixed number depending on each word. e.g. 1 for word1 and 6 for word2 ...
*/

function displayCurrentWord (word, prefix) {
    
    for (let i= 0; i< word.length; i++){
        const selectedCell = `cell${i+prefix}`;
        const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
        currentCell.innerText = word[i];
        currentCell.style.border = "1.1px black solid";
    }
}


// displaying letters of a certain word
function display(word){

    switch(currentWord){

        case("one"):
            
                displayCurrentWord(word, 1);

            break;

        case("two"):
            
                displayCurrentWord(word, 6);
            
            break; 
            
        case("three"):
            
                displayCurrentWord(word, 11);
            
            break;

        case("four"):
            
                displayCurrentWord(word, 16);
            
            break;

        case("five"):
            
                displayCurrentWord(word, 21);
            
            break;

        case("six"):
            
                displayCurrentWord(word, 26);
            
            break;
    }

}


// function that adds the letters into the words
function writeLtrs (letter) {

    if(word1.length < 5 && currentWord === "one"){
        word1.push(letter);
        display(word1);
        i++;
        
    }else if(word2.length < 5 && currentWord === "two"){
        
        word2.push(letter);
        display(word2);
        i++;
        
    }else if(word3.length < 5 && currentWord === "three"){
        
        word3.push(letter);
        display(word3);
        i++;

    }else if(word4.length < 5 && currentWord === "four"){
    
        word4.push(letter);
        display(word4);
        i++;

    }else if(word5.length < 5 && currentWord === "five"){
    
        word5.push(letter);
        display(word5);
        i++;

    }else if(word6.length < 5 && currentWord === "six"){
    
        word6.push(letter);
        display(word6);
        i++;
    }
};


// function called inside clearLtrs() to clear the current letter selected
function clearCurrentLetter (word) {

    const targetCell = document.querySelector(`[data-name= cell${i-1}]`)
    targetCell.innerText = ""
    targetCell.style.border = "";
    word.pop()
    display(word)
    i--

}

//function for removing letters from words
function clearLtrs() {

    switch(currentWord){
        case "one":
            if(word1.length != 0){
                clearCurrentLetter(word1);
                break;
            }
            
        case "two":
            if(word2.length != 0){
                clearCurrentLetter(word2);
                break;
            }

        case "three":
            if(word3.length != 0){
                clearCurrentLetter(word3);
                break;
            }
                
        case "four":
            if(word4.length != 0){
                clearCurrentLetter(word4);
                break;
            }

        case "five":
            if(word5.length != 0){
                clearCurrentLetter(word5);
                break;
            }

        case "six":
            if(word6.length != 0){
                clearCurrentLetter(word6);
                break;
            }
                
            };
}

//function that checks whether the game ended or not

function endGame(status) {

    currentWord = "";

    if (status === "win"){

        gameMsg.innerText = "YOU WON!";
        newGameBtn.classList.remove("hide");
        resultContainer.classList.remove("hide");
        

    } else {

        gameMsg.innerText = `YOU LOST! - ${correctWord}`;
        newGameBtn.classList.remove("hide");
        resultContainer.classList.remove("hide");
        getStatsFromLocalStorage();
        updatesStats("lose");
    }
        
    
}



//function that runs when user hits enter
function enterLtrs(){
    
    switch(i){
        case (6):

            if (!checkWord(word1)){
                notInList();
                break;
            }
            if (rightGuess(word1, correctWord, 1)){
                endGame("win") 
                getStatsFromLocalStorage()
                updatesStats("win", 1)
            }else {
                compare(word1, correctWord);
                currentWord = "two"
            } 
            
            
            break;

        case (11):

            if (!checkWord(word2)){
                notInList();
                break;
            }
            
            if (rightGuess(word2, correctWord, 6)){
                endGame("win")
                getStatsFromLocalStorage()
                updatesStats("win", 2)
            } else {
                compare(word2, correctWord);
                currentWord = "three"
            } 
            break;

        case (16):

            if (!checkWord(word3)){
                notInList();
                break;
            }
            
            if (rightGuess(word3, correctWord, 11)){
                endGame("win")  
                getStatsFromLocalStorage()
                updatesStats("win", 3)
            }else {
                compare(word3, correctWord);
                currentWord = "four"
            }
            
            break;

        case (21):

            if (!checkWord(word4)){
                notInList();
                break;
            }
            
            if (rightGuess(word4, correctWord, 16)){
                endGame("win") 
                getStatsFromLocalStorage();
                updatesStats("win", 4);
            }else {
                compare(word4, correctWord);
                currentWord = "five"
            }
            
            break;

        case (26): 

            if (!checkWord(word5)){
                notInList();
                break;
            }
            
            if (rightGuess(word5, correctWord, 21)){
                endGame("win") 
                getStatsFromLocalStorage();
                updatesStats("win", 5);
            } else {
                compare(word5, correctWord);
                currentWord = "six"
            }
            
            break;

        case (31): 
        
        if (!checkWord(word6)){
            notInList();
            break;
        }
        if (rightGuess(word6, correctWord, 26)){
            endGame("win") 
            getStatsFromLocalStorage();
            updatesStats("win", 6);
        }else {
            compare(word6, correctWord);
            endGame("lose")
            getStatsFromLocalStorage()
            updatesStats("lose")
        }
        

        break;
    }
};

// functions that holds the eventlisteners to letters pressed, enter key or backspace key
function write() {
    
    document.addEventListener("keydown", (e) => {
       
        if(lettersArray.includes(e.key)){
            writeLtrs(e.key);
        }else if(e.key === "Backspace"){
            clearLtrs();
        }else if(e.key === "Enter"){
            enterLtrs();
        }
    });


    letters.forEach(letter => {
        letter.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            console.log(e);
            writeLtrs((e.target.innerText).toLowerCase());  
        });
    });

    enterBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        enterLtrs();
    });
    
    backspaceBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        clearLtrs();
    });
        
};

// checks the guessed word against the true value the prefix var is for setting a prefix in the selectedcell depending on the word used

function rightGuess(guessed, trueValue, prefix){
    const correct = trueValue.split("");
    for (let i = 0; i<5; i++){
            if(guessed[i] != trueValue[i]){
                return false;
            }
    }
    for(let i=0; i<5; i++) {
        const selectedCell = `cell${i+prefix}`;
        const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
        currentCell.classList.add("correct");
        addColor("green", guessed[i]);
    }
    
    return true;
}

// function to colorise the keyboard letters

function addColor (colorClass, letter) {

    const clickedLtr = document.querySelector("[data-name=" + letter + "]");

    if (colorClass === "green"){
        if (clickedLtr.classList.contains("semi-correct") == true){
            clickedLtr.classList.replace("semi-correct", "correct");
        }else if(clickedLtr.classList.contains("incorrect") == true) {
            clickedLtr.classList.replace("incorrect", "correct");
        }else {
            clickedLtr.classList.replace("white-bkgrnd" , "correct");
        }
        
    }else if(colorClass === "orange") {
            if(clickedLtr.classList.contains("correct") != true)
            clickedLtr.classList.replace("white-bkgrnd", "semi-correct");
        
    }else {
        if(clickedLtr.classList.contains("correct") != true)
        clickedLtr.classList.replace("white-bkgrnd", "incorrect");
    }
}

//subfunction that colorise the cells background of the entered word

const coloriseCells = function (guessed, correct, prefix) {

    let correctLtrs = [];
    for(let i = 0; i < 5; i++){
        let selectedCell = `cell${i+prefix}`;
        const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
        if(guessed[i] === correct[i]){
            currentCell.classList.add("correct");
            addColor("green", guessed[i]);
            correctLtrs.push(i);
            guessed[i] = "";
            correct[i] = "";
        }
    }
    for(let i = 0; i< 5; i++){
        let selectedCell = `cell${i+prefix}`;
        const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
        if(!correctLtrs.includes(i)){
            if(correct.includes(guessed[i])){
                currentCell.classList.add("semi-correct");
                addColor("orange" ,guessed[i]);
                let index = correct.indexOf(guessed[i]);
                correct[index] = "";
            }else {
                currentCell.classList.add("incorrect");
                addColor("grey" ,guessed[i]);
            }
        }
    }

}




//main function that colorise the cells background of the entered word
function compare(guessed, trueValue){
    
    const correct = trueValue.split("");
    
    switch(currentWord){
        case "one":

            coloriseCells(guessed, correct, 1);
        
        break;
        case "two":
        
            coloriseCells(guessed, correct, 6);

        break;
        case "three":
        
            coloriseCells(guessed, correct, 11);

        break;
        case "four":
        
            coloriseCells(guessed, correct, 16);

        break;
        case "five":
       
            coloriseCells(guessed, correct, 21);

        break;
        case "six":
    
            coloriseCells(guessed, correct, 26);

        break;
                
            }
        
}

write();




