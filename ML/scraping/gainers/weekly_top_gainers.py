#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jul 29 23:39:10 2020

@author: pranjal27bhardwaj
"""


import requests
from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt

def weekly_gainers():    
    dfs = pd.read_html('https://money.rediff.com/gainers/bse/weekly',header=0)
    for df in dfs[:1]:
        df = df

    df['% Change'] = df['% Change'].str.replace(' ', "")
    df1 = df[['Company', '% Change', 'Current Price (Rs)']][:10]
    data = {}
    col = list(df1)
    for i in range(10):
        current = 'Company {}'.format(i+1)
        data[current] = {}
        c=0
        for j in col:
            if c==0:
                data[current]['Company Name'] = df[j][i]
            elif c==1:
                data[current]['% Change'] = df[j][i]
            else:
                data[current]['Current Price (Rs)'] = df[j][i]
                c+=1
    return data
    
    df1.to_csv('weekly_top_gainers.csv',index=False)
    
#weekly_gainers()

def plot_weekly_gainers():
    plt.style.use('fivethirtyeight')
    data_weekly_gainers = pd.read_csv('weekly_top_gainers.csv')
    data_weekly_gainers_final = data_weekly_gainers[:16]
    x2 = data_weekly_gainers_final.plot.bar(x = 'Company', y = '% Change', title = 'Weekly Top Gainers', color='Black')
    plt.savefig('weekly_top_gainers.png', bbox_inches='tight')
    plt.show(x2)
    
plot_weekly_gainers()