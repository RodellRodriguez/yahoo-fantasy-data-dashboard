# Generated by Django 2.0 on 2018-03-22 03:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('graphs', '0002_auto_20180321_0406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stats',
            name='field_goal_percentage',
            field=models.DecimalField(decimal_places=3, max_digits=4),
        ),
        migrations.AlterField(
            model_name='stats',
            name='free_throw_percentage',
            field=models.DecimalField(decimal_places=3, max_digits=4),
        ),
    ]
