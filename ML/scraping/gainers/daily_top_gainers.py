#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jul 29 23:24:41 2020

@author: pranjal27bhardwaj
"""


import requests
from bs4 import BeautifulSoup
import pandas as pd

dfs = pd.read_html('https://money.rediff.com/gainers/nse/daily/nifty',header=0)
for df in dfs[:-1]:
    print(df)

df1 = df[['Company', '% Change']]
print(df1)  
df1.to_csv('daily_top_gainers.csv', index=False)