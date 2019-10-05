from django.shortcuts import render
from rest_framework import generics 
from rest_framework.response import Response
from django.urls import reverse

from .models import Patient,History
from .serializers import PatientSerializer,HistorySerializer
class PatientView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    name = 'patient-view'

class HistoryView(generics.ListCreateAPIView):
    queryset = History.objects.all()
    serializer_class = HistorySerializer
    name = 'history-view'
