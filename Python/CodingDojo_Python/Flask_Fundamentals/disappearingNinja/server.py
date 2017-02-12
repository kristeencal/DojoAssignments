from flask import Flask
app = Flask(__name__)

@app.route('/')
def no_ninjas():
    return 'No ninjas here!'

@app.route('/')
def no_ninjas():
    return 'No ninjas here!'
