document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('createAccountModal').style.display = 'none';
    document.getElementById('signUpModalBtn').addEventListener('click', () => load_registerModal());
    document.getElementById('closeCreateAccountModal').addEventListener('click', () => load_registerModal());

    document.getElementById('logInModal').style.display = 'none';
    document.getElementById('logInModalBtn').addEventListener('click', () => load_logInModal());
    document.getElementById('closeLogInModal').addEventListener('click', () => load_logInModal());
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