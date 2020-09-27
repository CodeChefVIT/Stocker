from django.urls import path, include
from .views import DailyGainerView, WeeklyGainerView, MonthlyGainerView

urlpatterns = [
    path('gain/daily/', DailyGainerView.as_view()),
    path('gain/weekly/', WeeklyGainerView.as_view()),
    path('gain/monthly/', MonthlyGainerView.as_view()),
]