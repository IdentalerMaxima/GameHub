class ChessModel {
    constructor() {
      this.board = [];
      this.selectedPiece = null;
      this.turn = 'white';
    }
  
    createBoard() {
      const board = new Array(8);
  
      for (let i = 0; i < board.length; i++) {
        board[i] = new Array(8);
      }
  
      this.fillBoard(board);
      this.board = board;
      return board;
    }
  
    fillBoard(board) {
      const colors = ['black', 'white'];
  
      for (let j = 0; j < 8; j++) {
        board[0][j] = this.createPiece(colors[0], [0, j]);
        board[1][j] = this.createPawn(colors[0], [1, j]);
        board[6][j] = this.createPawn(colors[1], [6, j]);
        board[7][j] = this.createPiece(colors[1], [7, j]);
      }
    }
  
    createPiece(color, square) {
      let piece;
  
      switch (square[1]) {
        case 0:
        case 7:
          piece = new Rook(color, square);
          break;
        case 1:
        case 6:
          piece = new Knight(color, square);
          break;
        case 2:
        case 5:
          piece = new Bishop(color, square);
          break;
        case 3:
          piece = new Queen(color, square);
          break;
        case 4:
          piece = new King(color, square);
          break;
      }
  
      return piece;
    }
  
    createPawn(color, square) {
      return new Pawn(color, square);
    }
  
    setBoard(board) {
      this.board = board;
    }
  
    getBoard() {
      return this.board;
    }
  
    movePiece(fromSquare, toSquare) {
      const board = this.getBoard();
      const [fromRow, fromCol] = fromSquare;
      const [toRow, toCol] = toSquare;
      const piece = board[fromRow][fromCol];
  
      if (!piece || !piece.canMoveToSquare(toSquare, board)) {
        return false;
      }
  
      board[toRow][toCol] = piece;
      board[fromRow][fromCol] = null;
      return true;
    }
  
    findKing(color) {
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          const piece = this.board[row][col];
          if (piece instanceof King && piece.color === color) {
            console.log('found king');
            console.log(piece);
            return [row, col];
          }
        }
      }
      return null;
    }
  
    isSquareUnderAttack(square, color) {
      const [targetRow, targetCol] = square;
  
      const pawnDirections = color === 'white' ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]];
      for (const direction of pawnDirections) {
        const [row, col] = direction;
        const attackSquare = [targetRow + row, targetCol + col];
        if (
          this.isValidSquare(attackSquare) &&
          this.board[attackSquare[0]][attackSquare[1]] instanceof Pawn &&
          this.board[attackSquare[0]][attackSquare[1]].color !== color
        ) {
          return true;
        }
      }
  
      const knightMoves = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1],
      ];
      for (const move of knightMoves) {
        const [row, col] = move;
        const attackSquare = [targetRow + row, targetCol + col];
        if (
          this.isValidSquare(attackSquare) &&
          this.board[attackSquare[0]][attackSquare[1]] instanceof Knight &&
          this.board[attackSquare[0]][attackSquare[1]].color !== color
        ) {
          return true;
        }
      }
  
      const horizontalDirections = [[0, -1], [0, 1]];
      const verticalDirections = [[-1, 0], [1, 0]];
      const rookQueenDirections = [...horizontalDirections, ...verticalDirections];
      for (const direction of rookQueenDirections) {
        const [row, col] = direction;
        let [i, j] = [targetRow + row, targetCol + col];
        while (this.isValidSquare([i, j])) {
          if (
            this.board[i][j] instanceof Rook ||
            this.board[i][j] instanceof Queen
          ) {
            if (this.board[i][j].color !== color) {
              return true;
            }
            break;
          }
          if (this.board[i][j]) {
            break;
          }
          i += row;
          j += col;
        }
      }
  
      const diagonalDirections = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
      for (const direction of diagonalDirections) {
        const [row, col] = direction;
        let [i, j] = [targetRow + row, targetCol + col];
        while (this.isValidSquare([i, j])) {
          if (
            this.board[i][j] instanceof Bishop ||
            this.board[i][j] instanceof Queen
          ) {
            if (this.board[i][j].color !== color) {
              return true;
            }
            break;
          }
          if (this.board[i][j]) {
            break;
          }
          i += row;
          j += col;
        }
      }
  
      const kingMoves = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];
      for (const move of kingMoves) {
        const [row, col] = move;
        const attackSquare = [targetRow + row, targetCol + col];
        if (
          this.isValidSquare(attackSquare) &&
          this.board[attackSquare[0]][attackSquare[1]] instanceof King &&
          this.board[attackSquare[0]][attackSquare[1]].color !== color
        ) {
          return true;
        }
      }
  
      return false;
    }
  
    isValidSquare(square) {
      const [row, col] = square;
      return row >= 0 && row < 8 && col >= 0 && col < 8;
    }
  }
  