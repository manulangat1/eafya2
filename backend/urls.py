from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^home/$',views.HomeView.as_view(),name=views.HomeView.name),
    url(r'^broadcast/$',views.broadcast_sms),
    url(r'^homepic/$',views.HomePicView.as_view(),name=views.HomePicView.name),
    url(r'^appoint/$',views.AppointmentView.as_view()),
    url(r'^patient/$',views.PatientView.as_view(),name=views.PatientView.name),
    url(r'^patient-details/$',views.PatientDetailsView.as_view(),name=views.PatientDetailsView.name),
    url(r'^history/$',views.HistoryView.as_view(),name=views.HistoryView.name),
    url(r'^about/$',views.AboutView.as_view()),
    url(r'^help/$',views.HelpView.as_view()),
    # url(r'^historys/$',views.HistorysView.as_view()),
    # url(r'',views.ApiRoot.as_view(),name=views.ApiRoot.name)
]