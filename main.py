import pandas as pd
import numpy as np
import Scrape_flipkart_Mobiles as mobiles
import Scrape_flipkart_washingmachines as wms
import Scrape_flipkart_airconditioners as acs

fileCSV = open("Products.csv","a+",encoding='utf-8',newline='')

mobilesDf = pd.DataFrame(mobiles.GetMobilesData())
washingDF = pd.DataFrame(wms.GetWashingMachinesData())
acsDF = pd.DataFrame(acs.GetAirconditioners())

mobilesDf.to_csv(fileCSV,sep = "|",encoding='utf-8',index= False)
washingDF.to_csv(fileCSV,sep = "|",encoding='utf-8',index= False)
acsDF.to_csv(fileCSV,sep = "|",encoding='utf-8',index= False)

fileCSV.close()




