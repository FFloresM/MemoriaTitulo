from django.db import models

class Cliente(models.Model):
    """ Empresa o agricultor que compra la lanza"""
    #id automatico con autoincremento
    nombre = models.CharField(max_length=200, default="")
    rut = models.CharField(max_length=9, default=False)
    direccion = models.CharField(max_length=200, default="")
    email = models.EmailField()
    telefono = models.IntegerField(null=True)
    fecha_creacion = models.DateTimeField("fecha de creación", auto_now_add=True)

    class Meta:
        ordering = ('nombre', )

class Usuario(models.Model):
    """ Cuenta para ingresar a la página web """
    nombre = models.CharField(max_length=200, default="")
    rut = models.CharField(max_length=9, default=False)
    email = models.EmailField()
    password = models.CharField(max_length=100, null=False)
    fecha_creacion = models.DateTimeField("fecha de creación", auto_now_add=True)

    class Meta:
        ordering = ('nombre', )

class Administrador(Usuario):
    """Cuenta de administrador del sitio"""
    cargo = models.CharField(max_length=200, default="", null=True)

class Lanza(models.Model):
    """Instrumento de medición"""
    codigo = models.CharField(max_length=100, unique=True, null=False)
    numero_serie = models.CharField("numero de serie", max_length=100, unique=True, null=False)
    modelo = models.CharField(max_length=20, default="")
    cliente = models.ForeignKey('Cliente', on_delete=models.DO_NOTHING)

    class Meta:
        ordering = ('cliente', )


class Medicion(models.Model):
    """Datos que son medidos por la lanza"""
    fecha_creacion = models.DateTimeField("fecha de creacion", auto_now_add=True)
    temperatura = models.IntegerField(default=0)
    humedad = models.IntegerField(null=True)
    pila = models.CharField(max_length=100, null=False)
    predio = models.CharField(max_length=100, null=False)
    foto = models.ImageField(upload_to='Fotos') #crear folder Fotos
    lanza = models.ForeignKey('Lanza', on_delete=models.DO_NOTHING)

    class Meta:
        ordering = ('lanza', )

class MateriaPrima(models.Model):
    """Materias primas utilizadas en el compost"""
    nombre = models.CharField(max_length=100, null=False)
    cantidad = models.IntegerField(null=False)
    unidad_medida = models.CharField
    medicion = models.ForeignKey('Medicion', on_delete=models.DO_NOTHING)




