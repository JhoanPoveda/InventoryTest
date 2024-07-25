from rest_framework import serializers
from .models import ProductType, InventoryItem

class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductType
        fields = '__all__'

class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta: 
        model = InventoryItem
        fields = '__all__'