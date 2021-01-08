from .models import Cliente, Lanza, Medicion, Usuario
from rest_framework import viewsets, permissions, filters
from apiREST.serializers import ClienteSelializer, UsuarioSerializer, LanzaSerializer
import django_filters.rest_framework

class ClienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows clientes to be viewed or edited.
    """
    filterset_fields = ('nombre', 'rut', 'email',)
    search_fields = ('nombre', 'rut', 'email',)
    ordering_fields = ('nombre', 'rut',)
    queryset = Cliente.objects.all()
    serializer_class = ClienteSelializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]

class UsuarioViewSet(viewsets.ModelViewSet):
    filterset_fields = ('nombre', 'rut', 'email',)
    search_fields = ('nombre', 'rut', 'email',)
    ordering_fields = ('nombre', 'rut',)
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [permissions.IsAuthenticated]

class LanzaViewSet(viewsets.ModelViewSet):
    queryset = Lanza.objects.all()
    serializer_class = LanzaSerializer
    permission_classes = [permissions.IsAuthenticated]