export class Model{
    constructor(){
        this.name = 'chessModel';
        this.createBoard();
        
    }

    createBoard(){

        // Create main container
        var mainContainer = document.createElement('div');
        mainContainer.id = 'mainContainer';

        mainContainer.style.width = '100%';
        mainContainer.style.height = '100%';
        mainContainer.style.display = 'flex';
        mainContainer.style.justifyContent = 'center';
        mainContainer.style.alignItems = 'center';

        document.body.appendChild(mainContainer);

        // Create chess board
        var chessBoard = document.createElement('div');
        chessBoard.id = 'chessBoard';

        chessBoard.style.width = '600px';
        chessBoard.style.height = '600px';
        chessBoard.style.backgroundColor = 'purple';

        mainContainer.appendChild(chessBoard);
    }   
}
