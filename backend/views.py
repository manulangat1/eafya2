from django.shortcuts import render
from rest_framework import generics,permissions
from rest_framework.response import Response
from django.urls import reverse
from rest_framework import filters
from django.http import HttpResponse
from twilio.rest import Client
from django.conf import settings
from datetime import datetime,timedelta,date
from .email import send_hospital_number
from .models import Patient,History,Home,HomePic,About,Help,Appointment
from .serializers import AppointmentSerializer,HistorysSerializer,HelpSerializer,AboutSerializer,HomePicSerializer,PatientSerializer,HistorySerializer,HomeSerializer,PatientDetailsSerializer
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
class AppointmentView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
def send_sms():
    message_to_broadcast = ("Hey you have an appointment coming up in 30 mins ")
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    for appointment in Appointment.objects.all():
        if appointment.appointment_date == datetime.date(datetime.now()):
                if datetime.combine(appointment.appointment_date, appointment.appointment_time) > datetime.combine(date.today(),datetime.now().time()):
                    print(appointment.appointment_date,appointment.appointment_time)
                    z = datetime.combine(appointment.appointment_date, appointment.appointment_time) - datetime.combine(date.today(),datetime.now().time())
                    x = z.total_seconds()/ 60
                    # print(datetime.date(datetime.now()))
                    print(x)
                    if x < 30:
                        if appointment.sent_message == False:
                            client.messages.create(to="+254740415950",
                                                from_=settings.TWILIO_NUMBER,
                                                body=message_to_broadcast)
                            t = True
                            appointment.sent_message = t
                            appointment.save()
                            print(appointment.sent_message)
                            print("sent")
                        else:
                            print("Already sent")
                    else:
                        print("not yet")
                else:
                    print("time passed")
def broadcast_sms(request):
    print(request.user)
    send_sms()
    return HttpResponse("messages sent!", 200)