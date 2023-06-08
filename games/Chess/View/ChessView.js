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
          tile.classList.add('has-piece');
        }

        row.appendChild(tile);
      }
      fragment.appendChild(row);
    }

    chessboard.appendChild(fragment);

    this.selectPiece();
  }

  getSquareFromTile(tile) {
    const row = tile.parentNode; // Get the parent row element
    const rowIndex = Array.from(row.parentNode.children).indexOf(row); // Get the row index

    const colIndex = Array.from(row.children).indexOf(tile); // Get the column index

    return this.board[rowIndex, colIndex]; // Return the square coordinates as [row, column]
  }

  getPieceAtSquare(square) {
    const [row, col] = square;
    return this.board[row][col]; // Assuming `board` is the chessboard array
  }

  selectPiece() {
    const tiles = document.querySelectorAll('.chessboard-tile');
    console.log(tiles);
    let selectedTile = null;

    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        if (tile.classList.contains('has-piece')) {
          if (selectedTile) {
            selectedTile.style.backgroundColor = '';
          }

          tile.style.backgroundColor = 'rgb(115,115,115)';

          selectedTile = tile;

          const square = this.getSquareFromTile(tile); // Extract the square coordinates from the tile
          const piece = this.getPieceAtSquare(square); // Get the piece object at the selected square

          if (piece) {
            const validMoves = piece.getValidMoves(board); // Call getValidMoves() on the piece

            // Use the validMoves array to update the UI or perform other actions
            console.log(validMoves);
          }
        }
      });
    });
  }
}