from datetime import datetime

from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from ..models import Task

from ..serializers.task import TaskSerializer


class ToDosAPIView(APIView):
    permission_classes = [IsAuthenticated]
    
    def update_expired_tasks(self, *args, **kwargs):
        now_dt = datetime.now()
        expired_tasks = Task.objects.filter(
            user=self.request.user,
            deadline_at__lte=now_dt,
            status=Task.StatusChoices.IN_PROGRESS
            
        )
        expired_tasks.update(status=Task.StatusChoices.EXPIRED)
        
    def get(self, *args, **kwargs):
        self.update_expired_tasks()
        
        tasks = Task.objects.filter(user=self.request.user)
        grouped = {
            'IN_PROGRESS': [],
            'DONE': [],
            'EXPIRED': []
        }
        for task in tasks:
            grouped[task.status].append(task)
        
        grouped['IN_PROGRESS'].sort(key=lambda x: x.created_at)
        grouped['DONE'].sort(key=lambda x: x.completed_at, reverse=True)
        grouped['EXPIRED'].sort(key=lambda x: x.created_at)

        data = {
            status: TaskSerializer(tasks, many=True).data
            for status, tasks in grouped.items()
        }
        return Response(data)
