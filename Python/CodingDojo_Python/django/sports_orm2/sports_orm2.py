from django.shortcuts import render, redirect
from django.db.models import F, Count
from .models import League, Team, Player

from . import team_maker

def index(request):
	#
	#
	context = {
		"atlantic_teams": Team.objects.filter(league=League.objects.filter(name="Atlantic Soccer Conference")),
		"boston_penguins": Team.objects.get(location="Boston", team_name="Penguins"),
		"icbc": League.objects.get(name="International Collegiate Baseball Conference"),
		"acaf": League.objects.get(name="American Conference of Amateur Football"),
		"football": League.objects.filter(sport="Football"),
		"team_sophia": Team.objects.filter(curr_players__first_name="Sophia"),
		"flores": Player.objects.filter(last_name="Flores").exclude(curr_team__location="Washington", curr_team__team_name="Roughriders"),
		"s_evans": Team.objects.filter(all_players__first_name="Samuel", all_players__last_name="Evans"),
		"tigercats": Team.objects.get(location="Manitoba", team_name="Tiger-Cats"),
		"vikings": Team.objects.get(location="Wichita", team_name="Vikings").all_players.all().exclude(curr_team=Team.objects.get(location="Wichita", team_name="Vikings")),
		"jacobgray": Team.objects.filter(all_players__first_name="Jacob", all_players__last_name="Gray").exclude(curr_players__first_name="Jacob", curr_players__last_name="Gray"),
		"joshua_team": Team.objects.filter(league__name="Atlantic Federation of Amateur Baseball Players"),
		"big_teams": Team.objects.annotate(num_players=Count('all_players')).filter(num_players__gte=12),
		"num_teams": Player.objects.annotate(num_teams=Count('all_teams')).order_by("-num_teams"),
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
