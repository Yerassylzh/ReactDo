from datetime import datetime
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
        todo = self.request.data["todo"]
        deadline_at = self.request.data["deadline_at"]
        dt = datetime.strptime(deadline_at, '%Y-%m-%dT%H:%M')

        Task.objects.create(user=self.request.user, text=todo, deadline_at=dt)
        return Response({})
