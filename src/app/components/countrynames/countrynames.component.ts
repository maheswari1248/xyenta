import { Component } from '@angular/core';
import { XyentaService } from 'src/app/services/xyenta.service';

@Component({
  selector: 'app-countrynames',
  templateUrl: './countrynames.component.html',
  styleUrls: ['./countrynames.component.css']
})
export class CountrynamesComponent 
{
  country:any;
  constructor(private _xyentaservice:XyentaService){}
  ngOnInit()
  {
this.getcountrylist();
  }
  getcountrylist()
  {
    this._xyentaservice.getcountry().subscribe((data)=>
    {
      
      this.country=data;
      console.log(this.country);
    }
    )
  }

}
