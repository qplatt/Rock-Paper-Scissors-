var userScore = 0;
var aiScore = 0;
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreBoard_div = document.querySelector(".scores");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getAiChoice() {
    const choices = ['r', 'p', 's']; 
    const rando = Math.floor(Math.random() * 3); 
    return choices [rando];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock"; 
    if (letter === "p") return "Paper"; 
    return "Scissors"; 
}

function win(userChoice, aiChoice) { 
    userScore++; 
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(aiChoice)}. You Win! 🥳`;
}

function lose(userChoice, aiChoice) {
    compScore++; 
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(aiChoice)}. You Lose! 😭`;
}

function tie(userChoice, aiChoice) { 
    userScore_span.innerHTML = userScore;
    aiScore_span.innerHTML = aiScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ties ${convertToWord(aiChoice)}. It's A Tie... 🤭`; 
}


function game(userChoice) {
    const aiChoice = getAiChoice();
    switch (userChoice + aiChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, aiChoice);
            break; 
        case "rp": 
        case "ps":
        case "sr": 
            lose(userChoice, aiChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, aiChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    }); 
    
    paper_div.addEventListener('click', function () {
        game("p")
    }); 
    
    scissors_div.addEventListener('click', function () {
        game("s")
    }); 
}

main(); 