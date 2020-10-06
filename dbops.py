import pyodbc
import pandas as pd
import numpy as np
from bs4 import BeautifulSoup
import os
import shutil

server = "<Server Name>.database.windows.net"
database = "<DBName>"
username = "<User Name>"
password = "<Password>"
driver = "{ODBC Driver 17 for SQL Server}"

connection = pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = connection.cursor()

filePath = "C:\\DataGenerator\\Flipkart\\Current\\"
archivePath = "C:\\DataGenerator\\Flipkart\\Processed\\"

inputFiles = os.listdir(filePath)
SQLCommand = 'Truncate table FlipkartMobileScrapeRaw'
cursor.execute(SQLCommand)
connection.commit()
for iFile in inputFiles:
    print("Processing File ", iFile)
    dfMobileRaw = pd.DataFrame(pd.read_csv(os.path.join(filePath,iFile),sep=",",header=0))
    #SQLCommand = ('INSERT INTO FlipkartMobileScrapeRaw ([Product],[Brand],[URL],[ItemNumber],[feature_0],[feature_1],[feature_2],[feature_3],[feature_4],[feature_5],[Cat_0],[Cat_1],[Cat_2],[ID],[Price],[dt],[ImageURL],[feature_6],[feature_7],[feature_8]) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);')
    SQLCommand = ('INSERT INTO FlipkartMobileScrapeRaw ([ItemName],[Brand],[BrandHash],[CompanyURL],[ItemHash],[feature_0],[feature_1],[feature_2],[feature_3],[feature_4],[feature_5],[Cat_0],[Cat_1],[Cat_2],[ProductHash],[Price],[ListPrice],[dt],[ImageURL],[MPN],[UPC],[Cost],[Availability],[OnSale],[Inventory],[Conversion_PCT],[UnitsSold],[Revenue],[ProductName]) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);')
    for ind, row in dfMobileRaw.iterrows():
        cursor.execute(SQLCommand,(row['ItemName'],row['Brand'],row['BrandHash'],row['CompanyURL'],row['ItemHash'],row['feature_0'],row['feature_1'],row['feature_2'],row['feature_3'],row['feature_4'],pd.isnull(row['feature_5']),row['Cat_0'],row['Cat_1'],row['Cat_2'],row['ProductHash'],row['Price'],row['ListPrice'],row['dt'],row['ImageURL'],row['MPN'],row['UPC'],row['Cost'],row['Availability'],row['OnSale'],row['Inventory'],row['Conversion_PCT'],row['UnitsSold'],row['Revenue'],row['ProductName']))
        connection.commit()
    shutil.move(os.path.join(filePath,iFile),os.path.join(archivePath,iFile))
cursor.close()

##Calling Stored Procedures.
curBrand = connection.cursor()
SQLCommand = "execute dbo.USP_Brand"
curBrand.execute(SQLCommand)
connection.commit()
curBrand.close()



curProduct = connection.cursor()
SQLCommand = "execute dbo.USP_Product"
curProduct.execute(SQLCommand)
connection.commit()
curProduct.close()



curItem = connection.cursor()
SQLCommand = "execute dbo.USP_ITEM"
curItem.execute(SQLCommand)
connection.commit()
curItem.close()


curInv= connection.cursor()
SQLCommand = "execute dbo.USP_INVENTORY"
curInv.execute(SQLCommand)
connection.commit()
curInv.close()

curSales= connection.cursor()
SQLCommand = "execute dbo.USP_Sales"
curSales.execute(SQLCommand)
connection.commit()
curSales.close()


connection.close()