from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo

# Creating instance of Flask
app=Flask(__name__)

# // PyMongo to initialize connection
# mongo = PyMongo(app, uri="<INSERT LINK HERE>")

# Route to render index.html template using data from Mongo
@app.route("/")
def index():
    return render_template("index.html")
