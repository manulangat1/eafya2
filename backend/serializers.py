from rest_framework import serializers
from .models import Patient,History,Home
import random

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = (
            'name',
            'id_no',
            'date_of_birth',
            'hospital_no',
            'location',
        )
   
class HistorySerializer(serializers.ModelSerializer):
    patient  = serializers.SlugRelatedField(queryset=Patient.objects.all(),slug_field='name')
    class Meta:
        model = History
        fields = (
            'patient',
            'text',
            'pub_date'
        )
class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Home
        fields = '__all__'