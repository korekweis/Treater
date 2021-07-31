document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signUpModalBtn').addEventListener('click', () => load_registerModal());
    document.getElementById('closeCreateAccountModal').addEventListener('click', () => load_registerModal());

    document.getElementById('logInModal').style.display = 'none';
    document.getElementById('logInModalBtn').addEventListener('click', () => load_logInModal());
    document.getElementById('closeLogInModal').addEventListener('click', () => load_logInModal());

    document.getElementById('treat-button').addEventListener('click', () => load_tweetTextArea());
    document.getElementById('tweet-text-area').addEventListener('keyup', (e) => can_tweet());
});

function load_registerModal() {
    let signUpModal = document.getElementById('createAccountModal').style.display;
    if (signUpModal == 'none') {
        document.getElementById('createAccountModal').style.display = 'block';
    } else {
        document.getElementById('createAccountModal').style.display = 'none';
    }
}

function load_logInModal() {
    let logInModal = document.getElementById('logInModal').style.display;
    if (logInModal == 'none') {
        document.getElementById('logInModal').style.display = 'block';
    } else {
        document.getElementById('logInModal').style.display = 'none';
    }
}

function load_tweetTextArea() {
    console.log("inside load_tweet");
    document.getElementById('tweet-text-area').style.borderBottom = "1px solid #dedede";
}

function can_tweet(e) {
    console.log("inside");
    let text_area = e.currentTarget.value;
    if (text_area === "") {
        document.getElementById('treat-button').disabled = true;
    } else {
        document.getElementById('treat-button').disabled = false;
    }
}