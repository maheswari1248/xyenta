import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http:HttpClient) { }
  url="https://restcountries.com/v3.1/name/";
  getsearchcountries(value:any):Observable<any>
  {
    return this._http.get<any>(this.url);
  }
}
