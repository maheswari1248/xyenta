import { Component } from '@angular/core';
import { XyentaService } from 'src/app/services/xyenta.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  //standalone:true,
  //imports: [MatTableModule, MatPaginatorModule]
})
export class CountryComponent 
{
  
  country:any;
  country1:any;
constructor(private _xyentaservice:XyentaService){}
ngOnInit()
{
  this.getcountrylist();
}
getcountrylist()
{

  this._xyentaservice.getcountry().subscribe((data:any)=>
  {
    this.country =  data.filter(d=> d.name.common === "Austria" )
    console.log(this.country);
    // this.country1=data.filter(m=>m.name.common==="Austria")
    // console.log(this.country1);
    // console.log(this.country);
    // this.country.filter(
    //   (v)=>{
    //   console.log(v.name.common=="Austria");
    //   }
    // )
  })
    
}

}


  
  
