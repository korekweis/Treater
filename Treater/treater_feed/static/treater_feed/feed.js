document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('treat-button').addEventListener('click', () => load_tweetTextArea());
    document.getElementById('treat-button').disabled = true;
    document.getElementById('tweet-text-area').addEventListener('keyup', () => can_tweet());

    document.getElementById('editProfileModal').style.display = 'none';
    document.getElementById('editProfileBtn').addEventListener('click', () => edit_profile());
});

function load_tweetTextArea() {
    console.log("inside load_tweet");
    document.getElementById('tweet-text-area').style.borderBottom = "1px solid #dedede";
}

function can_tweet(e) {
    let text_area = document.getElementById('tweet-text-area')
    if (text_area.value === "") {
        document.getElementById('treat-button').disabled = true;
    } else {
        document.getElementById('treat-button').disabled = false;
    }
}

function edit_profile() {
    console.log("button heard");
    let editProfileModal = document.getElementById('editProfileModal').style.display;
    if (editProfileModal == 'none') {
        document.getElementById('editProfileModal').style.display = 'block';
    } else {
        document.getElementById('editProfileModal').style.display = 'none';
    }
}