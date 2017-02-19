from __future__ import unicode_literals

from django.db import models

# Create your models here.
class EmailAddress(models.Model):
    email = models.EmailField (blank = True)

    def __unicode__ (self):
        return self.title
