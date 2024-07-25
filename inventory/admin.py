from django.contrib import admin
from .models import InventoryItem, ProductType

admin.site.register(ProductType)

admin.site.register(InventoryItem)

