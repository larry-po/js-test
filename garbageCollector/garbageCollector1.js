const addListenerBtn = document.getElementById('addListenerBtn');
const clickableBtn = document.getElementById('clicableBtn');
const messageInput = document.getElementById('clickMessageInput');

function print() {
    const value = messageInput.value;
    console.log(value || 'Clicked me!');
}

function addListener() {
    clickableBtn.addEventListener('click', print);
}

addListenerBtn.addEventListener('click', addListener);