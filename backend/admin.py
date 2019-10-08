from django.contrib import admin
from .models import Patient,History,Home
# Register your models here.
admin.site.register(Patient)
admin.site.register(History)
admin.site.register(Home)