from django.conf.urls import url

from . import views

urlpatterns = [

    url('^subscribe/$', views.subscribe, name='subscribe'),
    url('^donate/$', views.donate, name='donate'),
    url('^login/$', views.login, name='login'),
    url('^logout/$', views.signout, name='logout'),
    url('^signup/$', views.signup, name='signup'),
    url('^activate/$', views.activate, name='activate'),
    url('^home/$', views.home, name='home'),
    url(r'^bulk_users/$', views.bulk_users, name="bulk_users"),

    url('^$', views.index, name='index'),
]
