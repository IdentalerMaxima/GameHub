function createBackButton() 
{
    const backButton = document.createElement('button');
    backButton.textContent = 'Menu';
    backButton.id = 'backButton';

    backButton.addEventListener('click', function() {
        var currentUrl = window.location.href;
        var urlParts = currentUrl.split('/');
        var modifiedUrl = urlParts.slice(0, urlParts.length - 4).join('/') + '/index.html';
        window.location.href = modifiedUrl;
    });


    return backButton;
}
