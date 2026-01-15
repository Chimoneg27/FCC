from django import forms
from .models import Reservation

class ReservationForm(forms.ModelForm):
  # this is where we define the fields of the form
  class Meta:
    model = Reservation
    fields = '__all__'