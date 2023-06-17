class ChessView {
  constructor(model) {
    this.model = model;
  }

  createBoard() {
    const board = this.model.createBoard();
    const chessboardDiv = document.getElementById('chessboard');

    if (!chessboardDiv) {
      console.error('ChessboardDiv element not found in the DOM');
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

    chessboardDiv.appendChild(fragment);
  }

  getSquareFromTile(tile) {
    const row = tile.parentNode; 
    const rowIndex = Array.from(row.parentNode.children).indexOf(row);
    const colIndex = Array.from(row.children).indexOf(tile);
    return [rowIndex, colIndex]; // Return the square coordinates as [row, column]
  }

  getPieceAtSquare(square) {
    const [row, col] = square;
    return this.model.board[row][col];
  }

  highlightSelectedSquare(oldTile, tile) {
    this.resetColors(oldTile);
    tile.style.backgroundColor = 'rgb(115, 115, 115)';
    oldTile = tile;
    return oldTile;
  }

  highlightPossibleMoves(piece) {
    const validMoves = piece.getValidMoves(this.model.getBoard());
    validMoves.forEach(move => {
      const [row, col] = move;
      const tile = document.querySelector(`.chessboard-row:nth-child(${row + 1}) .chessboard-tile:nth-child(${col + 1})`);
      tile.style.backgroundColor = 'rgb(115, 115, 115)';
    });
  }

  resetColors(oldTile) {
    if (!oldTile) {
      return;
    }
    oldTile.style.backgroundColor = '';
    const piece = this.getPieceAtSquare(this.getSquareFromTile(oldTile));
    const validMoves = piece.getValidMoves(this.model.getBoard());
    validMoves.forEach(move => {
      const [row, col] = move;
      const tile = document.querySelector(`.chessboard-row:nth-child(${row + 1}) .chessboard-tile:nth-child(${col + 1})`);
      tile.style.backgroundColor = '';
    });
  }

  selectPiece() {
    const tiles = document.querySelectorAll('.chessboard-tile');
    let selectedTile = null;
    let selectedPiece = null;
    let validMoves = [];
  
    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        if(!selectedPiece){
          if(tile.classList.contains('has-piece')) {
            selectedTile = this.highlightSelectedSquare(selectedTile, tile);
            selectedPiece = this.getPieceAtSquare(this.getSquareFromTile(tile));
            validMoves = this.highlightPossibleMoves(selectedPiece);
          }
        }
        else {
          if (tile.classList.contains('has-piece')) {
            const piece = this.getPieceAtSquare(this.getSquareFromTile(tile));
            if (piece.color === selectedPiece.color) {
              selectedPiece = null;
              return;
            }
          }
        }
      });
    });
  }
  

  movePiece(sourceSquare, targetSquare) {
    const piece = this.getPieceAtSquare(sourceSquare);
    if (!piece) {
      return; // 
    }

    const validMoves = piece.getValidMoves(this.model.getBoard());
    if (!validMoves.some(move => move[0] === targetSquare[0] && move[1] === targetSquare[1])) {
      return; 
    }

    const sourceTile = document.querySelector(`.chessboard-row:nth-child(${sourceSquare[0] + 1}) .chessboard-tile:nth-child(${sourceSquare[1] + 1})`);
    const targetTile = document.querySelector(`.chessboard-row:nth-child(${targetSquare[0] + 1}) .chessboard-tile:nth-child(${targetSquare[1] + 1})`);

    if (!sourceTile || !targetTile) {
      return; // 
    }

    const pieceElement = sourceTile.querySelector('.chessboard-piece');
    targetTile.appendChild(pieceElement);
  }

}