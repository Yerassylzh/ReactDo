from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views
from .views.token_obtain_pair import MyTokenObtainPairView
from .views.todos import ToDosAPIView
from .views.signup import SignUpAPIView 
from .views.create_to_do import CreateToDoAPIView
from .views.complete_task import CompleteTaskAPIView


urlpatterns = [
    path('todos/', ToDosAPIView.as_view(), name='todos'),
    path('signup/', SignUpAPIView.as_view(), name='signup'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("create/", CreateToDoAPIView.as_view(), name="create"),
    path("complete_task/", CompleteTaskAPIView.as_view(), name="complete_task"),
]
