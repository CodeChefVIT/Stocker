import yfinance as yf
import pandas as pd
stock = input()
stk = yf.Ticker(stock)


# get historical market data
history = stk.history(period="max")
#print(history)
history.to_csv("data.csv")

hist = pd.read_csv("data.csv", usecols = ['Date','Close'])
#print(hist)
x = input("Enter the Date")
print(hist.loc[hist['Date'] == x, 'Close'].iloc[0])
 