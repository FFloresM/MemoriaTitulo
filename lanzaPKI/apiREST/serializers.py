from .models import Cliente, Lanza, Medicion
from rest_framework import serializers

class ClienteSelializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cliente
        fields = ['nombre', 'rut', 'direccion', 'telefono', 'email', 'password']

class LanzaSerializar(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lanza
        fields = ['codigo', 'numero_serie', 'modelo', 'cliente']

class MedicionSerializar(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Medicion
        fields = ['temperatura', 'humedad', 'lanza']