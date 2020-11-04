from rest_framework import viewsets
from .models import Member
from .serializers import MemberSerializer ,MemberSimplerSerializer
from rest_framework.response import Response


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    
    def list(self, request, *args, **kwargs):
        queryset = Member.objects.all()
        serializer = MemberSimplerSerializer(queryset, many=True)
        return Response(serializer.data)