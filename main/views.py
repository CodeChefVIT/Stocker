from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from .scraping.gainers import daily_gainers, weekly_gainers, monthly_gainers
# Create your views here.

class DailyGainerView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [JSONParser]

    def get(self, request):
        data = daily_gainers()
        return Response(data, status=status.HTTP_200_OK)

class WeeklyGainerView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [JSONParser]

    def get(self, request):
        data = weekly_gainers()
        return Response(data, status=status.HTTP_200_OK)

class MonthlyGainerView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [JSONParser]

    def get(self, request):
        data = monthly_gainers()
        return Response(data, status=status.HTTP_200_OK)