from django import forms
from django.forms import ModelForm
from contact.models import EmailAddress

class EmailAddressForm(ModelForm):
    class Meta:
        model = EmailAddress

class EmailAddressForm(forms.Form)
    email = forms.EmailField(label = "")

    email=models.EmailField(blank = True)

    def __unicode__(self):
        return.self.title
