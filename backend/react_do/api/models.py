from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    class StatusChoices(models.TextChoices):
        DONE = 'DONE',
        IN_PROGRESS = 'IN_PROGRESS'
        EXPIRED = 'EXPIRED'

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    status = models.CharField(
        max_length=20,
        choices=StatusChoices,
        default=StatusChoices.IN_PROGRESS
    )
    deadline_at = models.DateTimeField()
    completed_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
