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
    gameFields.forEach(gameField => gameField.addEventListener('click', initialize) );
    
    function initialize() {  
        
        turn++; 
        let divIndex = this.getAttribute("divIndex");
        if(board[divIndex] = " ") {
            play(this, divIndex);
            checkWinner();
        } else if(board[divIndex] != " "){
            computerPlay();
            checkWinner();
        }
    };
    
   
   
    function play(gameField, index) {
        board[index] = `${player.symbol}`;
        gameField.textContent = "X";
        prompt.textContent= " ";
        xAudio.play(); 
    };

    function computerPlay(gameField) {
        let computerPick = Math.floor(Math.random()* board.length);
        gameField[computerPick].textContent = "O";
        board[computerPick] = `${computer.symbol}`;
        prompt.textContent = "Player's turn";
        circle.play();
        };
       


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

    function checkWinner() {
        if(turn == 8 && board.indexOf(`${player.symbol}`) == winningConditions.indexOf( 1||2||3||4||5||6||7||8)) {
            prompt.textContent = "Player wins!";
            player.score++;
        } else if (turn == 8 && board.indexOf(`${computer.symbol}`) == winningConditions.indexOf( 1||2||3||4||5||6||7||8)) {
            prompt.textContent =  "computer wins!";
            computer.score++;
        }
    }
 