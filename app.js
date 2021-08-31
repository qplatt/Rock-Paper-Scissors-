var userScore = 0; 
var computerScore = 0; 
const userScore_span = document.getElementById("user-score");
const aiScore_span = document.getElementById("ai-score");
const scoreBoard_div = document.querySelector(".score-board"); 
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getAiChoice() {
    const choices = ['r', 'p', 's'];
    const rando = Math.floor(Math.random() * 3)
    return choices[rando]
}

function win() {
    userScore++; 
    userScore_span.innerHTML = userScore; 
    aiScore_span.innerHTML = computerScore; 
}

function lose() {
    computerScore++
}

function tie() {
    console.log("TIE")
}


function game(userChoice) {
    const aiChoice = getAiChoice(); 
    switch (userChoice + aiChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break; 
        case "rp":
        case "ps":
        case "sr":
            lose();
            break; 
        case "pp":
        case "rr":
        case "ss":
            tie();
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