#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Sep  5 03:42:12 2020

@author: pranjal27bhardwaj
"""

import pandas as pd
import yfinance as yf
from yahoofinancials import YahooFinancials


def plot(X):
    ticker = yf.Ticker(X)

    stock_df = ticker.history(period="max")

    stock_df['Close'].plot(title="Stock price")

n = input()    
plot(n)