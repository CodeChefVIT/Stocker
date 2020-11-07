from django.urls import path, include
from .views import DailyGainerView, WeeklyGainerView, MonthlyGainerView, \
    DailyLoserView, WeeklyLoserView, MonthlyLoserView

urlpatterns = [
    path('gain/daily/', DailyGainerView.as_view()),
    path('gain/weekly/', WeeklyGainerView.as_view()),
    path('gain/monthly/', MonthlyGainerView.as_view()),
    path('lose/daily/', DailyLoserView.as_view()),
    path('lose/weekly/', WeeklyLoserView.as_view()),
    path('lose/monthly/', MonthlyLoserView.as_view()),
]