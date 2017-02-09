from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "Dancing Doctor key"

@app.route('/')
def index():
    return render_template('game.html')


@app.route('/logic', methods=['POST'])
def logic():
    if "num" not in session:
        session["num"]= random.randint(1,101)
    guess= int(request.form['guess'])
    if int(session["num"]) == guess:
        session['response']=  "Yay! You got it"
    elif int(session["num"]) > guess:
        session['response']=  "Nope. Too low. Try higher"
    elif int(session["num"]) < guess:
        session['response']=  "Nooo. Too high. Guess again"
    return redirect ('/')
app.run(debug=True)
