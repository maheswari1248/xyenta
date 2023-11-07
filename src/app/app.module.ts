import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './components/country/country.component';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CountrynamesComponent } from './components/countrynames/countrynames.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './components/login/login.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { RegionComponent } from './components/region/region.component';
import { FlagComponent } from './components/flag/flag.component';

import { TimezonesComponent } from './components/timezones/timezones.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SearchComponent } from './components/search/search.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountrynamesComponent,
    LoginComponent,
    CurrenciesComponent,
    RegionComponent,
    FlagComponent,
   
    TimezonesComponent,
        ParentComponent,
        ChildComponent,
        SearchComponent,
      
        
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    FormControl,
    Router    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
