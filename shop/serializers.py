from rest_framework import serializers
from .models import Product

from authentication.models import User

import json

from icecream import ic
        
        
class UserEmailDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email')
        
class ProductCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'description', 'user')
        
class ProductsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    
    