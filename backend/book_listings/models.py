from django.db import models
from slugify import slugify

# Create your models here.
class Book_Listing(models.Model):
    class Book_Type(models.TextChoices):
        FICTION = "FICTION"
        LITERATURE = "LITERATURE"
        HISTORY = "HISTORY"
        PHYSICS = "PHHYSICS"
        MATH = "MATH"
        COMPUTER_SCIENCE = "COMPUTER_SCIENCE"
    title = models.CharField(max_length=255,unique=True)
    summary = models.TextField()
    category = models.CharField(max_length=50,choices=Book_Type.choices,default=Book_Type.COMPUTER_SCIENCE)
    image = models.ImageField(blank=True)
    slug = models.SlugField(max_length=255)


    def __str__(self):
        return self.title
    