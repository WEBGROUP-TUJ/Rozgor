from django.db.models import query
from django.db.models import Q
from django.shortcuts import render, get_object_or_404

from .models import Category, Product
from cart.forms import CartAddProductForm

from django.views.generic import (
    ListView,
    DetailView
)
'''
class ProductListView(ListView):
    template_name = 'shop/product/list.html'
    queryset = Product.objects.all()
    def get_context_data(self, **kwargs):
        context = super(ProductListView, self).get_context_data(**kwargs)
        context['category_list'] = Category.objects.all()
        return context
'''




def product_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(available=True)
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = Product.objects.filter(category=category)

    context = {
        'category': category,
        'categories': categories,
        'products': products
    }
    return render(request, 'shop/product/list.html', context)





def product_detail(request, id, slug):
    product = get_object_or_404(Product, id=id, slug=slug, available=True)
    cart_product_form = CartAddProductForm()
    context = {
        'product': product,
        'cart_product_form': cart_product_form
    }
    return render(request, 'shop/product/detail.html', context)

class CategoryListHomeView(ListView):
    model = Category
    context_object_name = 'category_list'
    template_name = 'shop/product/list.html'

class CategoryListView(ListView):
    model = Category
    context_object_name = 'category_list'
    template_name = 'shop/product/category_list.html'

class CategoryDetailView(DetailView):
    model = Category
    context_object_name = 'category'
    template_name = 'shop/product/category_detail.html'

class SearchResultsListView(ListView):
    model = Product
    context_object_name = 'product_list'
    template_name = 'shop/product/search_results.html'

    def get_queryset(self):
        query = self.request.GET.get('q')
        return Product.objects.filter(
            Q(name__icontains=query) | Q(description__icontains=query)
        )
