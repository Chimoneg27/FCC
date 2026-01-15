from django.urls import path
from . import views

# Define URL patterns/routes for the app
urlpatterns = [
  path('function', views.hello_world),
  path('class', views.HelloEthiopia.as_view()),
]