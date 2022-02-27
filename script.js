
// initializing vars
let i = 1;
let word1 = []; let word2 = []; let word3 = []; let word4 = []; let word5 = [];
let currentWord = "one";
let text;
const newGameBtn = document.querySelector(".new_game");
const gameMsg = document.querySelector(".game_msg");
const rulesBtn = document.querySelector(".rulesBtn");

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
                currentCell.style.border = "1.5px black solid";
            }
            break;
        
        case "two":
            for(let i =0; i<word.length; i++){
                let selectedCell = `cell${i+6}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = word[i];
                currentCell.style.border = "1.5px black solid";
            }
            break;

        case "three":
        for(let i =0; i<word.length; i++){
            let selectedCell = `cell${i+11}`;
            const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
            currentCell.innerText = word[i];
            currentCell.style.border = "1.5px black solid";
        }
        break;

        case "four":
            for(let i =0; i<word.length; i++){
                let selectedCell = `cell${i+16}`;
                const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                currentCell.innerText = word[i];
                currentCell.style.border = "1.5px black solid";
            }
            break;

        case "five":
                for(let i =0; i<word.length; i++){
            let selectedCell = `cell${i+21}`;
            const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
            currentCell.innerText = word[i];
            currentCell.style.border = "1.5px black solid";
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
    }
}

function write() {
    
    document.addEventListener("keydown", (e) => {
       // let selectedCell = `cell${i}`;
        if(e.key === "a" || e.key === "b" || e.key === "c" || e.key === "d" || e.key === "e" || e.key === "f" || e.key === "g" || e.key === "h" || e.key === "i" || e.key === "j" || e.key === "k" || e.key === "l" || e.key === "m" || e.key === "n" || e.key === "o" || e.key === "p" || e.key === "q" || e.key === "r" || e.key === "s" || e.key === "t" || e.key === "u" || e.key === "v" || e.key === "w" || e.key === "x" || e.key ==="y" || e.key === "z"){
            if(word1.length < 5 && currentWord === "one"){
                word1.push(e.key);
                display(word1);
                i++;
                
            }else if(word2.length < 5 && currentWord === "two"){
                
                word2.push(e.key);
                display(word2);
                i++;
                
            }else if(word3.length < 5 && currentWord === "three"){
                
                word3.push(e.key);
                display(word3);
                i++;
        }else if(word4.length < 5 && currentWord === "four"){
            
            word4.push(e.key);
            display(word4);
            i++;
        }else if(word5.length < 5 && currentWord === "five"){
            
            word5.push(e.key);
            display(word5);
            i++;
        }
    }else if(e.key === "Backspace"){
    
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
                    
                }
        }else if(e.key === "Enter"){

            switch(i){
                case (6):
                    // call check function
                    if (checkWord(word1) === false){
                        //call function not in the word list
                        notInList();
                        break;
                    }
                    compare(word1, correctWord);
                    if(rightGuess(word1, correctWord) != false){
                        currentWord = "";
                        gameMsg.innerText = "YOU WON!";
                        newGameBtn.classList.remove("hide");
                    }
                    currentWord = "two"
                    break;
                case (11):
                    // call check fn
                    if (checkWord(word2) === false){
                        //call function not in the word list
                        notInList();
                        break;
                    }
                    compare(word2, correctWord);
                    if(rightGuess(word2, correctWord) != false){
                        gameMsg.innerText = "YOU WON!";
                        newGameBtn.classList.remove("hide");
                    }
                    currentWord = "three"
                    break;
                case (16):
                    // call check fn
                    if (checkWord(word3) === false){
                        //call function not in the word list
                        notInList();
                        break;
                    }
                    compare(word3, correctWord);
                    if(rightGuess(word3, correctWord) != false){
                        gameMsg.innerText = "YOU WON!";
                        newGameBtn.classList.remove("hide");
                    }
                    currentWord = "four"
                    break;
                case (21):
                    // call check fn
                    if (checkWord(word4) === false){
                        //call function not in the word list
                        notInList();
                        break;
                    }
                    compare(word4, correctWord);
                    if(rightGuess(word4, correctWord) != false){
                        gameMsg.innerText = "YOU WON!";
                        newGameBtn.classList.remove("hide");
                    }
                    currentWord = "five"
                    break;
                case (26): 
                    // call check fn
                    if (checkWord(word5) === false){
                        //call function not in the word list
                        notInList();
                        break;
                    }
                    compare(word5, correctWord);
                    if(rightGuess(word5, correctWord) != false){
                        currentWord = "";
                        gameMsg.innerText = "YOU WON!";
                        newGameBtn.classList.remove("hide");
                    }else {
                        gameMsg.innerText = `YOU LOST! - ${correctWord}`;
                        newGameBtn.classList.remove("hide");
                    }
                    break;
            }

        }
        })
        
};


function rightGuess(guessed, trueValue){
    const correct = trueValue.split("");
    for (let i = 0; i<5; i++){
            if(guessed[i] != trueValue[i]){
                return false;
            }
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
                            // letters match
                            currentCell.classList.add("correct");
                            
                        }else {
                            // correct letter but in wrong pos.
                            currentCell.classList.add("semi-correct");
                        }
                    }else {
                        currentCell.classList.add("incorrect");
                    }
            }
                break;
        case "two":
            
            for (let i = 0; i<5; i++){
                    let selectedCell = `cell${i+6}`;
                    const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                    if (correct.includes(guessed[i])){
                        if(guessed[i] === correct[i]){
                            // letters match
                            currentCell.classList.add("correct");
                            
                        }else {
                            // correct letter but in wrong pos.
                            currentCell.classList.add("semi-correct");
                        }
                    }else {
                        currentCell.classList.add("incorrect");
                    }
                
            }
                break;

        case "three":
            
            for (let i = 0; i<5; i++){
                
                    let selectedCell = `cell${i+11}`;
                    const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                    if (correct.includes(guessed[i])){
                        if(guessed[i] === correct[i]){
                            // letters match
                            currentCell.classList.add("correct");
                            
                        }else {
                            // correct letter but in wrong pos.
                            currentCell.classList.add("semi-correct");
                        }
                    }else {
                        currentCell.classList.add("incorrect");
                    }
                
            }
                break;

        case "four":
            
            for (let i = 0; i<5; i++){
                
                    let selectedCell = `cell${i+16}`;
                    const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                    if (correct.includes(guessed[i])){
                        if(guessed[i] === correct[i]){
                            // letters match
                            currentCell.classList.add("correct");
                            
                        }else {
                            // correct letter but in wrong pos.
                            currentCell.classList.add("semi-correct");
                        }
                    }else {
                        currentCell.classList.add("incorrect");
                    }
                
            }
                break;

        case "five":
            
            for (let i = 0; i<5; i++){
                
                    let selectedCell = `cell${i+21}`;
                    const currentCell = document.querySelector("[data-name=" + selectedCell + "]");
                    if (correct.includes(guessed[i])){
                        if(guessed[i] === correct[i]){
                            // letters match
                            currentCell.classList.add("correct");
                            
                        }else {
                            // correct letter but in wrong pos.
                            currentCell.classList.add("semi-correct");
                        }
                    }else {
                        currentCell.classList.add("incorrect");
                    }
                
            }
                break;


                
            }
        
}


write();



