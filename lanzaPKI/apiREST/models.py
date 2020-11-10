from django.db import models

class Cliente(models.Model):
    #id automatico con autoincremeto
    nombre = models.CharField(max_length=200, default="")
    rut = models.CharField(max_length=9, default=False)
    direccion = models.CharField(max_length=200, default="")
    email = models.EmailField()
    password = models.CharField(max_length=100, null=False)
    telefono = models.IntegerField(null=True)
    fecha_creacion = models.DateTimeField("fecha de creación", auto_now_add=True)

    class Meta:
        ordering = ('nombre', )

class Usuario(models.Model):
    nombre = models.CharField(max_length=200, default="")
    rut = models.CharField(max_length=9, default=False)
    email = models.EmailField()
    password = models.CharField(max_length=100, null=False)
    fecha_creacion = models.DateTimeField("fecha de creación", auto_now_add=True)

    class Meta:
        ordering = ('nombre', )

class Lanza(models.Model):
    codigo = models.CharField(max_length=100, unique=True, null=False)
    numero_serie = models.CharField("numero de serie", max_length=100, unique=True, null=False)
    modelo = models.CharField(max_length=20, default="")
    cliente = models.ForeignKey('Cliente', on_delete=models.DO_NOTHING)
    pila = models.CharField(max_length=100, null=False)
    predio = models.CharField(max_length=100, null=False)

    class Meta:
        ordering = ('cliente', )



class Medicion(models.Model):
    fecha_creacion = models.DateTimeField("fecha de creacion", auto_now_add=True)
    temperatura = models.IntegerField(default=0)
    humedad = models.IntegerField(null=True)
    lanza = models.ForeignKey('Lanza', on_delete=models.DO_NOTHING)

    class Meta:
        ordering = ('lanza', )




