from django.shortcuts import render
from django.http import HttpResponse
from .helpers.cookie_helpers import set_cookie, get_cookie

def set_cookie_view(request):
    response = HttpResponse("Cookie set successfully!")
    set_cookie(response, 'myCookie', 'cookieValue', True)
    return response

def read_cookie_view(request):
    cookie_value = get_cookie(request, 'myCookie')
    return HttpResponse('Value of myCookie: ' + cookie_value)

