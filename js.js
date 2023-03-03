let popUpStart = document.querySelector('#popUpStart');
function fadeOutEffect() {
let fadeEffect =setInterval(function (){
        if (!popUpStart.style.opacity) {
            popUpStart.style.opacity = 1;
        }
        if (popUpStart.style.opacity > 0) {
            popUpStart.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 85);
};

popUpStart.addEventListener('click', (fadeOutEffect));

let img = document.querySelector('img');
img.addEventListener('click', () => {
    let audio = new Audio("images/cursor.mp3");
    audio.play();
    
});




const players = (score, symbol) => {
    return {score, symbol};
};

let player = players(0, 'X');
let computer = players(0, 'O');

let prompt = document.querySelector('.prompt');
prompt.textContent = "Select a box to start!";

   
const gameBoard = (() => {


    let gameFields = document.querySelectorAll('.gameField');

    let board = [];
    for (let i = 0; i < gameFields.length; i++) {
        board.push(" ");
  
        let turn = 0;

        gameField.forEach(gameField => {
           gameField.addEventListener('click', e => {
                if(gameField.innerText == " "){
                    gameField.textContent = "X";
                    gameField.classList.toggle(`${player.symbol}`);
                    board.push(`${player.symbol}`);
                    prompt.textContent= " ";
                    turn++
                }
            })

           if ( turn++) {
                function computerPlay() {
                let computerPick = board[Math.floor(Math.random()* gameField.length)];
                gameField[computerPick].textContent = "O";
                board.push(`${computer.symbol}`);
                gameField[i].classList.toggle(`${computer.symbol}`);
                prompt.textContent = "Player's turn";
                };
                return setTimeout(()=> {computerPlay}, 600)
            };
    }); 

   
};   
    return {board, gameField};
})();

console.log(gameBoard.gameField);
console.log(gameBoard.board);
 
const game =( () => {
    player;
    computer;

    

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

    let checkWinner = () => {
        if(gameBoard.board.turn = 8 && gameBoard.board.indexOf(player.symbol) === winningConditions.indexOf( 1||2||3||4||5||6||7||8)) {
            prompt.textContent = "Player wins!";
            player.score++;
        } else if (gameBoard.board.turn = 8 && gameBoard.board.indexOf(computer.symbol) === winningConditions.indexOf( 1||2||3||4||5||6||7||8)) {
            prompt.textContent =  "computer wins!";
            computer.score++;
        }
    }
    return {checkWinner};
})();
console.log(game.checkWinner);

