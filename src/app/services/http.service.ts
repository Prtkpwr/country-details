import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
const url = 'https://restcountries.eu/rest/v2';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _countryName = new Subject<any>();
  public changedValue;

  listen(): Observable<any> {
    return this._countryName.asObservable();
  }
  changeValue(value: string) {
    this.changedValue = value;
    this._countryName.next(value);
  }
  getCountryValue(){
    return this.changedValue
  }
  constructor(private _http: HttpClient) { }
  public getCountryList() {
    return this._http.get(`${url}/all`)
  }
  public getSingleCountryDetails(alpha3code){
    return this._http.get(`${url}/alpha/${alpha3code}`)
  }
}
