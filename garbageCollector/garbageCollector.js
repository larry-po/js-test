const addListenerBtn = document.getElementById('addListenerBtn');
const clickableBtn = document.getElementById('clicableBtn');
const messageInput = document.getElementById('clickMessageInput');

function addListener() {
    clickableBtn.addEventListener('click', function () {
        const value = messageInput.value;
        console.log(value || 'Clicked me!');
    });
}

addListenerBtn.addEventListener('click', addListener); 