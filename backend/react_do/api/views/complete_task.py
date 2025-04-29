from datetime import datetime
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from ..models import Task

from ..serializers.task import TaskSerializer


class CompleteTaskAPIView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, *args, **kwargs):
        pk = self.request.data["id"]
        task = Task.objects.get(pk=pk)
        task.status = Task.StatusChoices.DONE
        task.completed_at = datetime.now()
        task.save()

        return Response({})
