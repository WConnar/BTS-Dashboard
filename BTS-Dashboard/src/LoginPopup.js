const loginWindowButton = document.getElementById('loginWindowButton');
const loginCloseButton = document.getElementById('loginCloseButton');
const login = document.getElementById('log-in-window');
const overlay = document.getElementById('overlay');
loginWindowButton.onclick = () => openLogIn(login, overlay);
loginCloseButton.onclick = () => closeLogIn(login, overlay);
function openLogIn(login, overlay){
    
    login.classList.add('active')
    overlay.classList.add('active')
}
function closeLogIn(login, overlay){
    
    login.classList.remove('active')
    overlay.classList.remove('active')
}