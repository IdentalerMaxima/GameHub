//Loader for games, first delete the old script and then load the new one
function loadGame(gameFile) {

    var gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';


    var script = document.createElement('script');
    script.src = gameFile;

    gameContainer.appendChild(script);
}

//Add event listeners to the buttons
document.getElementById('game1').addEventListener('click', function () {
    loadGame('tests/test.js');
});

document.getElementById('chess').addEventListener('click', function () {
    loadGame('games/Chess/Chess.js');
});

document.getElementById('game3').addEventListener('click', function () {
    loadGame('game3.js');
});

document.getElementById('game4').addEventListener('click', function () {
    loadGame('game4.js');
});

