import { Component } from '@angular/core';
import { XyentaService } from 'src/app/services/xyenta.service';

@Component({
  selector: 'app-timezones',
  templateUrl: './timezones.component.html',
  styleUrls: ['./timezones.component.css']
})
export class TimezonesComponent {
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
   })
  }
}
