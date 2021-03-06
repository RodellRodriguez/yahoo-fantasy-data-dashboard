# Generated by Django 2.0 on 2018-03-21 03:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stats',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('field_goal_percentage', models.DecimalField(decimal_places=1, max_digits=3)),
                ('free_throw_percentage', models.DecimalField(decimal_places=1, max_digits=3)),
                ('three_points_made', models.IntegerField()),
                ('points', models.IntegerField()),
                ('rebounds', models.IntegerField()),
                ('assists', models.IntegerField()),
                ('steals', models.IntegerField()),
                ('blocks', models.IntegerField()),
                ('turnovers', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('name', models.CharField(max_length=50)),
                ('team_id', models.IntegerField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Week',
            fields=[
                ('week_number', models.IntegerField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.AddField(
            model_name='stats',
            name='team_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='graphs.Team'),
        ),
        migrations.AddField(
            model_name='stats',
            name='week_number',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='graphs.Week'),
        ),
    ]
