from rest_framework import serializers
from .models import Patient,History,Home,HomePic,About,Help
import random

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = (
            'id',
            'name',
            'id_no',
            'date_of_birth',
            'hospital_no',
            'location',
        )
   
class HistorySerializer(serializers.ModelSerializer):
    patient  = serializers.SlugRelatedField(queryset=Patient.objects.all(),slug_field='hospital_no')
    class Meta:
        model = History
        fields = (
            'patient',
            'disease',
            'text',
            'pub_date'
        )
        read_only_fields = ('patient',)
class HistorysSerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = (
            'patient',
            'disease',
            'text',
            'pub_date'
        )
class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Home
        fields = '__all__'
class PatientDetailsSerializer(serializers.ModelSerializer):
    history = HistorysSerializer(many=True,read_only=True)
    class Meta:
        model = Patient
        fields = [
            'name',
            'hospital_no',
            'history'
        ]
class HomePicSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePic
        fields = '__all__'
class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'
class HelpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Help
        fields = '__all__'