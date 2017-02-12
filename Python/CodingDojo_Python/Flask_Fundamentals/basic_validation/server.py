from flask import Flask, render_template, request, redirect, session, flash
import random
from datetime import datetime
app = Flask(__name__)
app.secret_key='dancingDoctor'

@app.route('/')
def survey():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
  if len(request.form['name']) < 1:
    flash("Name cannot be empty!") # pass a string to the flash function
  elif len(request.form['name']) > 1:
    flash("Success! Your name is {}".format(request.form['name']))
  if len(request.form['textbox']) < 1:
    flash("please enter a comment  {}".format(request.form['textbox']))
  elif len(request.form['textbox']) > 120:
    flash("please reduce word count to 120 characters {}".format(request.form['textbox']))
    # pass a string to the flash function
  return redirect('/') # this will return to the index and display the message

app.run(debug=True) # this runs the server
