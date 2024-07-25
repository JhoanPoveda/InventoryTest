from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductTypeSerializer, InventoryItemSerializer
from .models import ProductType, InventoryItem

class ProductTypeView(viewsets.ModelViewSet):
    serializer_class = ProductTypeSerializer
    queryset = ProductType.objects.all()

class InventoryItemView(viewsets.ModelViewSet):
    serializer_class = InventoryItemSerializer
    queryset = InventoryItem.objects.all()
    
