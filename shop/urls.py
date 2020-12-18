from shop.models import Category
from django.contrib import admin
from django.urls import path

from .views import CategoryListView, product_detail, product_list, CategoryDetailView, SearchResultsListView

app_name = 'shop'

urlpatterns = [
    path('', CategoryListView.as_view(), name='category_list'),
   
    path('category/<str:slug>/', CategoryDetailView.as_view(), name='category_detail'),
    path('<int:id>/<str:slug>/', product_detail, name='product_detail'),
     path('search/', SearchResultsListView.as_view(), name='search_results'),
]
