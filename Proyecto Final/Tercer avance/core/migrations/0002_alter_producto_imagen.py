# Generated by Django 5.0.1 on 2024-04-11 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(default='/ImagenDefault.jpg', upload_to='Productos/', verbose_name='Imagen:'),
        ),
    ]
