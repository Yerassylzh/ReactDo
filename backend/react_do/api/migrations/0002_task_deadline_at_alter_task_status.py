# Generated by Django 5.2 on 2025-04-29 04:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='deadline_at',
            field=models.DateTimeField(default=None),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='task',
            name='status',
            field=models.CharField(choices=[('DONE', 'Done'), ('IN_PROGRESS', 'In Progress'), ('EXPIRED', 'Expired')], default='IN_PROGRESS', max_length=20),
        ),
    ]
