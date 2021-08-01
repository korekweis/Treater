from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.db import IntegrityError
from django.urls import reverse

from .models import *

# Create your views here.
def index(request):
    return render(request, "treater_feed/index.html")

def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        #ensure that both passwords match 
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        # if password != confirmation:
        #     print("not the same") 
        user = User.objects.create_user(username, email, password)
        user.save()
        # todo: check if the same username and update modal
        # except IntegrityError:
        #     return render(request, "auctions/register.html", {
        #         "message": "Username already taken."
        #     }
        login(request, user)
        return render(request, "treater_feed/feed.html" , {
                "tweets": Tweet.objects.all().order_by('-id')
            })
    else: 
        return render(request, "treater_feed/index.html")

def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return render(request, "treater_feed/feed.html", {
                "tweets": Tweet.objects.all().order_by('-id')
            })
        else: 
            return HttpResponseRedirect(reverse("index"))
    else: 
        return render(request, "treater_feed/index.html")

def logout_view(request): 
    logout(request)
    return HttpResponseRedirect(reverse("index"))

@login_required
def home(request):   
    user = User.objects.get(username=request.user)
    return render(request, "treater_feed/feed.html", {
        "tweets": Tweet.objects.all().order_by('-id')
    })

@login_required
def add_tweet(request):
    if request.method == 'POST':
        user = User.objects.get(username=request.user)
        #if no input try to disable tweet button
        tweet_input = request.POST["tweet"]
        tweet = Tweet.objects.create(user=user, tweet=tweet_input)
        tweet.save()
        return HttpResponseRedirect(reverse("home"))
 
@login_required
def view_own_profile(request):
    user = User.objects.get(username=request.user)
    print(user)
    return render(request, "treater_feed/profile.html", {
        "tweets": user.tweet_user.all()
    })

@login_required
def view_user_profile(request, user_id):
    user = User.objects.get(pk=user_id)
    return render(request, "treater_feed/feed.html", {
        "user": user,
        "tweets": user.tweet_user.all()
    })
