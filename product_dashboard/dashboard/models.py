from django.db import models


# Create your models here.
class Product(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=30)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    totalreviews = models.IntegerField()
    Rating = models.DecimalField(decimal_places=1, max_digits=2)
