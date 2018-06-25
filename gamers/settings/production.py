from gamers.settings.base import *

import django_heroku
from .base import env

SECRET_KEY = '@$6g*1!(5g&-0t0cd#88ch2qsjlvjnqn#)tm^#wrph&g@&1(k^'
DEBUG = True


ALLOWED_HOSTS = [
    "*"
]


# Heroku
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'd4s6f7j4bqttg1',
        'USER': 'tgzcwsvybasdxu',
        'PASSWORD': 'c6ff0e5df42e1f45b813aa881b05ecc6d91f776fbb56b11a7f6e885e6b8ee04f',
        'HOST': 'ec2-174-129-41-64.compute-1.amazonaws.com',
        'PORT': '5432',
    }
}



django_heroku.settings(locals())