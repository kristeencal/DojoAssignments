from __future__ import unicode_literals

from django.db import models
import re


class UserManager(models.Manager):
    def validate(self,postdata):
        errors = []

        if len(postdata["email"]) == 0:
            errors.append("empty email")
        else:
            emailstr = re.compile(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
            if re.search(emailstr,postdata["email"]):
                print "It's an email!"
                if len(User.objects.filter(email=postdata["email"])) != 0:
                    errors.append("user already added")

            else:
                errors.append("not an email")

    # we should have already checked for all possible errors
        if len(errors) == 0:

            newuser=User.objects.create(email=postdata["email"])
            return (True, newuser)
        else:

            return (False, errors)



# Create your models here.
# class EmailAddress(models.Model):
#     email = models.EmailField (blank = True)
#
#     def __unicode__ (self):
#         return self.title

class User(models.Model):
    email = models.EmailField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    # objects is the automatic manager
