from bs4 import BeautifulSoup
import pandas as pd

sectors = ['auto',
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
#This is the list of sectors


def sector_data(sector):
    dfs = pd.read_html('https://money.rediff.com/sectors/bse/' + str(sector),header=0)
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
                data[current]['Company Name'] = df[j][i]
            elif c==1:
                data[current]['% Change'] = df[j][i]
            else:
                data[current]['Current Price (Rs)'] = df[j][i]
            c+=1
    return data  

##Gives the best stocks to invest in the sector