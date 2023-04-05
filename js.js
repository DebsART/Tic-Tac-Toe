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

if (board[computerPick] == " ") {
    board[computerPick] = `${computer.symbol}`;
    gameFields[computerPick].textContent = "O";
    board[computerPick] = `${computer.symbol}`;
    setTimeout(()=> {prompt.textContent = "Player's turn"}, 600);
    circle.play();
} else if (board[computerPick] !== " ") {

   
    function removeCell(value, Array, computerPick) {
        if(value == "X" || value == "O") {
    Array.splice(computerPick, 1);
    }}
    board.filter(removeCell);
     let newComputerPick = Math.floor(Math.random()* board.length);
     board[newComputerPick] = `${computer.symbol}`;
     gameFields[newComputerPick].textContent = "O";
     board[newComputerPick] = `${computer.symbol}`;
     setTimeout(()=> {prompt.textContent = "Player's turn"}, 600);
     circle.play();

};
}

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

function checkWinner() {
    if(Array.from(board).indexOf("X") == winningConditions[0] && winningConditions[0] == winningConditions[1] && winningConditions[1] == winningConditions[2] ){
        prompt.textContent = "Player wins!";
        player.score++;
    } else if (Array.from(board).indexOf("O") == winningConditions[0] && winningConditions[0] == winningConditions[1] && winningConditions[1] == winningConditions[2] ) {
        prompt.textContent =  "computer wins!";
        computer.score++;
    }

    if(Array.from(board).indexOf("X") == winningConditions[3] && winningConditions[3] == winningConditions[4] && winningConditions[4] == winningConditions[5] ){
        prompt.textContent = "Player wins!";
        player.score++;
    } else if (Array.from(board).indexOf("O") == winningConditions[3] && winningConditions[3] == winningConditions[4] && winningConditions[4] == winningConditions[5] ) {
        prompt.textContent =  "computer wins!";
        computer.score++;
    }

    if(Array.from(board).indexOf("X") == winningConditions[6] && winningConditions[6] == winningConditions[7] && winningConditions[7] == winningConditions[8] ){
        prompt.textContent = "Player wins!";
        player.score++;
    } else if (Array.from(board).indexOf("O") == winningConditions[6] && winningConditions[6] == winningConditions[7] && winningConditions[7] == winningConditions[8] ) {
        prompt.textContent =  "computer wins!";
        computer.score++;
    }

    if(Array.from(board).indexOf("X") == winningConditions[0] && winningConditions[0] == winningConditions[4] && winningConditions[4] == winningConditions[8] ){
        prompt.textContent = "Player wins!";
        player.score++;
    } else if (Array.from(board).indexOf("O") == winningConditions[0] && winningConditions[0] == winningConditions[4] && winningConditions[4] == winningConditions[8] ) {
        prompt.textContent =  "computer wins!";
        computer.score++;
    }

    if(Array.from(board).indexOf("X") == winningConditions[6] && winningConditions[6] == winningConditions[4] && winningConditions[4] == winningConditions[2] ){
        prompt.textContent = "Player wins!";
        player.score++;
    } else if (Array.from(board).indexOf("O") == winningConditions[6] && winningConditions[6] == winningConditions[4] && winningConditions[4] == winningConditions[2] ) {
        prompt.textContent =  "computer wins!";
        computer.score++;
    }

    if(Array.from(board).indexOf("X") == winningConditions[0] && winningConditions[0] == winningConditions[3] && winningConditions[3] == winningConditions[6] ){
        prompt.textContent = "Player wins!";
        player.score++;
    } else if (Array.from(board).indexOf("O") == winningConditions[0] && winningConditions[0] == winningConditions[3] && winningConditions[3] == winningConditions[6] ) {
        prompt.textContent =  "computer wins!";
        computer.score++;
    }

    if(Array.from(board).indexOf("X") == winningConditions[1] && winningConditions[1] == winningConditions[4] && winningConditions[4] == winningConditions[7] ){
        prompt.textContent = "Player wins!";
        player.score++;
    } else if (Array.from(board).indexOf("O") == winningConditions[1] && winningConditions[1] == winningConditions[4] && winningConditions[4] == winningConditions[7] ) {
        prompt.textContent =  "computer wins!";
        computer.score++;
    }

    if(Array.from(board).indexOf("X") == winningConditions[2] && winningConditions[2] == winningConditions[5] && winningConditions[5] == winningConditions[8] ){
        prompt.textContent = "Player wins!";
        player.score++;
    } else if (Array.from(board).indexOf("O") == winningConditions[2] && winningConditions[2] == winningConditions[5] && winningConditions[5] == winningConditions[8] ) {
        prompt.textContent =  "computer wins!";
        computer.score++;
    }
}
