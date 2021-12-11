---
title: Django
layout: meth
parent: Programming
---
# Django
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## resources
- official doc
	- https://docs.djangoproject.com/en/4.0/

## installation
`pip3 install django`

## basic commands
- `manage.py` is like the `artisan` of [[Laravel]]
- creation
	- `django-admin startproject mysite`
- run server
	- (in root) `python manage.py runserver` then go to http://127.0.0.1:8000/
- create app
	- `python manage.py startapp app1`

## views
`urls.py` is [[Laravel]]'s `web.php`

`urls.py`
```py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'), # views.index = file.function
]
```

`views.py`
```py
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
```

```py
from django.shortcuts import render

def index(request):
    return render(request, 'app1/index.html')
```
`app1` is an app you created and added in `settings.py` `INSTALLED_APPS`  
`index.html` located in `app1/templates/app1/index.html`  
why not put in `templates/index.html`?  
> Now we might be able to get away with putting our templates directly in polls/templates (rather than creating another polls subdirectory), but it would actually be a bad idea. Django will choose the first template it finds whose name matches, and if you had a template with the same name in a different application, Django would be unable to distinguish between them. We need to be able to point Django at the right one, and the best way to ensure this is by namespacing them. That is, by putting those templates inside another directory named for the application itself.

## settings
### remove csrf protection
`settings.py` `MIDDLEWARE` comment `'django.middleware.csrf.CsrfViewMiddleware'`

## migration
- create migration
	- alter `app1/models.py` and run `python manage.py makemigrations app1`, will generate migration files at `app1/migration` for you
		- equivalent to [[Laravel]]'s `php artisan migrate` except you only have to alter the database format directly without worrying about the create table drop column syntax
- print migration file
	- `python manage.py sqlmigrate app1 0001
- run migration
	- `python manage.py migrate`
		- equivalent to [[Laravel]]'s `php artisan migrate`
- migration status
	- `python manage.py showmigrations`
		- eq to [[Laravel]]'s `php artisan migrate:status`
		- `--plan` to print in list


