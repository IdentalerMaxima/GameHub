//First load
if (window.location.pathname !== '/games/Chess/View/Chess.html') {
    console.log("Chess.js loaded");
    window.location.href = '/games/Chess/View/Chess.html';
}

var chessController = new ChessController();




