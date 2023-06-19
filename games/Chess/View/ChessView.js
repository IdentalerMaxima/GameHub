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

  highlightPossibleMoves(validMoves, currentSquare) {
    this.resetColors();
    validMoves.forEach(move => {
      const [row, col] = move;
      const tile = document.querySelector(`.chessboard-row:nth-child(${row + 1}) .chessboard-tile:nth-child(${col + 1})`);
      tile.style.backgroundColor = 'rgb(115, 115, 115)';
    });
    currentSquare.style.backgroundColor = 'rgb(115, 115, 115)';

    return validMoves;
  }

  resetColors() {
    const tiles = document.querySelectorAll('.chessboard-tile');
    tiles.forEach(tile => {
      tile.style.backgroundColor = '';
      tile.classList.remove('can-move');
    });
  }
  
  

  isValidMove(tile, selectedPiece) {
    const targetSquare = this.getSquareFromTile(tile);
    const piece = this.getPieceAtSquare(targetSquare);

    if (piece && piece.color === selectedPiece.color) {
      return false;
    }
  
    const validMoves = selectedPiece.getValidMoves(this.model.getBoard());
    return validMoves.some(move => {
      const [row, col] = move;
      return row === targetSquare[0] && col === targetSquare[1];
    });
  }

  addEventListeners() {
    const tiles = document.querySelectorAll('.chessboard-tile');
  
    tiles.forEach((tile) => {
      tile.addEventListener('click', (event) => {
        this.handleTileClick(event); 
      });
    });
  }
  
  handleTileClick(event) {
  const tile = event.currentTarget;
  const hasPiece = tile.classList.contains('has-piece');
  let selectedPiece = null;

  if (hasPiece) {
    selectedPiece = this.getPieceAtSquare(this.getSquareFromTile(tile));
    tile.classList.add('selected');
    const validMoves = selectedPiece.updateValidMoves(this.model.getBoard());
    this.highlightPossibleMoves(validMoves, tile);
  
  } else {
    const canMove = tile.style.backgroundColor === 'rgb(115, 115, 115)';

    if (canMove) {
      const selectedTile = document.querySelector('.selected');
      this.movePiece(this.getSquareFromTile(selectedTile), this.getSquareFromTile(tile));
      selectedTile.classList.remove('selected');
      
      selectedPiece = null;
    }
  }
}



  
  

  
  

  movePiece(sourceSquare, targetSquare) {
    const piece = this.getPieceAtSquare(sourceSquare);
    if (!piece) {
      return; // 
    }

    let validMoves= piece.getValidMoves(this.model.getBoard());
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

    this.resetColors(sourceTile);
    this.model.movePiece(sourceSquare, targetSquare);
    sourceTile.classList.remove('has-piece');
    targetTile.classList.add('has-piece');



    console.log(this.model.board);
  }
}
