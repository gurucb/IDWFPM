import pandas as pd
import numpy as np
from bs4 import BeautifulSoup
from urllib.request import urlopen as urlReq
import requests
import datetime

products = []

def scrapeFlipkartAirconditioners(productURL):
    Current_Date_Formatted = datetime.datetime.today().strftime ('%d%m%Y')
    myUrl = productURL
    uClient2 = urlReq(myUrl)
    html = uClient2.read()
    uClient2.close()
    page_soup = BeautifulSoup(html,"html.parser")
    catContainers = page_soup.findAll("a",{"class":"_1KHd47"})

    containers = page_soup.findAll("div",{"class":"_3O0U0u"})
    for container in containers:
        product = {}
        #product["Category"] = catString
        productName = container.findAll("div",{"class":"_3wU53n"})
        product["Product"] = productName[0].text
        #print(productName[0].text)

        productInfo = container.findAll("li",{"class":"tVe95H"})
        i = 0
        for feature in productInfo:
           col = "feature_"+str(i)
           product[col] = feature.text
           i+= 1

        for i in range(0, len(catContainers)):
                col = "Cat_"+str(i)
                product[col] = catContainers[i].text



        productPrice = container.findAll("div",{"class":"_1vC4OE _2rQ-NK"})
        try:
            price = productPrice[0].text
            product["Price"]=price.replace("₹","").replace(",","")
           
        except:
            price = 'No Price'
        product["dt"] = Current_Date_Formatted
        products.append(product)   
        
def GetAirconditioners():
    scrapeFlipkartAirconditioners("https://www.flipkart.com/air-conditioners/pr?sid=j9e,abm,c54&p[]=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p[]=facets.technology%255B%255D%3DInverter&p[]=facets.serviceability%5B%5D%3Dtrue&otracker=categorytree&otracker=nmenu_sub_TVs%20%26%20Appliances_0_Inverter%20AC")
    scrapeFlipkartAirconditioners("https://www.flipkart.com/home-kitchen/home-appliances/air-conditioners/split~type/pr?sid=j9e,abm,c54&otracker=nmenu_sub_TVs%20%26%20Appliances_0_Split%20ACs")
    return products

