from django.urls import path,include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from inventory  import views

#api versioning
router = routers.DefaultRouter()
router.register(r'productType', views.ProductTypeView, 'productType'),
router.register(r'inventory', views.InventoryItemView, 'inventory')


urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title = "Inventory API")),
]
