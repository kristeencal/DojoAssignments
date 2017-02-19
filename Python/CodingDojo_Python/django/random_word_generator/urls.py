from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index)
]

def index():
	try:
		session['counter'] +=1
	except KeyError:
		session['counter'] = 1
	return render_template("index.html")

def clicked():
	if request.form['button'] == 'Ninja +2':
		session['counter'] += 2
	elif request.form['button'] == 'Reset':
		session['counter'] = 0
	return render_template("index.html")

app.run(debug=True)
