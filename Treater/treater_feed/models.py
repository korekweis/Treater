from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    description = models.CharField(max_length=250, null=True)

class Tweet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tweet_user")
    tweet = models.CharField(max_length=250)
    date_and_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"#{self.id} {self.user.username}: {self.tweet} {self.date_and_time}"
