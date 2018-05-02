from django.db import models

# Create your models here.
class Team(models.Model):
	name = models.CharField(max_length=50)
	team_id = models.IntegerField(primary_key=True)

	def __str__(self):
		return ("Name: {} ID: {}".format(self.name,self.team_id))


class Week(models.Model):
	week_id = models.IntegerField(primary_key=True)

	def __str__(self):
		return "Week Number: {}".format(str(self.week_id))


class Stats(models.Model):
	team = models.ForeignKey(Team, on_delete=models.CASCADE)
	week = models.ForeignKey(Week, on_delete=models.CASCADE)
	
	field_goal_percentage = models.DecimalField(max_digits=4, decimal_places=3)
	free_throw_percentage = models.DecimalField(max_digits=4, decimal_places=3)
	three_points_made = models.IntegerField()
	points = models.IntegerField()
	rebounds = models.IntegerField()
	assists = models.IntegerField()
	steals = models.IntegerField()
	blocks = models.IntegerField()
	turnovers = models.IntegerField()

	def __str__(self):
		return ("{}\n {}\n".format(self.team,self.week)
			+ "FG%: {} FT%: {} 3PTM: {} PTS: {} REB: {} AST: {} ".format(
			self.field_goal_percentage,self.free_throw_percentage,
			self.three_points_made,self.points,self.rebounds,self.assists) 
			+ "STL: {} BLK: {} TO: {}".format(self.steals,self.blocks,self.turnovers))