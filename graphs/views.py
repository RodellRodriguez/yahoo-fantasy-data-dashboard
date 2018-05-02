from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import status 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

from django.http import JsonResponse 

from .models import Stats, Team 
from .serializers import StatsSerializer, TeamSerializer


# graphs/
def index(request):
    return render(request, 'graphs/index.html')    

# graphs/api
class StatsList(APIView):

    def get(self, request):
        stats = Stats.objects.all()
        team = Team.objects.all()
        stats_serializer = StatsSerializer(stats, many=True)
        team_serializer = TeamSerializer(team, many=True)
        response_data = {
            'stats': stats_serializer.data,
            'team': team_serializer.data
        }
        return Response(response_data)
