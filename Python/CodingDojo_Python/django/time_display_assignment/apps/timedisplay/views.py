from django.shortcuts import render
import datetime
# now = datetime.datetime.now()

# Create your views here.
def index(request):
  print "*"*50
  return render(request, 'timedisplay/index.html')

@register.filter(name='myDate')
def myDate(value, arg):
    dateformatted = value.strftime("%b %d, %Y at %I:%M %p")
    return dateformatted
