# Generated by Django 3.0.3 on 2021-08-01 00:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('treater_feed', '0002_tweet'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tweet_List',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tweet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tweetList_tweet', to='treater_feed.Tweet')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tweetList_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
