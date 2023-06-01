function generateChessHtml() {

    const container = document.createElement('div');

    const backButtonScript = document.createElement('script');
    backButtonScript.src = '../Model/createBackButton.js';

    backButtonScript.addEventListener('load', function () {
        const backButton = createBackButton();
        container.appendChild(backButton);
    });

    document.head.appendChild(backButtonScript);

    const heading = document.createElement('h1');
    heading.textContent = 'Chess';
    container.appendChild(heading);

    const chessboardContainer = document.createElement('div');
    chessboardContainer.id = 'checssboardContainer';

    const chessboard = document.createElement('div');
    chessboard.id = 'chessboard';
    chessboardContainer.appendChild(chessboard);

    container.appendChild(chessboardContainer);

    const chessModelScript = document.createElement('script');
    chessModelScript.src = '../Model/ChessModel.js';

    const chessViewScript = document.createElement('script');
    chessViewScript.src = '../View/ChessView.js';

    const chessControllerScript = document.createElement('script');
    chessControllerScript.src = '../Controller/ChessController.js';

    const chessScript = document.createElement('script');
    chessScript.src = '../Chess.js';

    container.appendChild(chessModelScript);
    container.appendChild(chessViewScript);
    container.appendChild(chessControllerScript);
    container.appendChild(chessScript);


    document.body.appendChild(container);
}
