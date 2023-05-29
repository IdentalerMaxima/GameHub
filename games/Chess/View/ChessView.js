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

    selectPiece() {
        const chessPieces = document.querySelectorAll('img');
        let selectedTile = null;

        chessPieces.forEach(piece => {
            piece.addEventListener('click', () => {
                console.log(piece);
                const tile = piece.parentElement;
                if(selectedTile) {
                    selectedTile.style.backgroundColor = '';
                }

                tile.style.backgroundColor = 'rgb(115,115,115)';

                selectedTile = tile;







                
                // Logic to calculate and display the possible steps for the clicked piece
                // You'll need to implement the logic based on the chess rules
                // This may involve determining the valid moves, checking for obstructions, etc.

                // Display the possible steps for the piece
                // You can show the valid moves by adding CSS classes, changing styles, or displaying them in a separate UI element.
            });
        });
    }
}