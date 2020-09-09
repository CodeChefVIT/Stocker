#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jul 29 23:49:45 2020

@author: pranjal27bhardwaj
"""

import requests
from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt

def monthly_gainers():

    dfs = pd.read_html('https://money.rediff.com/gainers/bse/monthly',header=0)
    for df in dfs[:-1]:
        print(df)

    df['% Change'] = df['% Change'].str.replace(' ', "")
    df1 = df[['Company', '% Change']]
    print(df1)
    df1.to_csv('monthly_top_gainers.csv', index=False)
    
monthly_gainers()


def plot_monthly_gainers():
    plt.style.use('fivethirtyeight')
    data_monthly_gainers = pd.read_csv('monthly_top_gainers.csv')
    data_monthly_gainers_final = data_monthly_gainers[:16]
    x3 = data_monthly_gainers_final.plot.bar(x = 'Company', y = '% Change', title = 'Monthly Top Gainers', color='Black')
    plt.savefig('monthly_top_gainers.png', bbox_inches='tight')
    plt.show(x3)
    
plot_monthly_gainers()