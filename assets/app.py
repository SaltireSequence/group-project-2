import flask
from flask import Flask, jsonify, Response
import pymongo
from pymongo import MongoClient
import json
from bson import json_util

cluster = pymongo.MongoClient("mongodb+srv://group2:group2@cluster0.mpjcg.mongodb.net/<dbname>?retryWrites=true&w=majority")
db = cluster["simply_recipe"]
col = db["recipes_collection"]
app = Flask(__name__)

# This route returns all the recipe_collection data in JSON.
@app.route("/recipes", methods=["GET"])
def get_recipes():
    all_recipes = list(col.find({}))
    return json.dumps(all_recipes, default=json_util.default)

if __name__ == "__main__":
    app.run()
