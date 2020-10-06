import pandas as pd
import numpy as np
from bs4 import BeautifulSoup
from urllib.request import urlopen as urlReq
import requests
import datetime
import hashlib
import random


products = []

def scrapeFlipkartMobiles(productURL):
    Current_Date_Formatted = datetime.datetime.today().strftime ('%d%m%Y')
    myUrl = productURL
    uClient2 = urlReq(myUrl)
    html = uClient2.read()
    uClient2.close()
    page_soup = BeautifulSoup(html,"html.parser")
    catContainers = page_soup.findAll("a",{"class":"_1KHd47"})
    containers = page_soup.findAll("div",{"class":"_3O0U0u"})
    for container in containers:
        marginPercent = random.randrange(5,20)/100
        product = {}
        ##Extract product Name
        itemName = container.findAll("div",{"class":"_3wU53n"})
        itemName = itemName[0].text.replace(","," ")
        product["ItemName"] = itemName
        ##Extract Brand Name from Product Name
        brand = product["ItemName"].split()[0]
        product["Brand"] = brand
        product["BrandHash"] = hash(product["Brand"])

        charPos = product["ItemName"].find("(")
        if charPos > -1:
            productName = product["ItemName"][0:charPos]
        else:
            productName = product["ItemName"]
        product["ProductName"]  = productName


        
        productInfo = container.findAll("li",{"class":"tVe95H"})
        ##Company URL
        product["CompanyURL"] = "https://www.flipkart.com"
        ##Image URL for Item
        imageURL = container.findAll("a",{"class":"_31qSD5"})[0]['href']
        
        ##Extract Item Number of Product
        itemNumber = imageURL.split("/")[3].split("?")[0]
        product["ItemHash"] = hash(product["ItemName"])
        product["MPN"] = hash(product["ItemName"])
        product["UPC"] = hash(product["ItemName"])
        
        
        ##Extract features of Product Item
        i = 0
        for feature in productInfo:
           col = "feature_"+str(i)
           product[col] = feature.text.replace(","," ")
           i += 1
        
        productHash = ''
        for i in range(0, len(catContainers)):
            col = "Cat_"+str(i)
            cat = catContainers[i].text.replace(","," ")
            productHash += cat+"_"
            product[col] = cat
        
        ##Extract HASH for Product (Concatenate Categories, Brands to generate HASH)
        productHash = productHash+"_"+productName+"_"+brand
        product['ProductHash'] =  str(hash(productHash))

        
        ##Extract Product Price
        productPrice = container.findAll("div",{"class":"_1vC4OE _2rQ-NK"})
        try:
            price = productPrice[0].text
            price=price.replace("₹","").replace(",","")
            cost = round(int(price) - int(price)*float(marginPercent))
        except:
            price = 0
            cost  = 0
        product["Price"]=price
        product["Cost"]=cost
        ##Extract Product List Price

        productListPrice = container.findAll("div",{"class":"_3auQ3N _2GcJzG"})
        #print(productListPrice)
        try:
            listPrice = productListPrice[0].text
            listPrice=listPrice.replace("₹","").replace(",","")
           
        except:
            productListPrice = container.findAll("div",{"class":"_3_G5Wj"})
            try:
                listPrice = productListPrice[2].text
                listPrice=listPrice.replace("₹","").replace(",","")
            except:
                listPrice = 0
        
        product["ListPrice"] = listPrice
        #print(product["Product"]," " , price, " " , listPrice," ", cost)

        
        
        ##Data of Execution of Script
        product["dt"] = Current_Date_Formatted

        ##Extract Image URL
        product["ImageURL"] = product["CompanyURL"]+"\\"+imageURL
        product["Availability"] = "1"
        product["OnSale"] = "1"
        product["Inventory"] = random.randrange(10,50)
        product["Conversion_PCT"] = random.random()
        product["UnitsSold"]=random.randrange(10,50)
        product["Revenue"] =random.randrange(100000,1000000)


        
        products.append(product)

 
        
def GetMobilesData():
    scrapeFlipkartMobiles("https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DRealme&otracker=nmenu_sub_Electronics_0_Realme")
    scrapeFlipkartMobiles("https://www.flipkart.com/mobiles/mi~brand/pr?sid=tyy,4io&otracker=nmenu_sub_Electronics_0_Mi")
    scrapeFlipkartMobiles("https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DAsus&otracker=nmenu_sub_Electronics_0_Asus")
    scrapeFlipkartMobiles("https://www.flipkart.com/search?p[]=facets.brand%255B%255D%3DHonor&sid=tyy%2F4io&otracker=CLP_filters&otracker=nmenu_sub_Electronics_0_Honor")
    scrapeFlipkartMobiles("https://www.flipkart.com/mobiles/~cs-fdeu9sdw9c/pr?sid=tyy%2C4io&collection-tab-name=Iphone%20SE%202020&otracker=nmenu_sub_Electronics_0_iPhone%20SE")
    scrapeFlipkartMobiles("https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.serviceability%5B%5D%3Dfalse&p%5B%5D=facets.brand%255B%255D%3DVivo&otracker=nmenu_sub_Electronics_0_Vivo")
    scrapeFlipkartMobiles("https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DInfinix&otracker=nmenu_sub_Electronics_0_Infinix")
    scrapeFlipkartMobiles("https://www.flipkart.com/mobiles/~cs-35ecwn2f18/pr?sid=tyy%2C4io&otracker=nmenu_sub_Electronics_0_Motorola%20razr")
    return products

