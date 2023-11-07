import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { CountrynamesComponent } from './components/countrynames/countrynames.component';
import { LoginComponent } from './components/login/login.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { RegionComponent } from './components/region/region.component';
import { FlagComponent } from './components/flag/flag.component';
import { TimezonesComponent } from './components/timezones/timezones.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';


const routes: Routes = [
  {
    path:'country',
  component:CountryComponent
  },
  {path:'countrynames',
  component:CountrynamesComponent
  },
  {path:'currencies',
  component:CurrenciesComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'child',
    component:ChildComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  
  
  {
    path:'flag',
    component:FlagComponent
  },
  {
    path:'region',
    component:RegionComponent
  },
  {
    path:'timezones',
    component:TimezonesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
