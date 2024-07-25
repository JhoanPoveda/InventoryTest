from django.db import models

class ProductType(models.Model):
    description = models.CharField(max_length=25)
    state = models.CharField(max_length=10, choices=[
        ('activo', 'Activo'),
        ('inactivo', 'Inactivo'),
    ])
    def __str__(self):
         return self.description

class InventoryItem(models.Model):
     user_name = models.CharField(max_length=50)
     product_type = models.ForeignKey(ProductType, on_delete=models.CASCADE)
     serial_number = models.IntegerField()
     date_registerd = models.DateField()
     is_delivered = models.BooleanField(default=False)

