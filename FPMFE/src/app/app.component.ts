import { Component } from '@angular/core';


@Component({

  selector:'pm-root',
  template:`<div><h1>{{pageTitle}}</h1>
                 <pm-price></pm-price>
            </div>
  `
})


export class AppComponent {
  pageTitle:string = "IDW - FPM Price Recommendation Portal"
}