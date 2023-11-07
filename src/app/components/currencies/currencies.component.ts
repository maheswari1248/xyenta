import { Component } from '@angular/core';
import { XyentaService } from 'src/app/services/xyenta.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent 
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
    })
  }

}
