from django.db import models

class Product(models.Model):
    name = models.CharField('Название', max_length=255)
    user = models.ForeignKey('authentication.User', on_delete=models.PROTECT)
    description = models.TextField('Описание', max_length=1000)
    
    def __str__(self):
        return self.name
