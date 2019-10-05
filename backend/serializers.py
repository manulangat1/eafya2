from rest_framework import serializers
from .models import Patient,History
import random

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = (
            'name',
            'id_no',
            'date_of_birth',
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