import { Component } from '@angular/core';
import { XyentaService } from 'src/app/services/xyenta.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent 
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
