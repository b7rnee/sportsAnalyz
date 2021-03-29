import matplotlib.pyplot as plt
from flask import Flask, request
import json
import numpy as np
from nba_api.stats.static import players
from nba_api.stats.endpoints import playercareerstats,playervsplayer
from nba_api.stats.endpoints import shotchartdetail
from matplotlib.patches import Circle, Rectangle, Arc
import seaborn as sns
import io
import base64
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'sports_analyz';
app.config['MONGO_URI'] = 'mongodb+srv://luckygaming:Lucky417@cluster0.y0wr8.mongodb.net/sports_analyz?retryWrites=true&w=majority';

mongo = PyMongo(app)

@app.route('/login/<string:username>', methods=['GET'])
def login(username):
    # users = mongo.db.teams_collection
    if username == 'Lakers':
        return {
            "res":"success"
        }
    return {
            "res":"invalid"
        }


@app.route('/api', methods=['GET'])
def index():
    return json.dumps(players.get_active_players())


def get_player_shortchartdetail(player_name, season_id):
    nba_players = players.get_active_players()
    player_dict = list(
        filter(lambda name: name['full_name'] == player_name, nba_players))

    career = playercareerstats.PlayerCareerStats(
        player_id=player_dict[0]['id'])
    career_df = career.get_data_frames()[0]
    shotchartlist = shotchartdetail.ShotChartDetail(team_id=career_df[career_df['SEASON_ID'] == season_id]['TEAM_ID'],
                                                    player_id=player_dict[0]['id'],
                                                    season_type_all_star="Regular Season",
                                                    season_nullable=season_id,
                                                    context_measure_simple="FGA",
                                                    ).get_data_frames()
    return shotchartlist[0],career_df;
    
    


@app.route('/shotChartDetail/<string:full_name>', methods=['GET'])
def get_shot_detail(full_name):
    playerStat,career = get_player_shortchartdetail(full_name, '2019-20')
    plt.clf()
    shot_chart(playerStat , title = full_name)
    img = io.BytesIO()
    plt.rcParams['figure.figsize'] = (12,11)
    line_1 = plt.plot()
    plt.savefig(img, format='png')
    if len(line_1) > 0:
        line = line_1.pop(0)
        line.remove()
    plot_url = base64.b64encode(img.getvalue()).decode()
    img.seek(0)
    img.truncate(0)
    return {"url" : "data:image/png;base64,{}".format(plot_url),"info":career.to_json()}



def shot_chart(data,title="", color="b", cmap=None,
               xlim=(-250, 250), ylim=(422.5, -47.5),
               court_color="gray", court_lw=1, outer_lines=False,
               flip_court=False,gridsize=None, ax=None,
               despine=False ):
    if ax is None:
        ax = plt.gca()

    if cmap is None:
        cmap = sns.light_palette(color, as_cmap=True)

    if not flip_court:
        ax.set_xlim(xlim)
        ax.set_ylim(ylim)
    else:
        ax.set_xlim(xlim[::-1])
        ax.set_ylim(ylim[::-1])

    ax.tick_params(labelbottom="off", labelleft="off")
    ax.set_title(title, fontsize=18)

    draw_court(ax, color=court_color, lw=court_lw, outer_lines=outer_lines)
    
    x_missed = data[data['EVENT_TYPE'] == 'Missed Shot']['LOC_X']
    y_missed = data[data['EVENT_TYPE'] == 'Missed Shot']['LOC_Y']
    
    x_made = data[data['EVENT_TYPE'] == 'Made Shot']['LOC_X']
    y_made = data[data['EVENT_TYPE'] == 'Made Shot']['LOC_Y']
    color_map = plt.cm.Spectral_r

    # ax.hexbin(x_missed,y_missed,mincnt=1,gridsize=50,color="#5A7A7F", cmap=color_map)
    ax.scatter(x_missed,y_missed, c='#12275e', marker="x",s =60, linewidths = 2)
    ax.scatter(x_made,y_made,c='#3afc8e', marker="o",s =40, linewidths = 2)

    # 
    # ax.hexbin(x_made,y_made,mincnt=1,gridsize=50,color="#3afc8e", cmap=color_map)
    
 
    for spine in ax.spines:
        ax.spines[spine].set_lw(court_lw)
        ax.spines[spine].set_color(court_color)

    return ax

def draw_court(ax=None, color='gray', lw=1, outer_lines=False):
    if ax is None:
        ax = plt.gca()

    hoop = Circle((0, 0), radius=7.5, linewidth=lw, color=color, fill=False)

    backboard = Rectangle((-30, -12.5), 60, 0, linewidth=lw, color=color)

    outer_box = Rectangle((-80, -47.5), 160, 190, linewidth=lw, color=color,
                          fill=False)
    
    inner_box = Rectangle((-60, -47.5), 120, 190, linewidth=lw, color=color,
                          fill=False)

    top_free_throw = Arc((0, 142.5), 120, 120, theta1=0, theta2=180,
                         linewidth=lw, color=color, fill=False)

    bottom_free_throw = Arc((0, 142.5), 120, 120, theta1=180, theta2=0,
                            linewidth=lw, color=color, linestyle='dashed')
    
    restricted = Arc((0, 0), 80, 80, theta1=0, theta2=180, linewidth=lw,
                     color=color)

    corner_three_a = Rectangle((-220, -47.5), 0, 140, linewidth=lw,
                               color=color)
    
    corner_three_b = Rectangle((220, -47.5), 0, 140, linewidth=lw, color=color)
    
    three_arc = Arc((0, 0), 475, 475, theta1=22, theta2=158, linewidth=lw,
                    color=color)

    # Center Court
    center_outer_arc = Arc((0, 422.5), 120, 120, theta1=180, theta2=0,
                           linewidth=lw, color=color)
    center_inner_arc = Arc((0, 422.5), 40, 40, theta1=180, theta2=0,
                           linewidth=lw, color=color)

    court_elements = [hoop, backboard, outer_box, inner_box, top_free_throw,
                      bottom_free_throw, restricted, corner_three_a,
                      corner_three_b, three_arc, center_outer_arc,
                      center_inner_arc]

    if outer_lines:
        outer_lines = Rectangle((-250, -47.5), 500, 470, linewidth=lw,
                                color=color, fill=False)
        court_elements.append(outer_lines)

    for element in court_elements:
        ax.add_patch(element)

    return ax


if __name__ == '__main__':
    app.run(debug=True)
