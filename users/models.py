# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User as Django_User

# Create your models here.
class Profile(models.Model):
    user = models.ForeignKey(Django_User)
    hash = models.CharField(max_length=512, null=True, blank=True)
    is_subscriber = models.BooleanField(default=False)
    password = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Profiles'
        ordering = ['user']

    def __unicode__(self):
        return u"%s %s" % (self.user.first_name, self.user.last_name)

    def __str__(self):
        return u"%s %s" % (self.user.first_name, self.user.last_name)