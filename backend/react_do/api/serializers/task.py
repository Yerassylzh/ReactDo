from rest_framework import serializers

from ..models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'text', 'status']
        extra_kwargs = {'user': {'read_only': True}} 
