var userScore = 0; 
var aiScore = 0; 
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreBoard_div = document.querySelector(".score-board"); 
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getAiChoice() {
    const choices = ['r', 'p', 's'];
    const rando = Math.floor(Math.random() * 3)
    return choices[rando]
}

function convertToWord(letter) {
    if (letter === "r") return "Rock"; 
    if (letter === "p") return "Paper"
    return "Scissors"
}

function win(userChoice, aiChoice) {
    userScore++; 
    userScore_span.innerHTML = userScore; 
    aiScore_span.innerHTML = aiScore; 
    const smallUserWord = "user".fontsize(3).sub();
    const smallAiWord = "ai".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(smallUserWord)}${smallUserWord} beats ${convertToWord(aiChoice)}${smallAiWord}. You win! 🤩`
}

function lose(userChoice, aiChoice) {
    aiScore++; 
    userScore_span.innerHTML = userScore; 
    aiScore_span.innerHTML = aiScore; 
    const smallUserWord = "user".fontsize(3).sub();
    const smallAiWord = "ai".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(smallUserWord)}${smallUserWord} loses to ${convertToWord(aiChoice)}${smallAiWord}. You lose... 😭`
}

function tie(userChoice, aiChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallAiWord = "ai".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(smallUserWord)}${smallUserWord} ties ${convertToWord(aiChoice)}${smallAiWord}. A tie... 🤭`
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
        case "pp":
        case "rr":
        case "ss":
            tie(userChoice, aiChoice);
                break; 
    }
}


function main() {

        rock_div.addEventListener('click', function() {
        game("r");
    });

    paper_div.addEventListener('click', function() {
        game("p")
    });

    scissors_div.addEventListener('click', function() {
        game("s")
    });

}

main();