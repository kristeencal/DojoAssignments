# from flask import Flask
# app = Flask(__name__)
# @app.route('/')
# def hello_world():
#     return 'Hello World!'
# app.run(debug=True)

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')

# def hello_world():
#     return render_template('index.html')
# app.run(debug=True)
#
# @app.route('/success')
# def success():return render_template('success.html')
def hello_world():
    return render_template("index.html", name = "Jay")
app.run(debug=True)
