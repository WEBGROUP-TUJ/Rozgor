# Generated by Django 3.1.5 on 2021-01-05 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='tel_number',
            field=models.CharField(max_length=13, null=True, verbose_name='Номер телефона'),
        ),
    ]
