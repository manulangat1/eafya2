# Generated by Django 2.2.5 on 2019-10-30 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0010_auto_20191017_0858'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='id_no',
            field=models.PositiveIntegerField(unique=True),
        ),
    ]
