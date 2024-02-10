from django.urls import path
from myapp.views import set_cookie_view, read_cookie_view


urlpatterns = [
    path('set_cookie/', set_cookie_view, name='set_cookie'),
    path('read_cookie/', read_cookie_view, name='read_cookie'),
]
