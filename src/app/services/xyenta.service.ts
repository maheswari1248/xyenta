import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XyentaService {
 url="https://restcountries.com/v3.1/all";
 search="https://restcountries.com/v3.1/name/";

  constructor(private _http:HttpClient) { }
  getcountry():Observable<[]>
  {
    return this._http.get<[]>(this.url);
  }
  getsearchcountries(value):Observable<[]>
  {
    return this._http.get<[]>(this.search+value);
  }
}
