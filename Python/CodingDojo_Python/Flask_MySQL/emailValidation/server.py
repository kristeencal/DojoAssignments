from flask import Flask, render_template, redirect, request, session, flash
from mysqlconnection import MySQLConnector
import re
import time
app = Flask(__name__)
app.secret_key = 'dancingDoctor'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
mysql = MySQLConnector(app, 'emaildb')

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/process', methods=['Post'])
def process():
    status = True
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
        status = False
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        status = False
    if status == True:
        flash("The email address you entered " + request.form['email'] + "is a valid email address. Thank you!")
        return render_template('success.html')
def create():
    # Write query as a string. Notice how we have multiple values
    # we want to insert into our query.
    query = "INSERT INTO email (email_address, created_at, updated_at) VALUES (:email_adress, NOW(), NOW())"
    # We'll then create a dictionary of data from the POST data received.
    data = {
             'email_adress': request.form['email_adress'],
           }
    # Run query, with dictionary values injected into the query.
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
