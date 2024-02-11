from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .helpers.cookie_helpers import set_cookie, get_cookie
from .helpers.header_helpers import set_header, get_header


@csrf_exempt
def set_cookie_view(request):
    name = request.GET.get('name')
    value = request.GET.get('value')
    http_only = request.GET.get('http_only', False)

    response = JsonResponse({'message': 'Cookie set successfully'})
    response.set_cookie(name, value, httponly=http_only)
    return response

@csrf_exempt
def get_cookie_view(request, name):
    cookie_value = get_cookie(request, name)
    if cookie_value:
        return JsonResponse({name: cookie_value})
    else:
        return JsonResponse({'message': 'Cookie not found'}, status=404)

@csrf_exempt
def set_header_view(request):
    name = request.GET.get('name')
    value = request.GET.get('value')

    response = JsonResponse({'message': 'Header set successfully'})

    return set_header(response, name, value)


@csrf_exempt
def get_header_view(request, name):
    header_value = get_header(request, name)

    if header_value:
        return JsonResponse({name: header_value})
    else:
        return JsonResponse({'message': 'Header not found'}, status=404)

#http://localhost:8000/cookie/set?name=myCookie&value=cookieValue&http_only=true
#http://localhost:8000/cookie/get/myCookie

#http://localhost:8000/header/set?name=Custom-Header&value=Hello
#http://localhost:8000/header/get/Custom-Header
