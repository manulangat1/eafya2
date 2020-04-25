
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'eafk.settings')

app = Celery('eafk')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()
