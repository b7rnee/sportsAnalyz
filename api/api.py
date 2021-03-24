from flask import Flask
import json
from nba_api.stats.static import players
from nba_api.stats.endpoints import playercareerstats
from nba_api.stats.endpoints import  shotchartdetail

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def index():
    return json.dumps(players.get_players())
def get_player_shortchartdetail(player_name,season_id):
    nba_players = players.get_players()
    player_dict =list(filter(lambda name:name['full_name'] == player_name, nba_players))
   
    
    career = playercareerstats.PlayerCareerStats(player_id = player_dict[0]['id'])
    career_df = career.get_data_frames()[0]

    print(team_id.astype(int),"TEAM ID")
    shotchartlist = shotchartdetail.ShotChartDetail(team_id = career_df[career_df['SEASON_ID'] ==season_id]['TEAM_ID'],
                                                    player_id = player_dict[0]['id'],
                                                    season_type_all_star="Regular Season",
                                                    season_nullable='2019-20',
                                                    context_measure_simple="FGA"
                                                   ).get_data_frames()
    return shotchartlist[0];

@app.route('/shotChartDetail/<string:full_name>',methods=['GET'])
def get_shot_detail(full_name):
    career = get_player_shortchartdetail(full_name,'2019-20')
    return career.to_json()
if __name__ == '__main__':
    app.run(debug=True)