document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2000);
});

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}
function inviteBot() {
    window.open('file:///C:/Users/andersoninformatica/Downloads/meubot%3B)/bot%C3%A3obeta.html', '_blank');
}

function joinServer() {
    window.open('https://discord.gg/dtAM7CWPng', '_blank');
}
