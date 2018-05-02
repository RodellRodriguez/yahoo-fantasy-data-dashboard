from rest_framework import serializers

from .models import Stats, Team

class StatsSerializer(serializers.ModelSerializer):

	class Meta:
		model = Stats
		fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):

	class Meta:
		model = Team
		fields = '__all__'