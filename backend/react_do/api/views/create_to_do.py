from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from ..models import Task

from ..serializers.task import TaskSerializer


class CreateToDoAPIView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, *args, **kwargs):
        tasks = Task.objects.filter(user=self.request.user)
        serializer = TaskSerializer(tasks, many=True)
        return Response(data=serializer.data)
