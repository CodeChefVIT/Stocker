from bs4 import BeautifulSoup
import pandas as pd

def daily_gainers():
    dfs = pd.read_html('https://money.rediff.com/gainers/bse/daily',header=0)
    for df in dfs[:-1]:
        df=df

    df['% Change'] = df['% Change'].str.replace(' ', "")
    df1 = df[['Company', '% Change','Current Price (Rs)']][:10]
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

def monthly_gainers():
    dfs = pd.read_html('https://money.rediff.com/gainers/bse/monthly',header=0)
    for df in dfs[:-1]:
        df=df

    df['% Change'] = df['% Change'].str.replace(' ', "")
    df1 = df[['Company', '% Change','Current Price (Rs)']][:10]
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

def weekly_gainers():    
    dfs = pd.read_html('https://money.rediff.com/gainers/bse/weekly',header=0)
    for df in dfs[:-1]:
        df=df

    df['% Change'] = df['% Change'].str.replace(' ', "")
    df1 = df[['Company', '% Change','Current Price (Rs)']][:10]
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