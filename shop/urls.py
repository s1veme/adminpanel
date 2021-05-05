from django.urls import path

from .views import ProductView, ProductsListView

urlpatterns = [
    path('create/product', ProductView.as_view()),
    path('products/', ProductsListView.as_view())
]