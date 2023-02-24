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
let aiPlayer = players(0, 'O');

let prompt = document.querySelector('.prompt');
prompt.textContent = "Select a box to start!";

   
const gameBoard = (() => {


    let gameField = document.querySelectorAll('.gameField');

    let board = [];
    for (let i = 0; i < gameField.length; i++) {
        board.push(i);

        let turn = 0;
        
            gameField[i].addEventListener('click', () => {
                if(gameField[i].textContent == " "){
                    gameField[i].innerHTML = "X";
                    gameField[i].classList.toggle(`${player.symbol}`);
                    board.push(player.symbol);
                    turn++
                }
                game.checkWinner();
                
            })

           if ( turn++) {
                computerPlay = Math.floor(math.random()* gameField.length)
                gameField[computerPlay].innerHTML = "O";
                board.push(aiPlayer.symbol);
                gameField[i].classList.toggle(`${aiPlayer.symbol}`);
            }
    };
        
    return {board, gameField};
    })();

console.log(gameBoard.gameField);
console.log(gameBoard.board);
 
const game =( () => {
    player;
    aiPlayer;

    

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
        if(gameBoard.board.indexOf(player.symbol) === winningConditions.indexOf( 1||2||3||4||5||6||7||8)) {
            prompt.textContent = "Player wins!";
            player.score++;
        } else if (gameBoard.board.indexOf(aiPlayer.symbol) === winningConditions.indexOf( 1||2||3||4||5||6||7||8)) {
            prompt.textContent =  "AI wins!";
            aiPlayer.score++;
        }
    }
    return {checkWinner}
})()
