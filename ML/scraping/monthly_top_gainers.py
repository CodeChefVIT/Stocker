#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jul 29 23:49:45 2020

@author: pranjal27bhardwaj
"""

import requests
from bs4 import BeautifulSoup
import pandas as pd

dfs = pd.read_html('https://money.rediff.com/gainers/nse/monthly',header=0)
for df in dfs[:-1]:
    print(df)

df['% Change'] = df['% Change'].str.replace(' ', "")
print(df)
df.to_csv('monthly_top_gainers.csv', index=False)
