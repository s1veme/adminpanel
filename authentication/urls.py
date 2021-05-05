from django.urls import path, include

from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from .views import CustomTokenObtainPairSerializer

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token'),
    path('token/ref', TokenRefreshView.as_view()),
]
