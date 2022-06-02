let playerSelection = "";
let computerSelection = "";
let winner = ""
let round = 0;
let playerScore = 0;
let computerScore = 0;

const displayPlayerScore = document.querySelector(".player-score") // Shows player score
const displayComputerScore = document.querySelector(".cpu-score") // Shows computer score
const topMessage = document.querySelector(".top-message") // Shows the round number and results of the round.
const btmMessage = document.querySelector(".btm-message") // Writes out what each player throws and the results e.g. R loses to S.
const leftSquare = document.body.querySelector('.left-square') // Shows what sign the player chose
const rightSquare = document.body.querySelector('.right-square') // Shows what sign the computer chose




// Randomly pick a sign for the computer and assign to the variable computerSelection
function computerTurn() {
    const rpsArray = ["ROCK", "PAPER", "SCISSORS"];
    computerSelection  = rpsArray[Math.floor(Math.random() * rpsArray.length)];
}


// Plays a single round of RPS and checks what the result is
function playRound(){
    if ((playerSelection==="ROCK" && computerSelection === "SCISSORS") || (playerSelection ==="PAPER" && computerSelection ==="ROCK") || (playerSelection=== "SCISSORS" && computerSelection == "PAPER")) {
            playerScore += 1;
            round ++;
            winner = "Player"
        } else if ((playerSelection=== "ROCK" && computerSelection === "PAPER") || (playerSelection=== "PAPER" && computerSelection === "SCISSORS") || (playerSelection=== "SCISSORS" && computerSelection === "ROCK")) {
            computerScore += 1;
            round ++;
            winner = "Computer"
    } else if (playerSelection === computerSelection ) {
            round ++;
            winner = "Tie"
    }
}


// Display the results of the game i.e. win/tie/lose on the screen
function displayResults(){
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    displayPlayerIcon();
    displayComputerIcon();
    changeDisplayMessages(winner);
}

// Part of function displayResults()
function displayPlayerIcon() {
    if (playerSelection === "ROCK") {
        leftSquare.src = "./images/rock.png"
        leftSquare.style.height = "120px";
        leftSquare.style.background = "#F8F0E3";
    } else if (playerSelection === "PAPER") {
        leftSquare.src = "./images/paper.png"
        leftSquare.style.height = "120px";
        leftSquare.style.background = "#F8F0E3";
    } else if (playerSelection === "SCISSORS") {
        leftSquare.src = "./images/scissors.png"
        leftSquare.style.height = "120px";
        leftSquare.style.background = "#F8F0E3";
    }
}

// Part of function displayResults()
function displayComputerIcon() {
    if (computerSelection === "ROCK") {
        rightSquare.src = "./images/rock.png"
        rightSquare.style.height = "120px";
        rightSquare.style.background = "#F8F0E3";
    } else if (computerSelection === "PAPER") {
        rightSquare.src = "./images/paper.png"
        rightSquare.style.height = "120px";
        rightSquare.style.background = "#F8F0E3";
    } else if (computerSelection === "SCISSORS") {
        rightSquare.src = "./images/scissors.png"
        rightSquare.style.height = "120px";
        rightSquare.style.background = "#F8F0E3";
    }
}

// Part of function displayResults()
function changeDisplayMessages(result) {
    if (result === "Player") {
        topMessage.textContent = `Round ${round}: Player wins!`;
        btmMessage.textContent = `${playerSelection} beats ${computerSelection}.`;
    } else if (result === "Computer") {
        topMessage.textContent = `Round ${round}: Computer wins!`;
        btmMessage.textContent = `${playerSelection} loses to ${computerSelection}.`
    } else if (result === "Tie") {
        topMessage.textContent = `Round ${round}: It's a tie!`;
        btmMessage.textContent = `Both players threw ${playerSelection}.`;
    }
}

// Plays a game of RPS and displays the results of each round on the screen
function playGame() {
    computerTurn();
    playRound();
    displayResults();
    gameEnds();
}


// Event listener: Detect which sign the player is throwing and assign the choice to the variable playerSelection
const rpsButtons = document.querySelectorAll('button.rock, button.paper, button.scissors');
rpsButtons.forEach(rpsButton => rpsButton.addEventListener('click', () => {
    playerSelection = rpsButton.className.toUpperCase()
}))

// Event listener: Starts a game of RPS when the player clicks one of the buttons
rpsButtons.forEach(rpsButton => rpsButton.addEventListener('click', playGame));


function gameEnds(){
if (playerScore === 5 || computerScore === 5) {
    rpsButtons.forEach(rpsButton => rpsButton.remove())
    const newBox = document.querySelector(".rps-buttons");
    playAgainButton = document.createElement('button');
    playAgainButton.className = "play-again-button";
    playAgainButton.textContent = `${winner} wins the game. Refresh to play again.`
    playAgainButton.style.height = "120px";
    playAgainButton.style.fontSize = "25px";
    playAgainButton.style.color = "#F8F0E3"
    playAgainButton.style.background = "#22333B"
    playAgainButton.style.border = "solid 1px #F8F0E3"
    playAgainButton.style.padding = "20px"
    playAgainButton.style.fontFamily = "Times New Roman"
    newBox.appendChild(playAgainButton);
    }
}

