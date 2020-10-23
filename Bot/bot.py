import telebot
import os
from iexfinance.stocks import Stock
import spacy
from rasa_nlu.training_data import load_data
from rasa_nlu.config import RasaNLUModelConfig
from rasa_nlu.model import Trainer
from rasa_nlu import config
import requests
TOKEN = "1317001419:AAHI1jki_au_nlULx_asnDJsWBeYMJzN-P8"
bot = telebot.TeleBot(TOKEN)

os.environ["IEX_TOKEN"] = "pk_9a107cfc301b4cceab10279f13515751"

headers = requests.utils.default_headers()
headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'

# Define state
INIT = 0
SEARCH_PRICE = 1
SEARCH_VOLUME = 2
SEARCH_VALUE = 3
GIVE_RESULTS = 0  # equivalent state of INIT
FINISH = 4

# Define Output signal
SHOW_PRICE = 11
SHOW_VOLUME = 12
SHOW_VALUE = 13

policy = {
    (INIT, "greet"): (INIT, "Hi there, I'm Stocker Bot. What can I do for you?", None),
    (INIT, "search_price"): (SEARCH_PRICE, "I see. so, which company?", None),
    (INIT, "search_specific_price"): (GIVE_RESULTS, "Here are the results:", SHOW_PRICE),
    (INIT, "search_volume"): (SEARCH_VOLUME, "I see. so, which company?", None),
    (INIT, "search_specific_volume"): (GIVE_RESULTS, "Here are the results:", SHOW_VOLUME),
    (INIT, "search_value"): (SEARCH_VALUE, "I see. So, which company?", None),
    (INIT, "search_specific_value"): (GIVE_RESULTS, "Here are the results:", SHOW_VALUE),
    (INIT, "none"): (INIT, "I'm sorry - I'm not sure how to help you.", None),
    (INIT, "exit"): (FINISH, "Byee! See you next time!", None),
    (SEARCH_PRICE, "specify_company"): (GIVE_RESULTS, "Here are the results:", SHOW_PRICE),
    (SEARCH_PRICE, "none"): (SEARCH_PRICE, "I can't understand. Please specify a company.", None),
    (SEARCH_PRICE, "exit"): (FINISH, "Byee! See you next time!", None),
    (SEARCH_VOLUME, "specify_company"): (GIVE_RESULTS, "Here are the results:", SHOW_VOLUME),
    (SEARCH_VOLUME, "none"): (SEARCH_VOLUME, "I can't understand. Please specify a company.", None),
    (SEARCH_VOLUME, "exit"): (FINISH, "ok, see you next time!", None),
    (SEARCH_VALUE, "specify_company"): (GIVE_RESULTS, "Here are the results:", SHOW_VALUE),
    (SEARCH_VALUE, "none"): (SEARCH_VALUE, "I can't understand. Please specify a company.", None),
    (SEARCH_VALUE, "exit"): (FINISH, "Byee! See you next time!", None)
}



nlp = spacy.load('en_core_web_md')

def extract_entities(message):
    include_entities = ['DATE', 'ORG']
    ents = dict.fromkeys(include_entities)
    doc = nlp(message)
    for ent in doc.ents:
        if ent.label_ in include_entities:
            ents[ent.label_] = ent.text
    return ents



# Create a trainer that uses this config
trainer = Trainer(config.load("config_spacy.yml"))
# Load the training data
training_data = load_data('demo-test.json')
# Create an interpreter by training the model
interpreter = trainer.train(training_data)


def interpret(message):
    entity = extract_entities(message)['ORG']
    data = interpreter.parse(message)

    if data['intent']['confidence'] > 0.35:
        intent = data['intent']['name']
        if entity is not None:
            if intent == "search_price":
                intent = "search_specific_price"
            elif intent == "search_volume":
                intent = "search_specific_volume"
            elif intent == "search_value":
                intent = "search_specific_value"
    else:
        intent = "none"

    return intent, entity


def send_message1(state, message):
    new_state, response, out_sig, entity = respond(state, message.text)
    chat_id = message.chat.id
    bot.send_message(chat_id, response)

    if out_sig is not None:
        if out_sig == SHOW_PRICE:
            stock = Stock(entity)
            df = stock.get_quote()
            result = '%-15s%s' % ('Stock:', df['symbol']) + '\n' + '%-15s%s' % ('Price:', str(df['latestPrice'])) + '\n' \
                     + '%-15s%s' % ('Change:', str(df['change'])) + '\n' + '%-15s%s' % ('Time:', df['latestTime'])
            bot.send_message(chat_id, result)
        elif out_sig == SHOW_VOLUME:
            stock = Stock(entity)
            df = stock.get_quote()
            result = '%-15s%s' % ('Stock:', df['symbol']) + '\n' + '%-15s%s' % ('Volume:', str(df['previousVolume']))
            bot.send_message(chat_id, result)
        elif out_sig == SHOW_VALUE:
            stock = Stock(entity)
            df = stock.get_quote()
            result = '%-15s%s' % ('Stock:', df['symbol']) + '\n' + '%-15s%s' % ('MarketCap:', str(df['marketCap']))
            bot.send_message(chat_id, result)

    return new_state


def respond(state, message):
    intent, entity = interpret(message)
    (new_state, response, out_sig) = policy[(state, intent)]
    return new_state, response, out_sig, entity


global state
state = INIT

@bot.message_handler(func=lambda message: True)
def send_messages(message):
    global state
    state = send_message1(state, message)


bot.polling()
