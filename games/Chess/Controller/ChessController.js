class ChessController {
    constructor() {
        console.log("ChessController.js loaded");
        this.model = new ChessModel();
        this.view = new ChessView();
    }

}