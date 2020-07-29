#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jul 29 23:53:53 2020

@author: pranjal27bhardwaj
"""

import requests
from bs4 import BeautifulSoup
import pandas as pd

dfs = pd.read_html('https://money.rediff.com/losers/nse/weekly',header=0)
for df in dfs[:-1]:
    print(df)

df1 = df[['Company', '% Change']]
print(df1)  
df1.to_csv('weekly_top_losers.csv', index=False)