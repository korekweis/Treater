# Treater
#### An application that is something like Twitter that it for restaurants. Used Django for frontend, and SQLite for the database.

## Installing Django
`python -m pip install Django`

## Starting the project
`django-admin startproject Treater`

`python manage.py startapp treater_feed`

## Migrating Models
`python manage.py makemigrations`

`python manage.py migrate`

## Running the application on Machine
`python manage.py runserver`

## Running on Browser 
`http://127.0.0.1:8000/Treater/home`

# Treater Features
### Treater's Homepage
- The user has the option to Register 
- The user has the option to Login to his/her account

![Home Page](/Treater/Images/Home.png "Homepage")

### Register
- User will provied his/her username which is unique, email address, and password 

![Register](/Treater/Images/Register.png "Register")

### Login 
- User will provide his/her registered username and password 

![Login](/Treater/Images/Login.png "Login")

### Posting a Tweet
- Once registered, the user is able to see all the user's 'treats' on their homepage 
- Users will also be able to see their own tweets and have the option to delete them by clicking on the 'x' button
- Users can view other users' profiles by clicking on their username 

![PostTweet](/Treater/Images/PostTweet.png "PostTweet")

### View Profile 
- The user is able to view his/her own profile displaying his/her own tweets only. 
- He/she is able to delete his/her own 'treats' by clicking the 'x' button. 
- The user is also able to edit his/her 'About Me' by clicking on the <i> Edit Profile </i> button

![Profile](/Treater/Images/Profile.png "Profile")

### Edit Profile
- The user can change his/her 'About Me'.

![EditProfile](/Treater/Images/EditProfile.png "EditProfile")
