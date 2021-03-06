# Generated by Django 3.1.3 on 2020-11-04 20:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(default='', max_length=200)),
                ('rut', models.CharField(default=False, max_length=9)),
                ('direccion', models.CharField(default='', max_length=200)),
                ('emai', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=100)),
                ('telefono', models.IntegerField(max_length=12, null=True)),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True, verbose_name='fecha de creación')),
            ],
            options={
                'ordering': ('nombre',),
            },
        ),
        migrations.CreateModel(
            name='Lanza',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigo', models.CharField(max_length=100, unique=True)),
                ('numero_serie', models.CharField(max_length=100, unique=True, verbose_name='numero de serie')),
                ('modelo', models.CharField(default='', max_length=20)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='apiREST.cliente')),
            ],
            options={
                'ordering': ('cliente',),
            },
        ),
        migrations.CreateModel(
            name='Medicion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True, verbose_name='fecha de creacion')),
                ('temperatura', models.IntegerField(default=0, max_length=3)),
                ('humedad', models.IntegerField(max_length=3, null=True)),
                ('lanza', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='apiREST.lanza')),
            ],
            options={
                'ordering': ('lanza',),
            },
        ),
    ]
