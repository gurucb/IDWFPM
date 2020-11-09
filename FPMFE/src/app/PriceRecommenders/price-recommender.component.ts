import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {IProduct} from './products'

@Component({
selector:'pm-price',
templateUrl:'./price-recommender.component.html' 
})


export class PriceRecommenderComponent{
    pageTitle:string="Flipkart Price Recommendations";
    _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  constructor(){
      this.filteredProducts = this.products;

  }
  performFilter(filterBy: string): IProduct[] {
   filterBy = filterBy.toLocaleLowerCase();
   return this.products.filter((product: IProduct) =>
     product.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
 }

  filteredProducts: IProduct[] = [];
  
    products:IProduct [] = [
      {
         "Id":10,
         "Name":"Asus ROG Phone 3 (Black  256 GB)",
         "actualprice":54999.00,
         "recommprice":13258.98,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":19,
         "Name":"Asus Zenfone Go 5.0 LTE (White  16 GB)",
         "actualprice":7999.00,
         "recommprice":13258.98,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":123,
         "Name":"Redmi Note 9 Pro (Interstellar Black  64 GB)",
         "actualprice":13562.00,
         "recommprice":13562.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":111,
         "Name":"Redmi 9 Prime (Space Blue  128 GB)",
         "actualprice":11165.00,
         "recommprice":11165.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":122,
         "Name":"Redmi Note 9 Pro (Interstellar Black  128 GB)",
         "actualprice":15049.00,
         "recommprice":15049.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":40,
         "Name":"Honor 9N (Sapphire Blue  64 GB)",
         "actualprice":11999.00,
         "recommprice":11999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":10,
         "Name":"Asus ROG Phone 3 (Black  256 GB)",
         "actualprice":54999.00,
         "recommprice":54999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":54,
         "Name":"Infinix Hot 10 (Ocean Wave  128 GB)",
         "actualprice":10999.00,
         "recommprice":10999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":47,
         "Name":"Honor Holly (Black\/White  16 GB)",
         "actualprice":5999.00,
         "recommprice":5999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":41,
         "Name":"Honor 9S (Black  32 GB)",
         "actualprice":6499.00,
         "recommprice":6499.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":125,
         "Name":"Vivo S1 Pro (Jazzy Blue  128 GB)",
         "actualprice":18990.00,
         "recommprice":18990.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":50,
         "Name":"Infinix Hot 10 (Amber Red  128 GB)",
         "actualprice":10999.00,
         "recommprice":10999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":121,
         "Name":"Redmi Note 9 Pro (Champagne Gold  64 GB)",
         "actualprice":13940.00,
         "recommprice":13940.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":48,
         "Name":"Honor Play (Midnight Black  64 GB)",
         "actualprice":25999.00,
         "recommprice":25999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":81,
         "Name":"Realme 7 Pro (Mirror Blue  128 GB)",
         "actualprice":19999.00,
         "recommprice":19999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":83,
         "Name":"Realme 7i (Fusion Green  128 GB)",
         "actualprice":12999.00,
         "recommprice":12999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":37,
         "Name":"Honor 9i (Aurora Blue  64 GB)",
         "actualprice":12999.00,
         "recommprice":12999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":15,
         "Name":"Asus Zenfone 4 Selfie (Black  32 GB)",
         "actualprice":10999.00,
         "recommprice":10999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":53,
         "Name":"Infinix Hot 10 (Moonlight Jade  64 GB)",
         "actualprice":8999.00,
         "recommprice":8999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":124,
         "Name":"Vivo S1 Pro (Dreamy White  128 GB)",
         "actualprice":18990.00,
         "recommprice":18990.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":49,
         "Name":"Honor Play (Navy Blue  64 GB)",
         "actualprice":17999.00,
         "recommprice":17999.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":14,
         "Name":"Asus Zenfone 4 (Yellow  8 GB)",
         "actualprice":7499.00,
         "recommprice":7499.01,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":39,
         "Name":"Honor 9N (Sapphire Blue  128 GB)",
         "actualprice":19999.00,
         "recommprice":12750.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":38,
         "Name":"Honor 9N (Midnight Black  128 GB)",
         "actualprice":19999.00,
         "recommprice":14790.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":110,
         "Name":"Redmi 9 Prime (MintGreen  128 GB)",
         "actualprice":11078.00,
         "recommprice":13520.10,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":40,
         "Name":"Honor 9N (Sapphire Blue  64 GB)",
         "actualprice":11999.00,
         "recommprice":14790.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":121,
         "Name":"Redmi Note 9 Pro (Champagne Gold  64 GB)",
         "actualprice":13940.00,
         "recommprice":21409.80,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":115,
         "Name":"Redmi Note 8 (Cosmic Purple  64 GB)",
         "actualprice":11499.00,
         "recommprice":15279.60,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":102,
         "Name":"Redmi 8A Dual (Midnight Grey  32 GB)",
         "actualprice":6999.00,
         "recommprice":10189.80,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":48,
         "Name":"Honor Play (Midnight Black  64 GB)",
         "actualprice":25999.00,
         "recommprice":6118.98,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":112,
         "Name":"Redmi 9 Prime (Space Blue  64 GB)",
         "actualprice":11649.00,
         "recommprice":14278.98,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":15,
         "Name":"Asus Zenfone 4 Selfie (Black  32 GB)",
         "actualprice":10999.00,
         "recommprice":6109.80,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":29,
         "Name":"Honor 7C (Gold  64 GB)",
         "actualprice":11299.00,
         "recommprice":15298.98,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":19,
         "Name":"Asus Zenfone Go 5.0 LTE (White  16 GB)",
         "actualprice":7999.00,
         "recommprice":8668.98,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":118,
         "Name":"Redmi Note 8 (Space Black  64 GB)",
         "actualprice":11499.00,
         "recommprice":15268.38,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":113,
         "Name":"Redmi 9 Prime (SunriseFlare  128 GB)",
         "actualprice":11349.00,
         "recommprice":16800.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":126,
         "Name":"Vivo S1 Pro (Mystic Black  128 GB)",
         "actualprice":18990.00,
         "recommprice":22039.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":23,
         "Name":"Asus ZenFone Max M2 (Blue  32 GB)",
         "actualprice":7999.00,
         "recommprice":13648.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":85,
         "Name":"Realme C11 (Rich Green  32 GB)",
         "actualprice":6999.00,
         "recommprice":142499.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":73,
         "Name":"Infinix Smart 4 Plus (Violet  32 GB)",
         "actualprice":7499.00,
         "recommprice":12349.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":114,
         "Name":"Redmi 9 Prime (SunriseFlare  64 GB)",
         "actualprice":10898.00,
         "recommprice":16800.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":92,
         "Name":"Realme Narzo 10 (That Blue  128 GB)",
         "actualprice":11999.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":5,
         "Name":"Apple iPhone SE (Red  256 GB) (Includes EarPods  Power Adapter)",
         "actualprice":47999.00,
         "recommprice":61215.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":91,
         "Name":"Realme C3 (Frozen Blue  32 GB)",
         "actualprice":7999.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":104,
         "Name":"Redmi 8A Dual (Sky White  32 GB)",
         "actualprice":6999.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":105,
         "Name":"Redmi 9 (Sky Blue  128 GB)",
         "actualprice":10818.00,
         "recommprice":26248.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":117,
         "Name":"Redmi Note 8 (Neptune Blue  64 GB)",
         "actualprice":11499.00,
         "recommprice":15727.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":13,
         "Name":"Asus Zenfone 4 (Red  8 GB)",
         "actualprice":7499.00,
         "recommprice":41998.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":110,
         "Name":"Redmi 9 Prime (MintGreen  128 GB)",
         "actualprice":11078.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":67,
         "Name":"Infinix Note 7 (Aether Black  64 GB)",
         "actualprice":10999.00,
         "recommprice":13648.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":114,
         "Name":"Redmi 9 Prime (SunriseFlare  64 GB)",
         "actualprice":10898.00,
         "recommprice":15734.25,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":135,
         "Name":"Vivo Y12 (Aqua Blue  64 GB)",
         "actualprice":10990.00,
         "recommprice":19939.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":55,
         "Name":"Infinix Hot 10 (Ocean Wave  64 GB)",
         "actualprice":8999.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":20,
         "Name":"Asus ZenFone Lite L1 (Gold  16 GB)",
         "actualprice":4999.00,
         "recommprice":15748.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":141,
         "Name":"Vivo Y50 (Iris Blue  128 GB)",
         "actualprice":16990.00,
         "recommprice":22039.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":133,
         "Name":"Vivo Y11 (Agate Red  32 GB)",
         "actualprice":9990.00,
         "recommprice":16789.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":74,
         "Name":"Motorola Razr (Black  128 GB)",
         "actualprice":84999.00,
         "recommprice":13648.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":42,
         "Name":"Honor 9S (Blue  32 GB)",
         "actualprice":6499.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":45,
         "Name":"Honor 9x Pro (Midnight Black  256 GB)",
         "actualprice":16999.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":63,
         "Name":"Infinix Hot S3X (Tradew Gray  32 GB)",
         "actualprice":10999.00,
         "recommprice":10078.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":41,
         "Name":"Honor 9S (Black  32 GB)",
         "actualprice":6499.00,
         "recommprice":18999.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":36,
         "Name":"Honor 8X (Blue  64 GB)",
         "actualprice":19999.00,
         "recommprice":37798.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":68,
         "Name":"Infinix Note 7 (Bolivia Blue  64 GB)",
         "actualprice":10999.00,
         "recommprice":17848.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":71,
         "Name":"Infinix Smart 4 Plus (Ocean Wave  32 GB)",
         "actualprice":7499.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":14,
         "Name":"Asus Zenfone 4 (Yellow  8 GB)",
         "actualprice":7499.00,
         "recommprice":13648.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":28,
         "Name":"Honor 7C (Black  32 GB)",
         "actualprice":12999.00,
         "recommprice":16378.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":34,
         "Name":"Honor 7X (Red  32 GB)",
         "actualprice":14500.00,
         "recommprice":14122.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":17,
         "Name":"Asus ZenFone 5Z (Midnight Blue  256 GB)",
         "actualprice":21999.00,
         "recommprice":10078.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":136,
         "Name":"Vivo Y12 (Burgundy Red  64 GB)",
         "actualprice":10990.00,
         "recommprice":19939.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":77,
         "Name":"Realme 6 (Comet White  128 GB)",
         "actualprice":14999.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":139,
         "Name":"Vivo Y30 (Dazzle Blue  128 GB)",
         "actualprice":13990.00,
         "recommprice":22039.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":143,
         "Name":"Vivo Y91i (Ocean Blue  32 GB)",
         "actualprice":7990.00,
         "recommprice":20989.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":100,
         "Name":"Redmi 8 (Ruby Red  64 GB)",
         "actualprice":10999.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":118,
         "Name":"Redmi Note 8 (Space Black  64 GB)",
         "actualprice":11499.00,
         "recommprice":30448.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":140,
         "Name":"Vivo Y30 (Emerald Black  128 GB)",
         "actualprice":13990.00,
         "recommprice":16789.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":21,
         "Name":"Asus ZenFone Max M1 (Gold  32 GB)",
         "actualprice":6499.00,
         "recommprice":13648.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":62,
         "Name":"Infinix Hot 9 Pro (Quetzal Cyan  64 GB)",
         "actualprice":9499.00,
         "recommprice":13648.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":115,
         "Name":"Redmi Note 8 (Cosmic Purple  64 GB)",
         "actualprice":11499.00,
         "recommprice":30448.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":127,
         "Name":"Vivo U10 (Thunder Black  32 GB)",
         "actualprice":9990.00,
         "recommprice":11340.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":134,
         "Name":"Vivo Y11 (Mineral Blue  32 GB)",
         "actualprice":9990.00,
         "recommprice":16789.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":51,
         "Name":"Infinix Hot 10 (Amber Red  64 GB)",
         "actualprice":8999.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":38,
         "Name":"Honor 9N (Midnight Black  128 GB)",
         "actualprice":19999.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":27,
         "Name":"Honor 6 Plus (Black  32 GB)",
         "actualprice":26499.00,
         "recommprice":13858.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":30,
         "Name":"Honor 7X (Black  32 GB)",
         "actualprice":12722.00,
         "recommprice":18898.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":69,
         "Name":"Infinix Note 7 (Forest Green  64 GB)",
         "actualprice":10999.00,
         "recommprice":17848.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":132,
         "Name":"Vivo V20 (Sunset Melody  256 GB)",
         "actualprice":27990.00,
         "recommprice":14689.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":99,
         "Name":"Realme Narzo 20A (Victory Blue  64 GB)",
         "actualprice":9499.00,
         "recommprice":11548.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":35,
         "Name":"Honor 8",
         "actualprice":29999.00,
         "recommprice":37798.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":103,
         "Name":"Redmi 8A Dual (Sea Blue  32 GB)",
         "actualprice":6999.00,
         "recommprice":8598.45,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":111,
         "Name":"Redmi 9 Prime (Space Blue  128 GB)",
         "actualprice":11165.00,
         "recommprice":16789.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":13,
         "Name":"Asus Zenfone 4 (Red  8 GB)",
         "actualprice":7499.00,
         "recommprice":14122.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":128,
         "Name":"Vivo V20 (Midnight Jazz  128 GB)",
         "actualprice":24990.00,
         "recommprice":57739.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":78,
         "Name":"Realme 6 (Comet White  64 GB)",
         "actualprice":12999.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":29,
         "Name":"Honor 7C (Gold  64 GB)",
         "actualprice":11299.00,
         "recommprice":13858.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":119,
         "Name":"Redmi Note 9 (Pebble Grey  64 GB)",
         "actualprice":12088.00,
         "recommprice":17814.30,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":36,
         "Name":"Honor 8X (Blue  64 GB)",
         "actualprice":19999.00,
         "recommprice":18999.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":97,
         "Name":"Realme Narzo 20A (Glory Silver  32 GB)",
         "actualprice":8499.00,
         "recommprice":13648.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":58,
         "Name":"Infinix Hot 9 (Ocean Wave  64 GB)",
         "actualprice":8999.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":117,
         "Name":"Redmi Note 8 (Neptune Blue  64 GB)",
         "actualprice":11499.00,
         "recommprice":30448.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":56,
         "Name":"Infinix Hot 7 (Aqua Blue  64 GB)",
         "actualprice":9890.00,
         "recommprice":10395.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":63,
         "Name":"Infinix Hot S3X (Tradew Gray  32 GB)",
         "actualprice":10999.00,
         "recommprice":13648.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":8,
         "Name":"Apple iPhone SE (White  256 GB) (Includes EarPods  Power Adapter)",
         "actualprice":47999.00,
         "recommprice":61215.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":57,
         "Name":"Infinix Hot 7 (Midnight Black  64 GB)",
         "actualprice":9999.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":72,
         "Name":"Infinix Smart 4 Plus (Quetzal Cyan  32 GB)",
         "actualprice":7499.00,
         "recommprice":12349.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":131,
         "Name":"Vivo V20 (Sunset Melody  128 GB)",
         "actualprice":24990.00,
         "recommprice":14689.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":6,
         "Name":"Apple iPhone SE (Red  64 GB) (Includes EarPods  Power Adapter)",
         "actualprice":32999.00,
         "recommprice":44625.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":129,
         "Name":"Vivo V20 (Midnight Jazz  256 GB)",
         "actualprice":27990.00,
         "recommprice":10395.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":3,
         "Name":"Apple iPhone SE (Black  64 GB) (Includes EarPods  Power Adapter)",
         "actualprice":32999.00,
         "recommprice":44625.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":44,
         "Name":"Honor 9X (Sapphire Blue  128 GB)",
         "actualprice":13999.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":88,
         "Name":"Realme C12 (Power Silver  32 GB)",
         "actualprice":7999.00,
         "recommprice":11340.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":112,
         "Name":"Redmi 9 Prime (Space Blue  64 GB)",
         "actualprice":11649.00,
         "recommprice":24148.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":22,
         "Name":"Asus ZenFone Max M2 (Black  32 GB)",
         "actualprice":7999.00,
         "recommprice":15748.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":116,
         "Name":"Redmi Note 8 (Moonlight White  64 GB)",
         "actualprice":11499.00,
         "recommprice":33598.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":33,
         "Name":"Honor 7X (Gold  64 GB)",
         "actualprice":15500.00,
         "recommprice":25179.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":52,
         "Name":"Infinix Hot 10 (Moonlight Jade  128 GB)",
         "actualprice":10999.00,
         "recommprice":19948.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":95,
         "Name":"Realme Narzo 20 Pro (Black Ninja  128 GB)",
         "actualprice":15999.00,
         "recommprice":13648.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":1,
         "Name":"Apple iPhone SE (Black  128 GB) (Includes EarPods  Power Adapter)",
         "actualprice":37999.00,
         "recommprice":50190.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":120,
         "Name":"Redmi Note 9 (Scarlet Red  128 GB)",
         "actualprice":15839.00,
         "recommprice":17805.90,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":96,
         "Name":"Realme Narzo 20 Pro (Black Ninja  64 GB)",
         "actualprice":13999.00,
         "recommprice":13648.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":26,
         "Name":"Honor 20 (Sapphire Blue  128 GB)",
         "actualprice":22999.00,
         "recommprice":18898.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":103,
         "Name":"Redmi 8A Dual (Sea Blue  32 GB)",
         "actualprice":6999.00,
         "recommprice":13309.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":24,
         "Name":"Asus Zenfone Max Pro M1 (Blue  64 GB)",
         "actualprice":11999.00,
         "recommprice":15748.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":43,
         "Name":"Honor 9X (Midnight Black  128 GB)",
         "actualprice":13999.00,
         "recommprice":14122.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":46,
         "Name":"Honor 9x Pro (Phantom Purple  256 GB)",
         "actualprice":16999.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":66,
         "Name":"Infinix Note 5 Stylus (Charcoal Blue  64 GB)",
         "actualprice":11999.00,
         "recommprice":11548.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":18,
         "Name":"Asus Zenfone Go (Silver  8 GB)",
         "actualprice":5299.00,
         "recommprice":24699.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":31,
         "Name":"Honor 7X (Black  64 GB)",
         "actualprice":15500.00,
         "recommprice":16798.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":94,
         "Name":"Realme Narzo 20 (Victory Blue  128 GB)",
         "actualprice":11499.00,
         "recommprice":9448.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":39,
         "Name":"Honor 9N (Sapphire Blue  128 GB)",
         "actualprice":19999.00,
         "recommprice":14122.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":87,
         "Name":"Realme C12 (Power Blue  32 GB)",
         "actualprice":7999.00,
         "recommprice":17099.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":64,
         "Name":"Infinix Note 5 (Berlin Gray  64 GB)",
         "actualprice":12699.00,
         "recommprice":11340.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":90,
         "Name":"Realme C15 (Power Silver  32 GB)",
         "actualprice":8499.00,
         "recommprice":13309.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":2,
         "Name":"Apple iPhone SE (Black  256 GB) (Includes EarPods  Power Adapter)",
         "actualprice":47999.00,
         "recommprice":61215.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":7,
         "Name":"Apple iPhone SE (White  128 GB) (Includes EarPods  Power Adapter)",
         "actualprice":37999.00,
         "recommprice":50190.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":34,
         "Name":"Honor 7X (Red  32 GB)",
         "actualprice":14500.00,
         "recommprice":18999.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":120,
         "Name":"Redmi Note 9 (Scarlet Red  128 GB)",
         "actualprice":15839.00,
         "recommprice":17848.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":12,
         "Name":"Asus Zenfone 4 (Blue  8 GB)",
         "actualprice":6499.00,
         "recommprice":12495.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":9,
         "Name":"Apple iPhone SE (White  64 GB) (Includes EarPods  Power Adapter)",
         "actualprice":32999.00,
         "recommprice":44625.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":101,
         "Name":"Redmi 8 (Sapphire Blue  64 GB)",
         "actualprice":10999.00,
         "recommprice":10489.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":130,
         "Name":"Vivo V20 (Moonlight Sonata  128 GB)",
         "actualprice":24990.00,
         "recommprice":10395.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":49,
         "Name":"Honor Play (Navy Blue  64 GB)",
         "actualprice":17999.00,
         "recommprice":24699.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":32,
         "Name":"Honor 7X (Gold  32 GB)",
         "actualprice":14000.00,
         "recommprice":18898.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":93,
         "Name":"Realme Narzo 20 (Glory Silver  128 GB)",
         "actualprice":11499.00,
         "recommprice":9448.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":119,
         "Name":"Redmi Note 9 (Pebble Grey  64 GB)",
         "actualprice":12088.00,
         "recommprice":30448.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":106,
         "Name":"Redmi 9 (Sky Blue  64 GB)",
         "actualprice":9550.00,
         "recommprice":11548.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":25,
         "Name":"Asus Zenfone Selfie (Silver  16 GB)",
         "actualprice":8999.00,
         "recommprice":13858.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":62,
         "Name":"Infinix Hot 9 Pro (Quetzal Cyan  64 GB)",
         "actualprice":9499.00,
         "recommprice":10078.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":4,
         "Name":"Apple iPhone SE (Red  128 GB) (Includes EarPods  Power Adapter)",
         "actualprice":37999.00,
         "recommprice":50190.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":137,
         "Name":"Vivo Y20 (Dawn White  64 GB)",
         "actualprice":12990.00,
         "recommprice":20989.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":75,
         "Name":"Motorola Razr (Gold  128 GB)",
         "actualprice":84999.00,
         "recommprice":8398.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":107,
         "Name":"Redmi 9 (Sporty Orange  64 GB)",
         "actualprice":9550.00,
         "recommprice":11548.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":76,
         "Name":"Realme 6 (Comet Blue  64 GB)",
         "actualprice":12999.00,
         "recommprice":8398.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":80,
         "Name":"Realme 7 (Mist Blue  64 GB)",
         "actualprice":14999.00,
         "recommprice":52149.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":102,
         "Name":"Redmi 8A Dual (Midnight Grey  32 GB)",
         "actualprice":6999.00,
         "recommprice":14700.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":101,
         "Name":"Redmi 8 (Sapphire Blue  64 GB)",
         "actualprice":10999.00,
         "recommprice":11548.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":61,
         "Name":"Infinix Hot 9 Pro (Ocean Wave  64 GB)",
         "actualprice":9499.00,
         "recommprice":12598.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":138,
         "Name":"Vivo Y20i (Nebula Blue  64 GB)",
         "actualprice":11490.00,
         "recommprice":20989.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":84,
         "Name":"Realme 7i (Fusion Green  64 GB)",
         "actualprice":11999.00,
         "recommprice":142499.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":33,
         "Name":"Honor 7X (Gold  64 GB)",
         "actualprice":15500.00,
         "recommprice":12495.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":59,
         "Name":"Infinix Hot 9 (Quetzal Cyan  64 GB)",
         "actualprice":8999.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":142,
         "Name":"Vivo Y50 (Pearl White  128 GB)",
         "actualprice":16990.00,
         "recommprice":26239.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":82,
         "Name":"Realme 7i (Fusion Blue  128 GB)",
         "actualprice":12999.00,
         "recommprice":16629.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":16,
         "Name":"Asus Zenfone 4 Selfie (Gold  32 GB)",
         "actualprice":10999.00,
         "recommprice":10078.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":109,
         "Name":"Redmi 9 Prime (MatteBlack  64 GB)",
         "actualprice":10610.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":79,
         "Name":"Realme 7 (Mist Blue  128 GB)",
         "actualprice":16999.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":65,
         "Name":"Infinix Note 5 (Milan Black  64 GB)",
         "actualprice":12699.00,
         "recommprice":11340.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":60,
         "Name":"Infinix Hot 9 (Violet  64 GB)",
         "actualprice":8999.00,
         "recommprice":12598.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":35,
         "Name":"Honor 8",
         "actualprice":29999.00,
         "recommprice":18999.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":98,
         "Name":"Realme Narzo 20A (Glory Silver  64 GB)",
         "actualprice":9499.00,
         "recommprice":10498.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":86,
         "Name":"Realme C11 (Rich Grey  32 GB)",
         "actualprice":6999.00,
         "recommprice":18999.05,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":128,
         "Name":"Vivo V20 (Midnight Jazz  128 GB)",
         "actualprice":24990.00,
         "recommprice":10489.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":123,
         "Name":"Redmi Note 9 Pro (Interstellar Black  64 GB)",
         "actualprice":13562.00,
         "recommprice":11529.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":82,
         "Name":"Realme 7i (Fusion Blue  128 GB)",
         "actualprice":12999.00,
         "recommprice":11548.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":61,
         "Name":"Infinix Hot 9 Pro (Ocean Wave  64 GB)",
         "actualprice":9499.00,
         "recommprice":11529.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":30,
         "Name":"Honor 7X (Black  32 GB)",
         "actualprice":12722.00,
         "recommprice":14698.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":59,
         "Name":"Infinix Hot 9 (Quetzal Cyan  64 GB)",
         "actualprice":8999.00,
         "recommprice":11529.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":125,
         "Name":"Vivo S1 Pro (Jazzy Blue  128 GB)",
         "actualprice":18990.00,
         "recommprice":11529.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":42,
         "Name":"Honor 9S (Blue  32 GB)",
         "actualprice":6499.00,
         "recommprice":16798.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":60,
         "Name":"Infinix Hot 9 (Violet  64 GB)",
         "actualprice":8999.00,
         "recommprice":11529.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":67,
         "Name":"Infinix Note 7 (Aether Black  64 GB)",
         "actualprice":10999.00,
         "recommprice":8289.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":16,
         "Name":"Asus Zenfone 4 Selfie (Gold  32 GB)",
         "actualprice":10999.00,
         "recommprice":11548.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":17,
         "Name":"Asus ZenFone 5Z (Midnight Blue  256 GB)",
         "actualprice":21999.00,
         "recommprice":11548.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":81,
         "Name":"Realme 7 Pro (Mirror Blue  128 GB)",
         "actualprice":19999.00,
         "recommprice":11548.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":93,
         "Name":"Realme Narzo 20 (Glory Silver  128 GB)",
         "actualprice":11499.00,
         "recommprice":10449.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":57,
         "Name":"Infinix Hot 7 (Midnight Black  64 GB)",
         "actualprice":9999.00,
         "recommprice":12598.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":77,
         "Name":"Realme 6 (Comet White  128 GB)",
         "actualprice":14999.00,
         "recommprice":17049.00,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":58,
         "Name":"Infinix Hot 9 (Ocean Wave  64 GB)",
         "actualprice":8999.00,
         "recommprice":12598.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":127,
         "Name":"Vivo U10 (Thunder Black  32 GB)",
         "actualprice":9990.00,
         "recommprice":10489.50,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":37,
         "Name":"Honor 9i (Aurora Blue  64 GB)",
         "actualprice":12999.00,
         "recommprice":16798.95,
         "recommdate":"2020-11-05T03:25:32.003"
      },
      {
         "Id":70,
         "Name":"Infinix S5 Pro (Forest Green  64 GB)",
         "actualprice":11499.00,
         "recommprice":9599.00,
         "recommdate":"2020-11-05T03:25:32.003"
      }
   ];
}