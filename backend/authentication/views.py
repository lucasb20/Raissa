from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from authentication.serializers import UserSerializer

# Create your views here.

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    data = JSONParser().parse(request)
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

def token_user(request):
    return Response({"Message":"Recurso ainda não implementado."},status.HTTP_404_NOT_FOUND)

def refresh_user(request):
    return Response({"Message":"Recurso ainda não implementado."},status.HTTP_404_NOT_FOUND)

def verify_user(request):
    return Response({"Message":"Recurso ainda não implementado."},status.HTTP_404_NOT_FOUND)

def blacklist_user(request):
    return Response({"Message":"Recurso ainda não implementado."},status.HTTP_404_NOT_FOUND)