from app import db



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(64),index = True, unique = True)
    teamName = db.Column(db.String(64),index = True, unique = True)
    email = db.Column(db.String(64),index = True, unique = True)
    password = db.Column(db.String(1024)))