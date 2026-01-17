from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .forms import ReservationForm

# Create your views here.
# Function-based view
def hello_world(request):
  return HttpResponse("Hello, World!")

# Class-based view
class HelloEthiopia(View):
  def get(self, request):
    return HttpResponse("Hello, Ethiopia!")
  
def home(request):
  form = ReservationForm()
  
  if request.method == 'POST':
    form = ReservationForm(request.POST) # request.POST contains the form data that the user submitted
    if form.is_valid():
      form.save() 
      return HttpResponse("Reservation successful!")
    
  return render(request, 'index.html', {'form': form})