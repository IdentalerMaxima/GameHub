class ChessController {
    constructor() {
        //console.log("ChessController.js loaded");
        this.model = new ChessModel();
        this.view = new ChessView(this.model);
        this.startGame();
    }

    startGame() {
        this.view.createBoard(); //Creates and fills the board
        this.view.addEventListeners(); //Adds event listeners to the board
        
    }

}