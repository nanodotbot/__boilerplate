const submitButton = document.getElementById('send');
const feedback = document.getElementById('feedback');

// const mailValue = document.getElementById('email');
const message = document.getElementById('message');


submitButton.onclick = (e) => {
    e.preventDefault();
    const messageText = message.value;
    if(!messageText) {
        feedback.innerText = 'please enter some message';
        return;
    }
    feedback.innerText = messageText;
}