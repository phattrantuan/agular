import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import form mdoel
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';
//import router
import { AppRoutingModule } from './app-routing.module';
//import https get
import { HttpClientModule } from '@angular/common/http';


import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule, AppRoutingModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
