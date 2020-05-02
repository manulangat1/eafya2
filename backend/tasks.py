from .models import Appointment

from django.http import HttpResponse
from twilio.rest import Client
from django.conf import settings
from datetime import datetime,timedelta,date
from .email import send_hospital_number
from celery.utils.log import get_task_logger


logger = get_task_logger(__name__)
from celery.task.schedules import crontab
from celery.decorators import periodic_task,task
# from celery.decorators import task

@periodic_task(run_every=(crontab(minute='*/1')), name="send_appointment_remainders", ignore_result=True)
def some_task():
    from .views import send_sms
    send_sms()
    logger.info("sent sms")
@task(name="send_hospital_no")
def  send_hospital_no_task(hospital_no,phone_number):
    from .views import send_ho
    logger.info("sent hospital_no")
    return send_ho(hospital_no,phone_number)
@periodic_task(run_every=(crontab(minute='*/1')),name="send_sms_day_before",ignore_result=True)
def send_sms_before_task():
    from .views import send_day_before
    send_day_before()
    logger.info("sent_sms_day_before")
