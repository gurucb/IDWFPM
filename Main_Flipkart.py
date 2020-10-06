import pandas as pd
import datetime
import os
import shutil
import Scrape_flipkart_Mobiles as mobiles
#import Scrape_flipkart_washingmachines as wm
#import Scrape_flipkart_airconditioners as ac


mobile = mobiles.GetMobilesData()
#washingMachines = wm.GetWashingMachinesData()
#airConditioners = ac.GetAirconditioners()

def storeProducts(products,fileName):
    archivePath = "C:\\DataGenerator\\Flipkart\\Processed\\"
    filePath = "C:\\DataGenerator\\Flipkart\\Current\\"

    files = os.listdir(filePath)
    for file in files:
        shutil.move(os.path.join(filePath,file),os.path.join(archivePath,file))

    productsDF = pd.DataFrame(products)
    fileCSV = open(filePath+fileName,"w+",encoding='utf-8',newline='')
    productsDF.to_csv(fileCSV,sep = ",",encoding='utf-8',index=False)
    fileCSV.close()


fileName = "Mobiles_"+str(datetime.datetime.today().strftime('%d%m%Y'))+'.csv'
storeProducts(mobile,fileName)
#fileName = "WashingMachines_"+str(datetime.datetime.today().strftime('%d%m%Y'))+'.csv'
#storeProducts(washingMachines,fileName)
#fileName = "AirConditioners_"+str(datetime.datetime.today().strftime('%d%m%Y'))+'.csv'
#storeProducts(airConditioners,fileName)
