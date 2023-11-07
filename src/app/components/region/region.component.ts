import { Component } from '@angular/core';
import { XyentaService } from 'src/app/services/xyenta.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent
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
  })
 }
 
}
