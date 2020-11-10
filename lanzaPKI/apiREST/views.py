from .models import Cliente, Lanza, Medicion
from rest_framework import viewsets
from rest_framework import permissions
from apiREST.serializers import ClienteSelializer, LanzaSerializar, MedicionSerializar

class ClienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows clientes to be viewed or edited.
    """
    queryset = Cliente.objects.all()
    serializer_class = ClienteSelializer
    permission_classes = [permissions.IsAuthenticated]

class LanzaViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite ver o editar lanzas
    """
    queryset = Lanza.objects.all()
    serializer_class = LanzaSerializar
    permission_classes = [permissions.IsAuthenticated]

class MedicionViewSet(viewsets.ModelViewSet):
    """
    endpoint de la API para ver o editar Mediciones
    """
    queryset = Medicion.objects.all()
    serializer_class = LanzaSerializar
    permission_classes = [permissions.IsAuthenticated]