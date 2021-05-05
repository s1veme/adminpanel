from rest_framework import mixins

from rest_framework.decorators import action

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework.viewsets import GenericViewSet

from authentication.models import User

from .serializers import UserSerializer

from .permissions import IsAuthenticatedAndUserOrReadOnly

from icecream import ic


class UserViewSet(mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.ListModelMixin,
                  GenericViewSet):

    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedAndUserOrReadOnly, ]
    queryset = User.objects.all()
    lookup_field = 'username'

    @action(detail=False, permission_classes=[IsAuthenticated], methods=['GET'])
    def profile(self, request):
        serializer = self.get_serializer(instance=request.user)
        return Response(serializer.data)
