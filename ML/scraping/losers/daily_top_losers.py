#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jul 29 23:52:33 2020

@author: pranjal27bhardwaj
"""
# This function will give the worst performing stocks of the day
import requests
from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt

def daily_losers():
    dfs = pd.read_html('https://money.rediff.com/losers/bse/daily',header=0)
    for df in dfs[:-1]:
        df = df

#    df['% Change'] = df['% Change'].str.replace(' ', "")
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
    
    df1.to_csv('daily_top_losers.csv', index=False)
    
#daily_losers()


def plot_daily_losers():
    plt.style.use('fivethirtyeight')
    data_daily_losers = pd.read_csv('daily_top_losers.csv')
    data_daily_losers_final = data_daily_losers[:16]
    x4 = data_daily_losers_final.plot.bar(x = 'Company', y = '% Change', title = 'Daily Top Losers', color='Black')
    plt.savefig('daily_top_losers.png', bbox_inches='tight')
    plt.show(x4)
    
plot_daily_losers()