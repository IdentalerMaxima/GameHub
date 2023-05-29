class ChessModel {
    constructor() {
        console.log("ChessModel.js loaded");
    }

    getBoardConfig() {
        const boardConfig = [
            ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
        ];

        return boardConfig;
    }

    getPieces() {
        var pieces = {
            "R": "../View/resources/pieces/chess-rook-alt.png",
            "N": "../View/resources/pieces/chess-knight-alt.png",
            "B": "../View/resources/pieces/chess-bishop.png",
            "Q": "../View/resources/pieces/chess-queen.png",
            "K": "../View/resources/pieces/chess-king.png",
            "P": "../View/resources/pieces/chess-pawn-alt.png",
            "r": "../View/resources/pieces/chess-rook-altb.png",
            "n": "../View/resources/pieces/chess-knight-altb.png",
            "b": "../View/resources/pieces/chess-bishopb.png",
            "q": "../View/resources/pieces/chess-queenb.png",
            "k": "../View/resources/pieces/chess-kingb.png",
            "p": "../View/resources/pieces/chess-pawn-altb.png",
            " ": "../View/resources/pieces/empty.png"
        };

        return pieces;
    }
}