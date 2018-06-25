from gamers.settings.base import *


SECRET_KEY = '@$6g*1!(5g&-0t0cd#88ch2qsjlvjnqn#)tm^#wrph&g@&1(k^'

DEBUG = True

ALLOWED_HOSTS = [
    "*"
]

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases
# LOCAL
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'magicampus',
#         'USER': 'postgres',
#         'PASSWORD': 'postgrespass',
#         'HOST': 'localhost',
#         'PORT': '',
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'magicampus',
        'USER': 'shahr',
        'PASSWORD': 'Admin123',
        'HOST': 'localhost',   # Or an IP Address that your DB is hosted on
        'PORT': '',
    }
}
