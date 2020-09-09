#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jul 29 23:24:41 2020

@author: pranjal27bhardwaj
"""
# This script will scrape the best performerming stocks of that day and save it as CSV file.

import requests
from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt

def daily_gainers():
    dfs = pd.read_html('https://money.rediff.com/gainers/bse/daily',header=0)
    for df in dfs[:-1]:
        print(df)

    df['% Change'] = df['% Change'].str.replace(' ', "")
    df1 = df[['Company', '% Change']]
    print(df1)
    df1.to_csv('daily_top_gainers.csv',index=False)
    
    
daily_gainers()



def plot_daily_gainers():
    plt.style.use('fivethirtyeight')
    data_daily_gainers = pd.read_csv('daily_top_gainers.csv')
    data_daily_gainers_final = data_daily_gainers[:16]
    x1 = data_daily_gainers_final.plot.bar(x = 'Company', y = '% Change', title = 'Daily Top Gainers', color='Black')
    plt.savefig('daily_top_gainers.png', bbox_inches='tight')
    plt.show(x1)
    
plot_daily_gainers()    
