# Generated by Django 4.2.5 on 2023-09-29 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0003_luxe_persons_luxeplus_persons_luxepremium_persons_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookingdate',
            name='first_name',
            field=models.CharField(blank=True, max_length=512, null=True),
        ),
        migrations.AddField(
            model_name='bookingdate',
            name='last_name',
            field=models.CharField(blank=True, max_length=512, null=True),
        ),
        migrations.AddField(
            model_name='bookingdate',
            name='phone_number',
            field=models.CharField(blank=True, max_length=32, null=True),
        ),
        migrations.AddField(
            model_name='bookingdate',
            name='status',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='bookingdate',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='bookingdate',
            name='start_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
