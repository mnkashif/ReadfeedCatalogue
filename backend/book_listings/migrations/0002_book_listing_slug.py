# Generated by Django 4.0.4 on 2022-04-29 01:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_listings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book_listing',
            name='slug',
            field=models.CharField(default='django-db-models-fields-charfield', max_length=255),
        ),
    ]