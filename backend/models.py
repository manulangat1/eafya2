from django.db import models

# Create your models here.
class Patient(models.Model):
    name = models.CharField(max_length=140)
    date_of_birth = models.DateField()
    id_no = models.PositiveIntegerField()
    hospital_no = models.IntegerField(null=True)
    location = models.CharField(max_length=140)

    def __str__(self):
        return '{} {}'.format(self.name,self.date_of_birth)

class History(models.Model):
    patient = models.ForeignKey(Patient,on_delete=models.CASCADE,null=True,blank=True)
    text = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True,null=True,blank=True)

    def __str__(self):
        return self.text
