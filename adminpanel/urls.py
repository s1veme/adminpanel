from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('authentication.urls')),
    path('api/shop/', include('shop.urls')),
    path('api/user/', include('admin_profile.urls'))
]
