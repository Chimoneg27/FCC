from django.db import models

# Create your models here.
class MenuItem(models.Model):
  # this is how we define the columns of the table
  name = models.CharField(max_length=255)
  price = models.IntegerField()
  
