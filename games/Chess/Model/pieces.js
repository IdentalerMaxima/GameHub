class Pieces {
    constructor(color, square) {
        this.color = color;
        this.square = square;
        this.direction = color === 'white' ? -1 : 1;
    }
}

class Pawn extends Pieces {
    constructor(color, square) {
        super(color, square);
        this.image = `images/${color}Pawn.png`;
    }

    getValidMoves(board) {
        const validMoves = [];
        const [currentRow, currentCol] = this.square;

        const forwardSquare = [currentRow + this.direction, currentCol];
        if (this.isValidSquare(forwardSquare, board) && !board[forwardSquare[0]][forwardSquare[1]]) {
            validMoves.push(forwardSquare);
        }
        const doubleForwardSquare = [currentRow + 2 * this.direction, currentCol];
        if (this.isFirstMove() && this.isValidSquare(doubleForwardSquare, board) && !board[doubleForwardSquare[0]][doubleForwardSquare[1]]) {
            validMoves.push(doubleForwardSquare);
        }
        const attackSquares = [
            [currentRow + this.direction, currentCol - 1],
            [currentRow + this.direction, currentCol + 1]
        ];
        for (const attackSquare of attackSquares) {
            if (this.isValidSquare(attackSquare, board) && this.hasOpponentPiece(attackSquare, board)) {
                validMoves.push(attackSquare);
            }
        }
        return validMoves;
    }
    isValidSquare(square, board) {
        const [row, col] = square;
        return row >= 0 && row < 8 && col >= 0 && col < 8;
    }

    isFirstMove() {
        return this.color === 'white' && this.square[0] === 6 ||
            this.color === 'black' && this.square[0] === 1;
    }

    hasOpponentPiece(square, board) {
        const [row, col] = square;
        return board[row][col] && board[row][col].color !== this.color;
    }
}

class Rook extends Pieces {
    constructor(color, square) {
        super(color, square);
        this.image = `images/${color}Rook.png`;
    }
}

class Knight extends Pieces {
    constructor(color, square) {
        super(color, square);
        this.image = `images/${color}Knight.png`;
    }
}

class Bishop extends Pieces {
    constructor(color, square) {
        super(color, square);
        this.image = `images/${color}Bishop.png`;
    }
}

class Queen extends Pieces {
    constructor(color, square) {
        super(color, square);
        this.image = `images/${color}Queen.png`;
    }
}

class King extends Pieces {
    constructor(color, square) {
        super(color, square);
        this.image = `images/${color}King.png`;
    }
}

class Epiece extends Pieces {
    constructor(color, square) {
        super(color, square);
        this.image = `images/Empty.png`;
    }
}
