from .models import Cliente, Lanza, Medicion, Usuario
from rest_framework import viewsets
from rest_framework import permissions
from apiREST.serializers import ClienteSelializer, UsuarioSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows clientes to be viewed or edited.
    """
    queryset = Cliente.objects.all()
    serializer_class = ClienteSelializer
    permission_classes = [permissions.IsAuthenticated]

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [permissions.IsAuthenticated]