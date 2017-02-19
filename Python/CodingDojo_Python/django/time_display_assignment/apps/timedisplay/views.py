from django.shortcuts import render
import time
# now = datetime.datetime.now()

# Create your views here.
def index(request):
  print "*"*50
  context= {'time': time.strftime('%H: %M: %S'),
            'date': time.strftime('%m: %d: %Y')}
  return render(request, 'timedisplay/index.html', context)

# @register.filter(name='myDate')
# def myDate(value, arg):
#     dateformatted = value.strftime("%b %d, %Y at %I:%M %p")
#     print dateformatted
#     return redirect('')
