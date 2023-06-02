class Pieces {
    constructor(color, square) {
        this.color = color;
        this.square = square;
    }
}

class Pawn extends Pieces {
    constructor(color, square) {
        super(color, square);
        this.image = `images/${color}Pawn.png`;
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
