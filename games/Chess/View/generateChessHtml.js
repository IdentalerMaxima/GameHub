async function generateChessHtml() {
    const container = document.createElement('div');

    await addButton(container);


    document.body.appendChild(container);


}


async function addButton(container) {
    await new Promise((resolve) => {
        const backButtonScript = document.createElement('script');
        backButtonScript.src = '../Model/createBackButton.js';

        backButtonScript.addEventListener('load', function () {
            const backButton = createBackButton();
            container.appendChild(backButton);
            resolve();
        });

        document.head.appendChild(backButtonScript);
        console.log("backButtonScript loaded");
    });
}

// async function addTitle(container) {
//     await new Promise((resolve) => {
//         const title = document.createElement('h1');
//         title.id = 'title';
//         title.textContent = 'Chess';
//         container.appendChild(title);
//         resolve();
//         console.log("title loaded");
//     });
// }

// async function addBoard(container) {
//     await new Promise((resolve) => {
//         const chessboardContainer = document.createElement('div');
//         chessboardContainer.id = 'chessboardContainer';

//         const chessboard = document.createElement('div');
//         chessboard.id = 'chessboard';
//         chessboardContainer.appendChild(chessboard);

//         container.appendChild(chessboardContainer);
//         resolve();
//         console.log("chessboard loaded");
//     });
// }

// async function addScripts(container) {
//     await new Promise((resolve) => {
//         const scripts = [
//             '../Model/ChessModel.js',
//             '../View/ChessView.js',
//             '../Controller/ChessController.js',
//             '../Chess.js'
//         ];

//         let loadedCount = 0;

//         function loadNextScript() {
//             if (loadedCount >= scripts.length) {
//                 resolve();
//                 return;
//             }

//             const script = document.createElement('script');
//             script.src = scripts[loadedCount];

//             script.addEventListener('load', function () {
//                 loadedCount++;
//                 loadNextScript();
//             });

//             container.appendChild(script);
//         }

//         loadNextScript();
//         document.body.appendChild(container);
//         console.log("scripts loaded");

//     });
// }
