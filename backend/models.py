from django.db import models
# Create your models here.
class Patient(models.Model):
    name = models.CharField(max_length=140,unique=True)
    email = models.EmailField(null=True,unique=True)
    date_of_birth = models.DateField()
    id_no = models.PositiveIntegerField(unique=True)
    hospital_no = models.IntegerField(null=True,unique=True)
    location = models.CharField(max_length=140)
    
    def __str__(self):
        return '{} {}'.format(self.name,self.date_of_birth)
    @property
    def history(self):
        return self.history_set.all()

class History(models.Model):
    patient = models.ForeignKey(Patient,on_delete=models.CASCADE,null=True,blank=True)
    text = models.TextField()
    disease = models.TextField(null=True,blank=True)
    pub_date = models.DateTimeField(auto_now_add=True,null=True,blank=True)

    def __str__(self):
        return self.text
class Home(models.Model):
    name = models.CharField(max_length=140)
    text = models.TextField()
    pic = models.ImageField(upload_to='articles/',null=True)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
class HomePic(models.Model):
    pic = models.ImageField(upload_to="articles/")
    pub_date = models.DateTimeField(auto_now_add=True)
class About(models.Model):
    name = models.CharField(max_length=100)
    text = models.TextField()

    def __str__(self):
        return self.name
class Help(models.Model):
    name = models.CharField(max_length=100)
    text = models.TextField()

    def __str__(self):
        return self.name