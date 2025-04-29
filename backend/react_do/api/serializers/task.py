from rest_framework import serializers

from ..models import Task


class TaskSerializer(serializers.ModelSerializer):
    formatted_deadline = serializers.SerializerMethodField()
    formatted_completed_at = serializers.SerializerMethodField()

    class Meta:
        model = Task
        fields = ['id', 'text', 'status', 'deadline_at', 'completed_at', 'formatted_deadline', 'formatted_completed_at']
        extra_kwargs = {'user': {'read_only': True}}

    def get_formatted_deadline(self, obj):
        return obj.deadline_at.strftime('%b %d, %Y %H:%M')
    
    def get_formatted_completed_at(self, obj: Task):
        if obj.completed_at:
            return obj.completed_at.strftime('%b %d, %Y %H:%M')
        return 'No info'
