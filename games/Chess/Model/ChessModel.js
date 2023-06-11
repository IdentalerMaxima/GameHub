class ChessModel {
    constructor() {
        //console.log("ChessModel.js loaded");
        this.board = [];
    }

    //Board logic
    createBoard() {
        const board = new Array(8);

        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(8);
        }

        this.fillBoard(board);

        this.board = board;

        // console.log("board: " + board);
        // console.log(board[0][0]);
        
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
            default:
                break;
        }
    
        return piece;
    }
    
    createPawn(color, square) {
        return new Pawn(color, square);
    }

    //Piece logic
    showPossibleMoves(piece) {
        const possibleMoves = [];

        return possibleMoves;
    }

    getBoard() {
        return this.board;
    }
}