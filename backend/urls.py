from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^patient/$',views.PatientView.as_view(),name=views.PatientView.name),
    # url(r'^patient-details/$',views.PatientDetailsView.as_view(),name=views.PatientDetailsView.name),
    url(r'^history/$',views.HistoryView.as_view(),name=views.HistoryView.name),
    # url(r'',views.ApiRoot.as_view(),name=views.ApiRoot.name)
]