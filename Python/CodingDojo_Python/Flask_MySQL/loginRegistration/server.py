from flask import Flask, render_template, redirect, flash, session, url_for
from mysqlconnection import MySQLConnector
import re

app = Flask(__name__)
app.secret_key = "dancingDoctor"
mysql = MySQLConnector(app, 'logregdb')

@app.route('/')
def index():
    return render_template('index.html')

print "abcd"

@app.route('/process', methods=['POST'])
def create():
    query = INSERT INTO (first_name, last_name, email, password, created_at, updated_at)
    VALUES (:firstname, :lastname, :email, :password,  NOW(), NOW())
    return redirect('/')

app.run(debug=True)
