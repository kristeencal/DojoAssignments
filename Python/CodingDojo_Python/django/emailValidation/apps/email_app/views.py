from django.shortcuts import *, render
from django.template import RequestContext

from contact.forms import *

def emailaddress(request):
    if request.method == "POST":

        form = EmailAddressForm(request.POST)

        if(form.is_valid()):
            try:
                print (request.POST[message])
                message = "The email address you enetered is a valid email! Thank you!"
                return redirect ('/')
            except:
                pass

        else:
            form = EmailAddressForm()

        return render_to_response('contact/emailaddress.html',
                {'form': form}
                context_instance = RequestContext(request))

# Create your views here.
