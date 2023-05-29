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
                const pieceLetter = boardConfig[row][col];

                if (pieceLetter) {
                    const pieceImage = document.createElement('img');
                    pieceImage.src = this.model.getPieces()[pieceLetter];
                    cellElement.appendChild(pieceImage);
                }
                
                rowElement.appendChild(cellElement);
            }

            board.appendChild(rowElement);
        }

    }


}