from .models import Appointment

from django.http import HttpResponse
from twilio.rest import Client
from django.conf import settings
from datetime import datetime,timedelta,date
from .email import send_hospital_number
from celery.utils.log import get_task_logger


logger = get_task_logger(__name__)
from celery.task.schedules import crontab
from celery.decorators import periodic_task
from .views import send_sms
# from celery.decorators import task

@periodic_task(run_every=(crontab(minute='*/1')), name="send_appointment_remainders", ignore_result=True)
def some_task():
    send_sms()
    logger.info("sent sms")
 