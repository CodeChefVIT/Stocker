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


param = ['auto',
         'bankex',
         'bse-cg',
         'bse-cd',  
         'bsefmc',
         'bse-hc',
         'bse-it',
         'metal',
         'oilgas',
         'bsepsu',
         'realty',
         'teck',
         'power',
         'cpse',
         'infra',
         'basmtr',
         'cdgs',
         'energy',
         'fin',
         'indstr',
         'telcom',
         'utilities']
##This is the list of sectors


def sectors(i):
    dfs = pd.read_html('https://money.rediff.com/sectors/bse/' + i,header=0)
    for df in dfs[:-1]:
        #print(df)
        df1 = df[['Company', '% Change', 'Current Price (Rs)']]
        sorted_df1 = df1.sort_values(by='% Change', ascending=False)
        sorted_df1.reset_index(inplace = True, drop = True)
    #final_df = sorted_df1[:5]
       # print(final_df)
        
 
    
    data = {}
    col = list(sorted_df1)
    for i in range(10):
        current = 'Company {}'.format(i+1)
        data[current] = {}
        c=0
        for j in col:
            if c==0:
                data[current]['Company Name'] = sorted_df1[j][i]
            elif c==1:
                data[current]['% Change'] = sorted_df1[j][i]
            else:
                data[current]['Current Price (Rs)'] = sorted_df1[j][i]
                c+=1
    return data
    
##Gives the best stocks to invest in the sector

