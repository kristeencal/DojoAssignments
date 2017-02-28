from django.shortcuts import render, redirect
from django.template import RequestContext
from django.contrib import messages
from .models import User

# from contact.forms import *

# def emailaddress(request):
#     if request.method == "POST":
#
#         form = EmailAddressForm(request.POST)
#
#         if(form.is_valid()):
#             try:
#                 print (request.POST[message])
#                 message = "The email address you enetered is a valid email! Thank you!"
#                 return redirect ('/')
#             except:
#                 pass
#
#         else:
#             form = EmailAddressForm()
#
#         return render_to_response('contact/emailaddress.html',
#                 {'form': form}
#                 context_instance = RequestContext(request))

# Create your views here.
def index(request):
    return render(request, "index.html")

def process(request):
    # print "This is what I get back: ", User.objects.validate(request.POST)
    newuser=User.objects.validate(request.POST)
    if newuser[0] == True:
        request.session["id"]=newuser[1].id
    else:
        errors=newuser[1]
        for message in errors:

            messages.error(request, message)

    return redirect('/')
