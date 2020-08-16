from flask import Flask
from flask_pymongo import pymongo
from app import app

CONNECTION_STRING = "mongodb+srv://group2:group2@cluster0.mpjcg.mongodb.net/test?authSource=admin&replicaSet=atlas-wejcgf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('simply_recipe')
user_collection = pymongo.collection.Collection(db, 'recipes_collection')
