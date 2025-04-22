import json

from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

from rest_framework.views import APIView
from rest_framework.response import Response


class SignUpAPIView(APIView):
    def post(self, *args, **kwargs):    
        form = UserCreationForm(self.request.data)
        if form.is_valid():
            form.save()
            return Response(data={'success': True})


        json_data = json.loads(form.errors.as_json())
        message = json_data[
            list(json_data.keys())[0]
        ][0]['message']
        return Response(data={'error': message, 'success': False})
