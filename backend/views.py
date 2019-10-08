from django.shortcuts import render
from rest_framework import generics 
from rest_framework.response import Response
from django.urls import reverse

from .email import send_hospital_number
from .models import Patient,History,Home
from .serializers import PatientSerializer,HistorySerializer,HomeSerializer
class PatientView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    name = 'patient-view'

    def perform_create(self,serializer):
        import random
        Numbers  = range(12642,18394)
        RandomNumber = random.choice(Numbers)
        serializer.save(hospital_no = RandomNumber)
        send_hospital_number(name,hospital_no,email)
class HistoryView(generics.ListCreateAPIView):
    queryset = History.objects.all()
    serializer_class = HistorySerializer
    name = 'history-view'

class HomeView(generics.ListAPIView):
    queryset = Home.objects.order_by('-pub_date')
    serializer_class = HomeSerializer
    name = 'home-serializer'