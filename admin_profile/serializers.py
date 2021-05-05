from authentication.models import User

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email',
            'is_staff'
        )

    @property
    def user(self):
        request = self.context.get('request')
        return request.user if request else None
