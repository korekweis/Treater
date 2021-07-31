from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("register", views.register, name="register"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("home", views.home, name="home"),
    path("add_tweet", views.add_tweet, name="add_tweet"),
    path("view_profile", views.view_profile, name="view_profile")
]