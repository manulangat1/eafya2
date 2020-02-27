from django.shortcuts import render
from rest_framework import generics,permissions
from rest_framework.response import Response
from django.urls import reverse
from rest_framework import filters

from .email import send_hospital_number
from .models import Patient,History,Home,HomePic,About,Help
from .serializers import HistorysSerializer,HelpSerializer,AboutSerializer,HomePicSerializer,PatientSerializer,HistorySerializer,HomeSerializer,PatientDetailsSerializer
class PatientView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PatientSerializer
    name = 'patient-view'

    search_fields = ['hospital_no']
    filter_backends = (filters.SearchFilter,)

    def perform_create(self,serializer):
        import random
        Numbers  = range(12642,18394)
        RandomNumber = random.choice(Numbers)
        serializer.save(hospital_no = RandomNumber)
        # send_hospital_number(RandomNumber,email)
class HistoryView(generics.ListCreateAPIView):
    queryset = History.objects.all()
    serializer_class = HistorySerializer
    name = 'history-view'

    search_fields = ['hospital_no']
    filter_backends = (filters.SearchFilter,)
    permission_classes = [
        permissions.IsAuthenticated
    ]
class HomeView(generics.ListAPIView):
    queryset = Home.objects.order_by('pub_date')
    serializer_class = HomeSerializer
    name = 'home-serializer'
    permission_classes = [
        permissions.IsAuthenticated
    ]
class PatientDetailsView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientDetailsSerializer
    name = 'detail-view'

    search_fields = ['hospital_no']
    filter_backends = (filters.SearchFilter,)
    permission_classes = [
        permissions.IsAuthenticated
    ]

class HomePicView(generics.ListAPIView):
    queryset = HomePic.objects.all()
    serializer_class = HomePicSerializer
    name = "home-picture"
class AboutView(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
    # name = "home-picture"
class HelpView(generics.ListAPIView):
    queryset = Help.objects.all()
    serializer_class = HelpSerializer
    name = "home-picture"
class HistorysView(generics.ListAPIView):
    queryset = History.objects.all()
    serializer_class = HistorysSerializer
    # name = "home-picture"
