let popUpStart = document.querySelector('#popUpStart');
let gameBody = document.querySelector('.gameBody');
function fadeOutEffect() {
let fadeEffect =setInterval(function (){
        if (!popUpStart.style.opacity) {
            popUpStart.style.opacity = 1;
        }
        if (popUpStart.style.opacity > 0) {
            popUpStart.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            gameBody.style.zIndex = "9999";
        }
    }, 85);
   
};

popUpStart.addEventListener('click', (fadeOutEffect));

let img = document.querySelector('img');
let audio = new Audio("images/cursor.mp3");
let circle = new Audio("images/circle.wav");
let xAudio = new Audio("images/x.wav");
img.addEventListener('click', () => {
    audio.play();
    
});

const players = (score, symbol) => {
    return {score, symbol};
};
let player = players(0, 'X');
let computer = players(0, 'O');

let prompt = document.querySelector('.prompt');
prompt.textContent = "Select a box to start!";

const gameFields = document.querySelectorAll('.gameField');
let board = [];
    for (let i = 0; i < gameFields.length; i++) {
        board.push(" ");
    };

    let turn = 0;
    gameFields.forEach(gameField => gameField.addEventListener('click', startGame) );
    
    function initialize() {  
        
        turn++; 
        let divIndex = this.getAttribute("divIndex");
        if(board[divIndex] = " ") {
            play(this, divIndex);
            checkWinner();
            setTimeout(()=> {computerPlay()}, 1000)
            checkWinner();
        }
    };
    
   
    
    function play(gameField, index) {
        board[index] = `${player.symbol}`;
        gameField.textContent = "X";
        prompt.textContent= " ";
        xAudio.play(); 
        
    };

    function computerPlay( computerPick) { 
        computerPick = Math.floor(Math.random()* board.length); 
        if (board[computerPick] !== " ") {
            board = board.splice(computerPick, 1);
            Math.floor(Math.random()* board.length);
        } else if (board[computerPick] == " ") {
            board[computerPick] = `${computer.symbol}`;
            gameFields[computerPick].textContent = "O";
            board[computerPick] = `${computer.symbol}`;
            setTimeout(()=> {prompt.textContent = "Player's turn"}, 600);
            circle.play();
        }
        };
       
        console.log(computerPlay);

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 4, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
   
    ];

    function endGame() {
        gameFields.removeAttribute("disabled");
        playerScore = 0;
        computerScore = 0;
        finalResults.textContent = " ";
        prompt.textContent = " ";
    }

    function resetRound() {
        setTimeout(()=> {endGame()}, 1000);
        gameFields.textContent = " ";
        board = [];
        xAudio.play(); 
        circle.play();
        initialize();
        prompt.textContent = "Next Round!";
    }
     let i=0;
    function startGame() {
        if(i !== 3) {
            initialize();
        };

        if(playerScore == 3 || computerScore == 3) {
            finalResults = documents.querySelector('h2');
            finalResults.textContent = `Game Over! Player scores ${playerScore}! Computer scores ${computerScore}`;
            gameFields.setAttribute("disabled", 1);
            playAgain.style.display = "block";
        }
    }

    let playAgain = document.querySelector(".restart");
    playAgain.style.display="none";    
    playAgain.setClickable="false";
    playAgain.addEventListener('click', () => {
        endGame();
    })

    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");

    function checkWinner() {
            if(Array.from(board).indexOf("X") == winningConditions[0] && winningConditions[0] == winningConditions[1] && winningConditions[1] == winningConditions[2] ){
                prompt.textContent = "Player wins!";
                player.score++;
                playerScore.textContent = `${playerScore}`;
                resetRound();
            } else if (Array.from(board).indexOf("O") == winningConditions[0] && winningConditions[0] == winningConditions[1] && winningConditions[1] == winningConditions[2] ) {
                prompt.textContent =  "computer wins!";
                computer.score++;
                computerScore.textContent = `${computerScore}`
                resetRound();
            }

            if(Array.from(board).indexOf("X") == winningConditions[3] && winningConditions[3] == winningConditions[4] && winningConditions[4] == winningConditions[5] ){
                prompt.textContent = "Player wins!";
                player.score++;
                playerScore.textContent = `${playerScore}`
                resetRound();
            } else if (Array.from(board).indexOf("O") == winningConditions[3] && winningConditions[3] == winningConditions[4] && winningConditions[4] == winningConditions[5] ) {
                prompt.textContent =  "computer wins!";
                computer.score++;
                computerScore.textContent = `${computerScore}`
                resetRound();
            }

            if(Array.from(board).indexOf("X") == winningConditions[6] && winningConditions[6] == winningConditions[7] && winningConditions[7] == winningConditions[8] ){
                prompt.textContent = "Player wins!";
                player.score++;
                playerScore.textContent = `${playerScore}`
                resetRound();
            } else if (Array.from(board).indexOf("O") == winningConditions[6] && winningConditions[6] == winningConditions[7] && winningConditions[7] == winningConditions[8] ) {
                prompt.textContent =  "computer wins!";
                computer.score++;
                computerScore.textContent = `${computerScore}`
                resetRound();
            }

            if(Array.from(board).indexOf("X") == winningConditions[0] && winningConditions[0] == winningConditions[4] && winningConditions[4] == winningConditions[8] ){
                prompt.textContent = "Player wins!";
                player.score++;
                playerScore.textContent = `${playerScore}`
                resetRound();
            } else if (Array.from(board).indexOf("O") == winningConditions[0] && winningConditions[0] == winningConditions[4] && winningConditions[4] == winningConditions[8] ) {
                prompt.textContent =  "computer wins!";
                computer.score++;
                compuerScore.textContent = `${computerScore}`
                resetRound();
            }

            if(Array.from(board).indexOf("X") == winningConditions[6] && winningConditions[6] == winningConditions[4] && winningConditions[4] == winningConditions[2] ){
                prompt.textContent = "Player wins!";
                player.score++;
                playerScore.textContent = `${playerScore}`
                resetRound();
            } else if (Array.from(board).indexOf("O") == winningConditions[6] && winningConditions[6] == winningConditions[4] && winningConditions[4] == winningConditions[2] ) {
                prompt.textContent =  "computer wins!";
                computer.score++;
                computerScore.textContent = `${computerScore}`
                resetRound();
            }

            if(Array.from(board).indexOf("X") == winningConditions[0] && winningConditions[0] == winningConditions[3] && winningConditions[3] == winningConditions[6] ){
                prompt.textContent = "Player wins!";
                player.score++;
                playerScore.textContent = `${playerScore}`
                resetRound();
            } else if (Array.from(board).indexOf("O") == winningConditions[0] && winningConditions[0] == winningConditions[3] && winningConditions[3] == winningConditions[6] ) {
                prompt.textContent =  "computer wins!";
                computer.score++;
                computerScore.textContent = `${computerScore}`
                resetRound();
            }

            if(Array.from(board).indexOf("X") == winningConditions[1] && winningConditions[1] == winningConditions[4] && winningConditions[4] == winningConditions[7] ){
                prompt.textContent = "Player wins!";
                player.score++;
                playerScore.textContent = `${playerScore}`
                resetRound();
            } else if (Array.from(board).indexOf("O") == winningConditions[1] && winningConditions[1] == winningConditions[4] && winningConditions[4] == winningConditions[7] ) {
                prompt.textContent =  "computer wins!";
                computer.score++;
                computerScore.textContent = `${computerScore}`
                resetRound();
            }

            if(Array.from(board).indexOf("X") == winningConditions[2] && winningConditions[2] == winningConditions[5] && winningConditions[5] == winningConditions[8] ){
                prompt.textContent = "Player wins!";
                player.score++;
                playerScore.textContent = `${playerScore}`
                resetRound();
            } else if (Array.from(board).indexOf("O") == winningConditions[2] && winningConditions[2] == winningConditions[5] && winningConditions[5] == winningConditions[8] ) {
                prompt.textContent =  "computer wins!";
                computer.score++;
                computerScore.textContent = `${computerScore}`
                resetRound();
            }
    }
