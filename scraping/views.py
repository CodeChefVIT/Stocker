import sys
from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from scrapers.gainers import daily_gainers, weekly_gainers, monthly_gainers
from scrapers.losers import daily_losers, weekly_losers, monthly_losers
from scrapers.sector_scraping import sector_data
sys.path.append("..")
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

class DailyLoserView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [JSONParser]

    def get(self, request):
        data = daily_losers()
        return Response(data, status=status.HTTP_200_OK)

class WeeklyLoserView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [JSONParser]

    def get(self, request):
        data = weekly_losers()
        return Response(data, status=status.HTTP_200_OK)

class MonthlyLoserView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [JSONParser]

    def get(self, request):
        data = monthly_losers()
        return Response(data, status=status.HTTP_200_OK)

class SectorDataView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [JSONParser]

    def get(self, request, sector):
        data = sector_data(sector)
        return Response(data, status=status.HTTP_200_OK)