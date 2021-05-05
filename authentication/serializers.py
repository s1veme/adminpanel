from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from icecream import ic


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        ic(user)
        token = super().get_token(user)
        token['is_staff'] = user.is_staff
        ic(token)
        return token
