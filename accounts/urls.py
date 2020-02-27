from django.conf.urls import url,include
from .views import UserAPI,RegisterAPI,LoginApi
from knox import views as knox_views

urlpatterns = [
    url(r'^api/auth/login/',LoginApi.as_view()),
    url(r'^api/auth/user/',UserAPI.as_view()),
    url(r'^api/auth/register/',RegisterAPI.as_view()),
    url(r'^api/auth/logout/',knox_views.LogoutView.as_view(),name="knox_logout"),
    url(r'^api/auth/',include('knox.urls')),   
]