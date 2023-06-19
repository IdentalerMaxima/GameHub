if (window.location.pathname !== '/games/tictactoe/index.html') {
    window.location.href = '/games/tictactoe/index.html';
} 

let playerText = document.getElementById('playerText');
let restartButton = document.getElementById('restartButton');
let boxes = Array.from(document.getElementsByClassName('box'));

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');

const O = "O";
const X = "X";
let player = X;

let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box =>box.addEventListener('click', boxClicked))
}

function boxClicked(e){
    const id = e.target.id;

    if(!spaces[id]){
        spaces[id] = player;
        e.target.innerText = player;

        if(playerWin() !== false ){
            playerText = '${player} has won!';
            let winning_blocks = playerWin();

            winning_blocks.map(box => boxes[box].style.backgroundColor=winnerIndicator);
            return

        }

        player = player == X ? O : X
    }
}

const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerWin(){
    for (const condition of winning) {
        let [a,b,c] = condition;

        if(spaces[a] && (spaces[a]== spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c]
        }
    }
    return false;
}

restartButton.addEventListener('click', restart);

function restart (){
    spaces.fill(null);

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })

    playerText = 'Tic Tac Toe';

    player = X;
}

startGame()