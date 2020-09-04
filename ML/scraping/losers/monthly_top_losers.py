#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jul 30 00:01:33 2020

@author: pranjal27bhardwaj
"""

import requests
from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt

def monthly_losers():
    dfs = pd.read_html('https://money.rediff.com/losers/bse/monthly',header=0)
    for df in dfs[:-1]:
        print(df)

    df1 = df[['Company', '% Change']]
    print(df1)
    df1.to_csv('monthly_top_losers.csv', index=False)
    
monthly_losers()

def plot_monthly_losers():
    plt.style.use('fivethirtyeight')
    data_monthly_losers = pd.read_csv('monthly_top_losers.csv')
    data_monthly_losers_final = data_monthly_losers[:16]
    x6 = data_monthly_losers_final.plot.bar(x = 'Company', y = '% Change', title = 'Monthly Top Losers', color='Black')
    plt.savefig('monthly_top_losers.png', bbox_inches='tight')
    plt.show(x6)

plot_monthly_losers()