#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jul 30 00:01:33 2020

@author: pranjal27bhardwaj
"""

import requests
from bs4 import BeautifulSoup
import pandas as pd

dfs = pd.read_html('https://money.rediff.com/losers/nse/monthly',header=0)
for df in dfs[:-1]:
    print(df)

df1 = df[['Company', '% Change']]
print(df1)  
df.to_csv('monthly_top_losers.csv', index=False)