from django.db.models import fields
from .models import Cliente, Lanza, Medicion, Usuario
from rest_framework import serializers

class ClienteSelializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cliente
        fields = (
            'nombre',
            'rut',
            'direccion',
            'telefono',
            'email',
            'fecha_creacion',
        )

class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    cliente = serializers.SlugRelatedField(
        queryset=Cliente.objects.all(),
        slug_field='nombre'
    )
    class Meta:
        model = Usuario
        fields = (
            'nombre',
            'rut',
            'email',
            'password',
            'fecha_creacion',
            'cliente',
        )