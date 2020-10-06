import pandas as pd
import numpy as np
from bs4 import BeautifulSoup
from urllib.request import urlopen as urlReq
import requests
import datetime

products = []

def scrapeFlipkartWasingMachines(productURL):
    Current_Date_Formatted = datetime.datetime.today().strftime ('%d%m%Y')
    myUrl = productURL
    uClient2 = urlReq(myUrl)
    html = uClient2.read()
    uClient2.close()
 
    #product["CompanyURL"] = companyURL
    #product["ProductURL"] = productURL
   
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
           i+=1


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
        

def GetWashingMachinesData():
    scrapeFlipkartWasingMachines("https://www.flipkart.com/home-kitchen/home-appliances/washing-machines/fully-automatic-front-load~function/pr?sid=j9e%2Cabm%2C8qx&otracker=nmenu_sub_TVs%20%26%20Appliances_0_Fully%20Automatic%20Front%20Load")
    scrapeFlipkartWasingMachines("https://www.flipkart.com/home-kitchen/home-appliances/washing-machines/semi-automatic-top-load~function/pr?sid=j9e%2Cabm%2C8qx&otracker=nmenu_sub_TVs%20%26%20Appliances_0_Semi%20Automatic%20Top%20Load")
    scrapeFlipkartWasingMachines("https://www.flipkart.com/home-kitchen/home-appliances/washing-machines/fully-automatic-top-load~function/pr?sid=j9e%2Cabm%2C8qx&otracker=nmenu_sub_TVs%20%26%20Appliances_0_Fully%20Automatic%20Top%20Load")
    return products

