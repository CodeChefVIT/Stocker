#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Oct 22 22:48:50 2020

@author: pranjal27bhardwaj
"""
import requests
from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt

param = ['automotive', 'banking-finance', 'cement-construction', 'chemicals' , 'conglomerates',
'consumer-durable',
'consumer-non-durable',
'engineering',
'food-beverage',
'gold-etf',
'technology',
'manufacturing',
'media',
'metals-mining',
'miscellaneous',
'oil-gas',
'pharmaceuticals',
'retail-real-estate',
'services',
'telecom',
'tobacco',
'utilities']



def sectors():
    DF_list = list()

    for i in param:
        dfs = pd.read_html('http://www.moneycontrol.com/india/stockmarket/sector-classification/marketstatistics/nse/'+ i +'.html?classic=true',header=0)
        df1 = dfs[['Company Name', '%Chg']]
        print(dfs)

###Still working on it
sectors()
