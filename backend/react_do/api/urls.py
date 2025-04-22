from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views
from .views.token_obtain_pair import MyTokenObtainPairView
from .views.todos import ToDosAPIView
from .views.signup import SignUpAPIView 

urlpatterns = [
    path('todos/', ToDosAPIView.as_view(), name='todos'),
    path('signup/', SignUpAPIView.as_view(), name='signup'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
