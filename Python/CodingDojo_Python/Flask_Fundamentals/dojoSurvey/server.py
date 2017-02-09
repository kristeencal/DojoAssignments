from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/')
def index():
  return render_template("dojoSurvey.html")
@app.route('/user', methods=['POST'])
def create_user():
   print "Got Post Info"
   name = request.form['name']
   location = request.form['location']
   language= request.form['language']
   description = request.form['description']
   # return redirect('/') # redirects back to the '/' route
   return render_template('user.html', name= name, location = location, language = language, description = description)
app.run(debug=True)
