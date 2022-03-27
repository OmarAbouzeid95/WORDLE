
// initializing vars
let i = 1;
let word1 = []; let word2 = [];let word3 = [];let word4 = [];let word5 = []; let word6 = [];
let currentWord = "one";
let text;
const newGameBtn = document.querySelector(".new_game");
const gameMsg = document.querySelector(".game_msg");
const rulesBtn = document.querySelector(".rulesBtn");
const letters = document.querySelectorAll(".letter");
const enterBtn = document.querySelector(".enter");
const backspaceBtn = document.querySelector(".backspace");

function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function(){
        if (rawFile.readyState === 4){
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                text = allText;
            }
        }
    }
    rawFile.send(null);
}

function gameWon() {
    swal({  
        title: "YOU WON!",  
        text: "You guessed it right, the word was " + correctWord,        
        button: {
            text: "Play again?",
            value: "playAgain"
        }      
      }).then((value) => {
          if (value == "playAgain") {
              location.reload();
          }
      });
};

function displayRules(){

    swal({
        title: "Game rules",
        text: "Try guessing the five letter word.\n Letters marked in GREEN and in the correct position.\n Letters marked in ORANGE are correct but in the wrong position.\n Letters marked in GREY are incorrect.",
        button: "Awesome!"
    });
};

rulesBtn.addEventListener("click", displayRules);

readTextFile("words.txt");
let wordsArray = text.split("\n");

function pickRandom(){

    let randomNo = Math.floor((Math.random() * 5757) + 1);
    return wordsArray[randomNo];
};

let correctWord = pickRandom();
console.log(correctWord);


// check word is in the list

function checkWord(word){

    const wordString = `${word[0]}${word[1]}${word[2]}${word[3]}${word[4]}`;
    if(wordsArray.includes(wordString)){
        return true;
    }else {
        return false;
    }
};

function notInList (){

    swal({
        icon: "error",
        text: "This word is not in the list",
        button: "Ok"
    });
};



// adding event listeners to each cell
function display(word){
    switch(currentWord){
        case "one":
            for(let i = 0; i<word.length; i++){
                let selectedCell = `cell${i+1}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = word[i];
                currentCell.style.border = "1.1px black solid";
            }
            break;
        
        case "two":
            for(let i =0; i<word.length; i++){
                let selectedCell = `cell${i+6}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = word[i];
                currentCell.style.border = "1.1px black solid";
            }
            break;

        case "three":
        for(let i =0; i<word.length; i++){
            let selectedCell = `cell${i+11}`;
            const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
            currentCell.innerText = word[i];
            currentCell.style.border = "1.1px black solid";
        }
        break;

        case "four":
            for(let i =0; i<word.length; i++){
                let selectedCell = `cell${i+16}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = word[i];
                currentCell.style.border = "1.1px black solid";
            }
            break;

        case "five":
                for(let i =0; i<word.length; i++){
            let selectedCell = `cell${i+21}`;
            const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
            currentCell.innerText = word[i];
            currentCell.style.border = "1.1px black solid";
            }
        break;

        case "six":
                for(let i =0; i<word.length; i++){
            let selectedCell = `cell${i+26}`;
            const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
            currentCell.innerText = word[i];
            currentCell.style.border = "1.1px black solid";
            }
        break;
    }
}

function clear(){
    switch(currentWord){
        case "one":
            for(let i = 1; i<6; i++){
                let selectedCell = `cell${i}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = "";
                currentCell.style.border = "";
            }
            break;
        
        case "two":
            for(let i = 6; i<11; i++){
                let selectedCell = `cell${i}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = "";
                currentCell.style.border = "";
            }
            break;

        case "three":
            for(let i = 11; i<16; i++){
                let selectedCell = `cell${i}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = "";
                currentCell.style.border = "";
            }
            break;

        case "four":
            for(let i = 16; i<21; i++){
                let selectedCell = `cell${i}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = "";
                currentCell.style.border = "";
            }
            break;

        case "five":
            for(let i = 21; i<26; i++){
                let selectedCell = `cell${i}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = "";
                currentCell.style.border = "";
            }
            break;

        case "six":
            for(let i = 26; i<31; i++){
                let selectedCell = `cell${i}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = "";
                currentCell.style.border = "";
            }
            break;
    }
}

// function that writes the letters into the words
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

//function for removing letters from words

function clearLtrs() {

    switch(currentWord){
        case "one":
            if(word1.length != 0){
                word1.pop();
                clear();
                display(word1);
                i--;
                break;
            }
            

        case "two":
            if(word2.length != 0){
                word2.pop();
                clear();
                display(word2);
                i--;
                break;
            }

        case "three":
            if(word3.length != 0){
                word3.pop();
                clear();
                display(word3);
                i--;
                break;
            }
                
        case "four":
            if(word4.length != 0){
                word4.pop();
                clear();
                display(word4);
                i--;
                break;
            }

        case "five":
            if(word5.length != 0){
                word5.pop();
                clear();
                display(word5);
                i--;
                break;
            }

        case "six":
            if(word6.length != 0){
                word6.pop();
                clear();
                display(word6);
                i--;
                break;
            }
                
            };
}

//function that runs when user hits enter

function enterLtrs(){

    switch(i){
        case (6):
            // call check function
            if (checkWord(word1) === false){
                //call function not in the word list
                notInList();
                break;
            } if(currentWord === "one") {
            compare(word1, correctWord);
            if(rightGuess(word1, correctWord) != false){
                currentWord = "";
                gameMsg.innerText = "YOU WON!";
                newGameBtn.classList.remove("hide");
            }
        }
            currentWord = "two"
            break;
        case (11):
            // call check fn
            if (checkWord(word2) === false){
                //call function not in the word list
                notInList();
                break;
            } if(currentWord === "two"){
            compare(word2, correctWord);
            if(rightGuess(word2, correctWord) != false){
                gameMsg.innerText = "YOU WON!";
                newGameBtn.classList.remove("hide");
            }
        }
            currentWord = "three"
            break;
        case (16):
            // call check fn
            if (checkWord(word3) === false){
                //call function not in the word list
                notInList();
                break;
            } if(currentWord === "three"){
            compare(word3, correctWord);
            if(rightGuess(word3, correctWord) != false){
                gameMsg.innerText = "YOU WON!";
                newGameBtn.classList.remove("hide");
            }
        }
            currentWord = "four"
            break;
        case (21):
            // call check fn
            if (checkWord(word4) === false){
                //call function not in the word list
                notInList();
                break;
            } if(currentWord === "four"){
            compare(word4, correctWord);
            if(rightGuess(word4, correctWord) != false){
                gameMsg.innerText = "YOU WON!";
                newGameBtn.classList.remove("hide");
            }
        }
            currentWord = "five"
            break;
        case (26): 
            // call check fn
            if (checkWord(word5) === false){
                //call function not in the word list
                notInList();
                break;
            } if(currentWord === "five"){
            compare(word5, correctWord);
            if(rightGuess(word5, correctWord) != false){
                currentWord = "";
                gameMsg.innerText = "YOU WON!";
                newGameBtn.classList.remove("hide");
            }
        }
            currentWord = "six"
            break;

        case (31): 
        // call check fn
        if (checkWord(word6) === false){
            //call function not in the word list
            notInList();
            break;
        } if(currentWord === "six"){
        compare(word6, correctWord);
        if(rightGuess(word6, correctWord) != false){
            currentWord = "";
            gameMsg.innerText = "YOU WON!";
            newGameBtn.classList.remove("hide");
        }else {
            gameMsg.innerText = `YOU LOST! - ${correctWord}`;
            newGameBtn.classList.remove("hide");
        }
    }
        break;
    }
};

function write() {
    
    document.addEventListener("keydown", (e) => {
       // let selectedCell = `cell${i}`;
        if(e.key === "a" || e.key === "b" || e.key === "c" || e.key === "d" || e.key === "e" || e.key === "f" || e.key === "g" || e.key === "h" || e.key === "i" || e.key === "j" || e.key === "k" || e.key === "l" || e.key === "m" || e.key === "n" || e.key === "o" || e.key === "p" || e.key === "q" || e.key === "r" || e.key === "s" || e.key === "t" || e.key === "u" || e.key === "v" || e.key === "w" || e.key === "x" || e.key ==="y" || e.key === "z"){
            writeLtrs(e.key);
}else if(e.key === "Backspace"){
            clearLtrs();
        }else if(e.key === "Enter"){
            enterLtrs();
        }
        });

    letters.forEach(letter => {
        letter.addEventListener("click", (e) => {
            writeLtrs((e.path[0].innerText).toLowerCase());
        })
    });

    enterBtn.addEventListener("click", enterLtrs);
    backspaceBtn.addEventListener("click", clearLtrs);
        
};


function rightGuess(guessed, trueValue){
    const correct = trueValue.split("");
    for (let i = 0; i<5; i++){
            if(guessed[i] != trueValue[i]){
                return false;
            }
    }
}

// function colorise keyboard

function addColor (colorClass, letter) {
    const clickedLtr = document.querySelector("[data-name=" + letter + "]");
    if (colorClass === "green"){
        if (clickedLtr.classList.contains("semi-correct") == true){
            clickedLtr.classList.replace("semi-correct", "correct");
        }else {
            clickedLtr.classList.add("correct");
        }
        
    }else if(colorClass === "orange") {
            if(clickedLtr.classList.contains("correct") != true)
            clickedLtr.classList.add("semi-correct");
        
    }else {
        clickedLtr.classList.add("incorrect");
    }
}

function compare(guessed, trueValue){
    
    const correct = trueValue.split("");
    switch(currentWord){
        case "one":
            for (let i = 0; i<5; i++){
                    let selectedCell = `cell${i+1}`;
                    const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                    if (correct.includes(guessed[i])){
                        if(guessed[i] === correct[i]){
                            currentCell.classList.add("correct");
                            addColor("green", guessed[i])
                        }else{
                            // correct letter but in wrong pos.
                            currentCell.classList.add("semi-correct");
                            addColor("orange" ,guessed[i]);
                        }
                    }else {
                        currentCell.classList.add("incorrect");
                        addColor("grey" ,guessed[i]);
                    }
            }
                break;
        case "two":
            for (let i = 0; i<5; i++){
                let selectedCell = `cell${i+6}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                if (correct.includes(guessed[i])){
                    if(guessed[i] === correct[i]){
                        currentCell.classList.add("correct");
                        addColor("green", guessed[i])
                    }else{
                        // correct letter but in wrong pos.
                        currentCell.classList.add("semi-correct");
                        addColor("orange" ,guessed[i]);
                    }
                }else {
                    currentCell.classList.add("incorrect");
                    addColor("grey" ,guessed[i]);
                }
        }
            break;
        case "three":
            for (let i = 0; i<5; i++){
                let selectedCell = `cell${i+11}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                if (correct.includes(guessed[i])){
                    if(guessed[i] === correct[i]){
                        currentCell.classList.add("correct");
                        addColor("green", guessed[i])
                    }else{
                        // correct letter but in wrong pos.
                        currentCell.classList.add("semi-correct");
                        addColor("orange" ,guessed[i]);
                    }
                }else {
                    currentCell.classList.add("incorrect");
                    addColor("grey" ,guessed[i]);
                }
        }
            break;
        case "four":
            for (let i = 0; i<5; i++){
                let selectedCell = `cell${i+16}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                if (correct.includes(guessed[i])){
                    if(guessed[i] === correct[i]){
                        currentCell.classList.add("correct");
                        addColor("green", guessed[i])
                    }else{
                        // correct letter but in wrong pos.
                        currentCell.classList.add("semi-correct");
                        addColor("orange" ,guessed[i]);
                    }
                }else {
                    currentCell.classList.add("incorrect");
                    addColor("grey" ,guessed[i]);
                }
        }
            break;
        case "five":
            for (let i = 0; i<5; i++){
                let selectedCell = `cell${i+21}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                if (correct.includes(guessed[i])){
                    if(guessed[i] === correct[i]){
                        currentCell.classList.add("correct");
                        addColor("green", guessed[i])
                    }else{
                        // correct letter but in wrong pos.
                        currentCell.classList.add("semi-correct");
                        addColor("orange" ,guessed[i]);
                    }
                }else {
                    currentCell.classList.add("incorrect");
                    addColor("grey" ,guessed[i]);
                }
        }
            break;
        case "six":for (let i = 0; i<5; i++){
            let selectedCell = `cell${i+26}`;
            const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
            if (correct.includes(guessed[i])){
                if(guessed[i] === correct[i]){
                    currentCell.classList.add("correct");
                    addColor("green", guessed[i])
                }else{
                    // correct letter but in wrong pos.
                    currentCell.classList.add("semi-correct");
                    addColor("orange" ,guessed[i]);
                }
            }else {
                currentCell.classList.add("incorrect");
                addColor("grey" ,guessed[i]);
            }
    }
        break;


                
            }
        
}


write();



