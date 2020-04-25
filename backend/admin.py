from django.contrib import admin
from .models import Patient,History,Home,HomePic,Help,About,Appointment
# Register your models here.
admin.site.register(Patient)
admin.site.register(History)
admin.site.register(Home)
admin.site.register(HomePic)
admin.site.register(About)
admin.site.register(Help)
admin.site.register(Appointment)