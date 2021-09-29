document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('treat-button').addEventListener('click', () => load_tweetTextArea());
    document.getElementById('treat-button').disabled = true;
    document.getElementById('tweet-text-area').addEventListener('keyup', () => can_tweet());
    document.getElementById('deleteConfirmModal').style.display = 'none';
    // document.getElementById('deleteTweet').addEventListener('click', () => delete_tweet());
    // document.getElementById('closeDeleteConfirm').addEventListener('click', () => delete_tweet());
    // document.getElementById('saveDeleteConfirm').addEventListener('click', () => delete_tweet());
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

// function delete_tweet() {
//     console.log("INSIDE DELETE TWEET");
//     let deleteConfirmModal = document.getElementById('deleteConfirmModal').style.display;
//     if (deleteConfirmModal == 'none') {
//         document.getElementById('deleteConfirmModal').style.display = 'block';
//     } else {
//         document.getElementById('deleteConfirmModal').style.display = 'none';
//     }
// }