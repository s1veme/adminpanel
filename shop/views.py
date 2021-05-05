from icecream import ic

from django.shortcuts import render

from rest_framework.response import Response
from rest_framework import status

from rest_framework.views import APIView

from rest_framework import generics
from rest_framework import permissions
from rest_framework.authentication import BasicAuthentication, SessionAuthentication, TokenAuthentication

from .serializers import ProductsListSerializer, ProductCreateSerializer

from .models import Product


class ProductView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductCreateSerializer
    permission_classes = (permissions.IsAuthenticated,)
    
    def create(self, request, *args, **kwargs):
        request.data.update({
            'user': request.user.id
        })
        
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid(raise_exception=True):
            serializer.create(serializer.validated_data)
            return Response({'success': True}, status=status.HTTP_201_CREATED)
        
        return Response(request.data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ProductsListView(generics.ListAPIView):
    serializer_class = ProductsListSerializer
    permission_classes = (permissions.AllowAny,)
    
    def get_queryset(self):
        return Product.objects.filter(user=self.request.user)