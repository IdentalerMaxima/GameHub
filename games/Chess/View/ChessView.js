class ChessView {
    constructor(model) {
        console.log("ChessView.js loaded");
        this.model = model;

        
    }

    startGame() {
        this.createBoard();
    }

    createBoard() {
        const boardConfig = this.model.getBoardConfig();
        const board = document.getElementById('chessboard');
        board.innerHTML = '';

        for (let row = 0; row < boardConfig.length; row++) {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');
      
            for (let col = 0; col < boardConfig[row].length; col++) {
              const cellElement = document.createElement('div');
              cellElement.classList.add('cell');
              cellElement.textContent = boardConfig[row][col];
      
              rowElement.appendChild(cellElement);
            }
      
            board.appendChild(rowElement);
        }

    }

    
}