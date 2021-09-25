document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('editProfileModal').style.display = 'none';
    document.getElementById('editProfileBtn').addEventListener('click', () => edit_profile());
    document.getElementById('closeEditProfileBtn').addEventListener('click', () => edit_profile());
    document.getElementById('saveEditProfileBtn-hidden').addEventListener('click', () => refreshPage());
    document.getElementById('deleteConfirmModal').style.display = 'none';
    document.getElementById('deleteTweet').addEventListener('click', () => delete_tweet());
    document.getElementById('closeDeleteConfirm').addEventListener('click', () => delete_tweet());
    document.getElementById('saveDeleteConfirm').addEventListener('click', () => delete_tweet());
});

function edit_profile() {
    console.log("button heard");
    let editProfileModal = document.getElementById('editProfileModal').style.display;
    if (editProfileModal == 'none') {
        document.getElementById('editProfileModal').style.display = 'block';
    } else {
        document.getElementById('editProfileModal').style.display = 'none';
    }
}

function refreshPage() {
    location.reload();
}

function delete_tweet() {
    console.log("INSIDE DELETE TWEET");
    let deleteConfirmModal = document.getElementById('deleteConfirmModal').style.display;
    if (deleteConfirmModal == 'none') {
        document.getElementById('deleteConfirmModal').style.display = 'block';
    } else {
        document.getElementById('deleteConfirmModal').style.display = 'none';
    }
}