from django.urls import path
from myapp.views import set_cookie_view, get_cookie_view, set_header_view, get_header_view

urlpatterns = [
    path('cookie/set', set_cookie_view, name='set_cookie'),
    path('cookie/get/<str:name>', get_cookie_view, name='get_cookie'),
    path('header/set', set_header_view, name='set_header'),
    path('header/get/<str:name>', get_header_view, name='get_header'),
]
