class ChessView {
    constructor(model) {
        console.log("ChessView.js loaded");
        this.model = model;
    }

    startGame() {
        this.createBoard();
    }

    createBoard() {
        const board = this.model.createBoard();
      
        const chessboard = document.getElementById('chessboard');
      
        if (!chessboard) {
          console.error('Chessboard element not found in the DOM');
          return;
        }
      
        const fragment = document.createDocumentFragment();
      
        for (let i = 0; i < board.length; i++) {
          const row = document.createElement('div');
          row.classList.add('chessboard-row');
      
          for (let j = 0; j < board[i].length; j++) {
            const tile = document.createElement('div');
            tile.classList.add('chessboard-tile');
      
            if (board[i][j]) {
              const piece = document.createElement('img');
              piece.src = board[i][j].image;
              piece.classList.add('chessboard-piece');
              tile.appendChild(piece);
            }
      
            row.appendChild(tile);
          }
          fragment.appendChild(row);
        }
      
        chessboard.appendChild(fragment);

        this.selectPiece();
      }
      

    selectPiece() {
        const tiles = document.querySelectorAll('.chessboard-tile');
        let selectedTile = null;

        tiles.forEach(tile => {
            tile.addEventListener('click', () => {
                console.log(tile);
                if(selectedTile) {
                    tile.style.backgroundColor = '';
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