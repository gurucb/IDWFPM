import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PriceRecommenderComponent} from './PriceRecommenders/price-recommender.component'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PriceRecommenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
