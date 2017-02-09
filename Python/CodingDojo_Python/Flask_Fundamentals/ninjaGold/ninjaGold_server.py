from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "Dancing Doctor key"

@app.route('/')
def index():
    return render_template('ninjaGold.html')


@app.route('/process_money', methods=['POST'])
def process_money():
    return redirect('/')
app.run(debug=True)
