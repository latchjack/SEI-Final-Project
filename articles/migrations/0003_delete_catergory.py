# Generated by Django 2.2.9 on 2020-02-27 10:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_comment_owner'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Catergory',
        ),
    ]