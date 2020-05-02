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
def send_ho(hospital_no,phone_no):
    message_to_broadcast = "Your patient number is {0}".format(hospital_no)
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    client.messages.create(to=phone_no,from_=settings.TWILIO_NUMBER,
                            body=message_to_broadcast)
    print("sent")
    return True
from .tasks import send_hospital_no_task
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
        phone_number =  self.request.data['phone_number']
        print(phone_number)
        send_hospital_no_task(RandomNumber,phone_number)
        serializer.save(hospital_no = RandomNumber,phone_number=phone_number)
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
                        print("phone no",appointment.patient.phone_number)
                        if appointment.sent_message == False:
                            client.messages.create(to=appointment.patient.phone_number,
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
    # print(request.user.hospital_no)
    # send_sms()
    send_day_before()
    return HttpResponse("messages sent!", 200)
def send_day_before():
    message_to_broadcast = ("Hey you have an appointment coming up in One day ")
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    for appointment in Appointment.objects.all():
        from datetime import datetime,timedelta,date
        today = date.today()
        print(today)
        yesterday = today + timedelta(days=1)
        if appointment.appointment_date == yesterday:
                print("phone no",appointment.patient.phone_number)
                if appointment.sent_message_day == False:
                    client.messages.create(to=appointment.patient.phone_number,
                                        from_=settings.TWILIO_NUMBER,
                                        body=message_to_broadcast)
                    t = True
                    appointment.sent_message_day = t
                    appointment.save()
                    print(appointment.sent_message)
                    print("sent")
                else:
                    print("Already sent")