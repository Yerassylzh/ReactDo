from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    class StatusChoices(models.TextChoices):
        TODO = 'TODO'
        DONE = 'DONE',
        IN_PROGRESS = 'IN_PROGRESS'

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    status = models.CharField(
        max_length=20,
        choices=StatusChoices,
        default=StatusChoices.TODO
    )


