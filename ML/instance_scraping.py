#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Aug  2 16:37:10 2020

@author: pranjal27bhardwaj
"""

import bs4
import requests
from bs4 import BeautifulSoup


def parsePrice():
    r=requests.get('https://finance.yahoo.com/quote/AAPL?p=AAPL')
    soup=bs4.BeautifulSoup(r.text,"lxml")
    price=soup.find_all('div',{'class':'My(6px) Pos(r) smartphone_Mt(6px)'})[0].find('span').text
    return price

while True:
    print('The current price is: '+str(parsePrice()))